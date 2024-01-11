import { connectDB } from '@/util/database';
import { ObjectId } from 'mongodb';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]';

export default async function handler(req, res) {
  if (req.method == 'POST' || req.method == 'DELETE') {
    const session = await getServerSession(req, res, authOptions);
    const db = (await connectDB).db('forum');
    const findData = await db.collection('post').findOne({ _id: new ObjectId(req.body) });

    const userDataList = await db.collection('user_cred').find().toArray();
    console.log('delete.js,session', userDataList);

    if (userDataList.map((data) => data == 'admin') || findData.author == (session && session.user.email)) {
      try {
        const result = await db.collection('post').deleteOne({ _id: new ObjectId(req.body) });
        console.log('결과', result);
        res.status(200).json('삭제완료');
      } catch (err) {
        res.status(500);
      }
    } else {
      return res.status(500).json('작성자 또는 관리자만 삭제할 수 있습니다.');
    }
  }
}
