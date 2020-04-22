# nl-kbtg-hello-cloud-function

NLxKBTG Cloud Function example

## Setup

1. VSCode : https://code.visualstudio.com/download
1. Git Client : https://www.sourcetreeapp.com/
1. NodeJS : https://nodejs.org/en/download/

## Optional

1. [Launching from the command line (macOS)](https://code.visualstudio.com/docs/setup/mac#_launching-from-the-command-line)

## Firebase

1. Install firebase cli tools :
   ```shell
   npm i -g firebase-tools
   ```
1. Clone [source code from github](https://github.com/katopz/nl-covid)

   ```shell
   git clone git@github.com:katopz/nl-kbtg-hello-cloud-function.git

   cd nl-kbtg-hello-cloud-function
   ```

1. Setup `Firebase` project
   ```shell
   firebase login
   firebase init
   ```
1. Setup `BigQuery`
   ```shell
   # See : https://cloud.google.com/docs/authentication/getting-started
   export GOOGLE_APPLICATION_CREDENTIALS=.credential.json
   ```
1. Open VSCode
   ```shell
   code .
   ```
1. Run
   ```shell
   cd functions
   npm run serve
   ```
1. Develop
   ```shell
   cd functions
   npm run dev
   ```
