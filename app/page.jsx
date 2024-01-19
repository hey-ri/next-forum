import { connectDB } from '@/util/database';

import ListItme from './ListItem';

export default async function List() {
  const client = await connectDB;
  const db = client.db('forum');
  let result = await db.collection('post').find().toArray();
  result = result.map((a) => {
    a._id = a._id.toString();
    return a;
  });

  // console.log('list 결과물', result);

  return (
    <div className="list-bg">
      <ListItme result={result} />
    </div>
  );
}
