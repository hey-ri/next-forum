import { connectDB } from '@/util/database';
import { ObjectId } from 'mongodb';

export default async function handler(req, res) {
  if (req.method == 'POST' || req.method == 'DELETE') {
    console.log('delete 페이지', req.body);

    try {
      const db = (await connectDB).db('forum');
      const result = db.collection('post').deleteOne({ _id: new ObjectId(req.body) });
      console.log(result);
    } catch (err) {
      res.status(500);
    }
  }
}
