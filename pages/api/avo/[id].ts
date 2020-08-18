import DB from '@database'
import { NextApiRequest, NextApiResponse } from 'next'

const singleAvo = async (
  request: NextApiRequest,
  response: NextApiResponse
) => {
  const id = request.query.id
  const db = new DB()
  const entry = await db.getById(id as string)

  response.status(200).json(entry)
}

export default singleAvo
