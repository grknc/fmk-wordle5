# React FMK Wordle

This is a clone project of the popular word guessing game we all know and love. Made using React, Typescript, and Tailwind.

![This is an image](https://pbs.twimg.com/profile_banners/1467755506320252933/1643533301/1500x500)

Football Manager Series

World Player Wordle List - Made by Gurkan Canakci

Rules : 

Foreign Players with 5 letters

7 Choices for correct answer




Made by Gurkan Canakci

[**FMK Wordle Game!**](https://fmkwordle-grknc.vercel.app/)

## Build and run

### To Run Locally:

Clone the repository and perform the following command line actions:

```bash
$> cd react-wordle
$> npm install
$> npm run start
```

### To build/run docker container:

#### Development

```bash
$> docker build -t reactle:dev -f docker/Dockerfile .
$> docker run -d -p 3000:3000 --name reactle-dev reactle:dev
```

Open [http://localhost:3000](http://localhost:3000) in browser.

#### Production

```bash
$> docker build --target=prod -t reactle:prod -f docker/Dockerfile .
$> docker run -d -p 80:8080  --name reactle-prod reactle:prod
```

Open [http://localhost](http://localhost) in browser.



