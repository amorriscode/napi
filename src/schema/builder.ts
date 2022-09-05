import SchemaBuilder from '@pothos/core'
import PrismaPlugin from '@pothos/plugin-prisma'
import type PrismaTypes from '@pothos/plugin-prisma/generated'

import { db } from '../db'

export const builder = new SchemaBuilder<{
  PrismaTypes: PrismaTypes
}>({
  plugins: [PrismaPlugin],
  prisma: {
    client: db,
    filterConnectionTotalCount: true,
  },
})

builder.queryType({})
// builder.mutationType({})
