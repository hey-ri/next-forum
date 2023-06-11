import { connectDB } from '@/util/database';
import { ObjectId } from 'mongodb';

export default async function handler(req, res) {
  if (req.method == 'POST') {
    console.log('edit 페이지', req.body);

    const editContent = { title: req.body.title, content: req.body.content };

    const db = (await connectDB).db('forum');
    const result = db.collection('post').updateOne({ _id: new ObjectId(req.body._id) }, { $set: editContent });

    console.log({ result });

    res.redirect(302, '/list');
  }
}
