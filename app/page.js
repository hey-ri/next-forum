import { MongoClient } from 'mongodb';
import { connectDB } from '@/util/database';

export default async function Home() {
  /* DB와 연결하는 코드들은 server component 안에다가 작성하는 것이 좋다. client에 적으면 유저가 쉽게 볼 수 있기 때문이다 */
  const client = await connectDB;
  const db = client.db('forum');
  const result = await db.collection('post').find().toArray();

  console.log(result);

  return <div>hi</div>;
}
