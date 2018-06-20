## paradigma-react-code-challenge-server

Server side app for *Paradigma digital*.

### Setup

Using `npm install`.

### Development

Start the server with `npm start`. It has only 1 useful endpoint (and 1 not so useful endpoint):

- `/products` -> Returns mock phone data
- `/help` -> Just in case you are lost

Everything else returns an error

It runs in `http://localhost:5000`

### Tests

Tests are run with `npm test`

It's just basic testing with *mocha* and *chai*

### Production

### Docker

Build: `docker build -t <app-name> .`

Run: `sudo docker run -it -p <port-number>:5000 --rm <app-name>`

### Details

Uses *nodejs* and *express* to return mock data in a custom endpoint.

Tested with *mocha* and *chai*.

Using Docker and Git.

By _Jorge Aguirre_
