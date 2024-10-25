import type { NextApiRequest, NextApiResponse } from 'next';
import { serialize } from 'cookie';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const response = await fetch('http://localhost:4000/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(req.body),
  });

  const data = await response.json();

  if (response.ok) {
    // Serializar el objeto a una cadena JSON
    const serializedData = JSON.stringify(data);

    console.log(serializedData)

    // Configurar la cookie
    res.setHeader('Set-Cookie', serialize('user', serializedData, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== 'development', // Solo en producción
      sameSite: 'strict',
      path: '/',
    }));

    return res.status(200).json({ message: 'Login successfully' });
  } else {
    return res.status(response.status).json(data);
  }
}
