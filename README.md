# altair-graphql-plugin-tracing

Apollo tracing visualization for [Altair GraphQL client](https://altair.sirmuel.design/). Ported (retrofitted) from https://github.com/graphql/graphql-playground

### Development

Run `yarn parcel watch src/index.ts` (or `build`) and run `yarn web-server` on another terminal.

Open any available Altair GraphQL client and add the following plugin:
`url:altair-graphql-plugin-tracing@0.0.1::[url]->[http://localhost:8002]`

If you change the port of the web server, make sure to update the plugin accordingly also.
