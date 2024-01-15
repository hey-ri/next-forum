import { connectDB } from '@/util/database';
import { ObjectId } from 'mongodb';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]';

export default async function handler(req, res) {
  if (req.method == 'POST') {
    const session = await getServerSession(req, res, authOptions);
    const db = (await connectDB).db('forum');
    req.body = JSON.parse(req.body);

    const commentId = req.body.commentId.toString();

    const result = await db.collection('comment').findOne(new ObjectId(commentId));

    if (session) {
      if (result.author.toString() == session.user.email) {
        const findData = await db.collection('comment').deleteOne({ _id: new ObjectId(req.body.commentId) });
        console.log('findData', findData);
        res.status(200).json('저장완료');
      } else {
        return res.status(500).json('현재유저와 작성자 불일치');
      }
    } else {
      return res.status(500).json('로그인 후 본인 글만 삭제가능');
    }
  }
}
