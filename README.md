# Free Gospel Church site

This is a static website for Free Gospel Church of Culpeper, deployed as a Dockerized app and served under the subpath:

- `https://youssefaltai.com/haroldbsmith/freegospelchurch/`

## Local / VPS usage

The site is served by a simple Node-based static file server inside a container, listening on port **3000**, and fronted by a central Caddy reverse proxy (in the separate `infra` stack).

To (re)build and start the container on the VPS:

```bash
docker compose up -d --build
```

This:

- Builds the image from the local `Dockerfile`.
- Runs the `freegospelchurch` service on the external Docker network `web`.
- Exposes the app internally on port **3000**.

The central Caddy instance (in `~/infra`) is responsible for:

- Listening on ports 80/443.
- Proxying `/haroldbsmith/freegospelchurch/*` to `freegospelchurch:3000`.

## Files

- `Dockerfile`: builds a Node 20 Alpine image and serves the static site via `serve` on port 3000.
- `docker-compose.yml`: defines the `freegospelchurch` service attached to the `web` network.
- `index.html`, `styles.css`, `script.js`, `assets/`: the static site content.

