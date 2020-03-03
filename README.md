# MoreTrees.nyc 

## Setup

* Install the **server dependencies**
  ```sh
  $ cd moretrees
  $ npm install
  ```
* Install the **client dependencies**
  ```sh
  $ cd moretrees/client
  $ npm install
  ```
* Fill in your `.env` details

## Develop

* If using mongodb locally:
  ```sh
  $ mongod
  ```
* Start the server
  ```sh
  $ cd moretrees
  $ npm run dev
  ```
* Start the client
  ```sh
  $ cd moretrees/client
  $ npm run serve
  ```

## Deploy

The app is designed to be hosted on Heroku.