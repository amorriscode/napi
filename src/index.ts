import express from 'express'
import { createServer } from '@graphql-yoga/node'

import { schema } from './schema'

const gqlServer = createServer({
  schema,
})

const app = express()
const port = process.env.PORT || 3000
const gqlEndpoint = `/graphql`

app.use(gqlEndpoint, gqlServer)

app.listen(port, () => {
  console.log(`🚀 OneQuest API ready at http://localhost:${port}${gqlEndpoint}`)
})
