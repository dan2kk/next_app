import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email, password } = req.body;
    
    // Here you would typically validate the user credentials against your database
    // For this example, we'll use a mock authentication
    if (email === 'user@example.com' && password === 'password') {
      res.status(200).json({ 
        message: 'Login successful',
        id: req.body.id,
        ok: true,
       });
    } else {
      res.status(200).json({ 
        message: 'Invalid credentials',
        ok: false });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
  
}