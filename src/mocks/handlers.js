import { rest } from 'msw'
import db from '../../db.json'

const BASE_URL = 'http://localhost:3001'

export const handlers = [
  rest.get(`${BASE_URL}/grocery`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(db.grocery))
  }),
]
