integration-example
====


## Running integration embedding local dev app

Run the obsidian app in dev mode (`npm run dev` in the parent directory), then
run :

```shell
npm run dev
```

The integration server will start on `http://localhost:8081`, embedding
the obsidian app on `http://localhost:8080`.


## Running integration embedding another url

You may also run the integration embedding another local port or a deploy url
using `OBSIDIAN_APP_URL` environment variable:

```shell
npx cross-env OBSIDIAN_APP_URL="http://localhost:1337" npm run start-integration-dev-server
```

```shell
npx cross-env OBSIDIAN_APP_URL="http://example.com" npm run start-integration-dev-server
```

The integration server will start on `http://localhost:8081`, embedding
the provided url.
