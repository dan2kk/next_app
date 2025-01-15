import type { NextApiRequest, NextApiResponse } from 'next'
 
type ResponseData = {
  message: string
}
 
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
    res.setHeader('Allow', ['POST']);
    if (req.method === 'POST') {
      res.status(200).json({ message: '' });
    } else {
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}