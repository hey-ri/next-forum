import { connectDB } from '@/util/database';
import bcrypt from 'bcrypt';

export default async function handler(req, res) {
  const db = (await connectDB).db('forum');
  const alreadyData = await db.collection('user_cred').find().toArray();
  // const alreadyData = await db.collection('user_cred').findOne({ email: req.user.email });

  // console.log(alreadyData.map((result) => result.email).includes(req.body.email));
  if (alreadyData.map((result) => result.email).includes(req.body.email)) {
    res.status(500).json('해당 이메일은 이미 존재합니다.');
  } else if (req.method === 'POST' && req.body.password !== '' && req.body.email !== '' && req.body.name !== '') {
    const hash = await bcrypt.hash(req.body.password, 10);
    req.body.password = hash;

    await db.collection('user_cred').insertOne(req.body);
    res.status(200).json('성공');
  } else {
    res.status(500).json('해당 칸에 빈칸이 있으면 안됩니다.');
  }
}
