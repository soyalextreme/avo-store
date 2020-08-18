import { NextApiRequest, NextApiResponse } from 'next'

const yesNo = (req: NextApiRequest, res: NextApiResponse) => {
  let yesNo
  const randomNumber = Math.floor(Math.random() * 10)
  if (randomNumber >= 5) {
    yesNo = true
  } else {
    yesNo = false
  }
  res.json({ yesNo })
}

export default yesNo
