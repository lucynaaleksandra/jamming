# Jamming by Lucyna Aleksandra

Requires a .env file with your spotify CLIENT_ID environment variable.

example:
```bash
#!/bin/sh

export CLIENT_ID=YOUR_SPOTIFY_CLIENT_ID
```

## Setup
To setup the project locally enter the commands into your terminal.  The project will start after install.
```bash
git clone https://github.com/lucynaaleksandra/jamming.git
cd jamming
npm i
```

## Run
To start the project anytime after setup enter either one of the commands into your terminal.
```bash
npm start

#or

npm run dev
```

## Build
To build the project for deployment enter the command into your terminal.
```bash
npm run build
```

## Deploy to surge
To build & deploy to surge account.  Requires a configured surge account.
```bash
npm run deploy
```