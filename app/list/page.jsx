import { connectDB } from '@/util/database';
import Link from 'next/link';

export default async function List() {
  const client = await connectDB;
  const db = client.db('forum');
  const result = await db.collection('post').find().toArray();
  console.log(result);

  return (
    <div className="list-bg">
      {result.map((data, i) => (
        <div key={i} className="list-item">
          <Link href={`/detail/${data._id}`}>{data.title}</Link>
          <p>1월 1일</p>
        </div>
      ))}
    </div>
  );
}
