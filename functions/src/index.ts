import * as functions from 'firebase-functions'
import fetch from 'node-fetch'
import * as bigquery from '@google-cloud/bigquery'

export const REGION = 'asia-northeast1'

export const helloWorld = functions.region(REGION).https.onRequest((request, response) => {
  response.send('Hello from Firebase - asia-northeast1!')
})

// Extract, Transform
export const json2csv = functions.region(REGION).https.onRequest((request, response) => {
  fetch('https://covid19.th-stat.com/api/open/timeline')
    .then(res => res.json())
    .then(json => {
      const header = Object.keys(json.Data.shift()).join(',')
      const data = json.Data.map((e: any) => Object.values(e).join(',')).join('\n')
      response.send(header + '\n' + data)
    })
    .catch(console.error)
})

// Query
export const query = functions.region(REGION).https.onRequest((request, response) => {
  const bq = new bigquery.BigQuery()
  bq.query({
    query: 'SELECT * FROM `bigquery-public-data.covid19_jhu_csse.summary` ORDER BY date DESC LIMIT 10',
    location: 'US'
  })
    .then((data: any) => response.send(data[0]))
    .catch(console.error)
})
