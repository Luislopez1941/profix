import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log('Request received:', req.body);

  const response = await fetch('http://localhost:4000/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(req.body),
  });

  const data = await response.json();

  if (response.ok) {
    res.status(200).json(data);
  } else {
    res.status(response.status).json({ error: data.message });
  }
}
