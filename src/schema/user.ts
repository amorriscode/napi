import { builder } from './builder'
import { db } from '../db'

const User = builder.prismaObject('User', {
  fields: (t) => ({
    id: t.exposeID('id'),
    username: t.exposeString('username'),
    countryCode: t.exposeString('countryCode'),
    areaCode: t.exposeString('areaCode'),
    phoneNumber: t.exposeString('phoneNumber'),
  }),
})

builder.queryFields((t) => ({
  user: t.prismaField({
    type: User,
    nullable: true,
    args: { id: t.arg.string({ required: true }) },
    resolve: async (query, _, { id }) =>
      db.user.findUnique({
        ...query,
        where: { id },
      }),
  }),
}))
