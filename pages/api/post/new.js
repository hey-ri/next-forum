import { connectDB } from '@/util/database';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]';

export default async function handler(req, res) {
  const session = await getServerSession(req, res, authOptions);
  if (session) {
    req.body.author = session.user.email;
  }
  console.log(req.body);
  if (req.method == 'POST') {
    if (req.body.title !== '' && req.body.content !== '') {
      const db = (await connectDB).db('forum');
      const result = db.collection('post').insertOne(req.body);

      res.redirect(302, '/list');
      return;
    }
    res.status(500).json('제목 및 글 내용은 빈칸이 될 수 없습니다');
  }
}
