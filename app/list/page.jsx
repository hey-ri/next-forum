import { connectDB } from '@/util/database';
import Link from 'next/link';
import DetailLink from './DetailLink';

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
          <DetailLink />
          <p>1월 1일</p>
        </div>
      ))}
    </div>
  );
}
