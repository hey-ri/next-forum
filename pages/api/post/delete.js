import { connectDB } from '@/util/database';
import { ObjectId } from 'mongodb';

export default async function handler(req, res) {
  console.log('delete 페이지', req.body);
  if (req.method == 'POST' || req.method == 'DELETE') {
    try {
      const db = (await connectDB).db('forum');
      const result = await db.collection('post').deleteOne({ _id: new ObjectId(req.body) });
      console.log('결과', result);
      res.status(200).json('삭제완료');
    } catch (err) {
      res.status(500);
    }
  }
}
