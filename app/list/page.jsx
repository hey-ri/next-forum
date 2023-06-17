import { connectDB } from '@/util/database';

import ListItme from './ListItem';

export default async function List() {
  const client = await connectDB;
  const db = client.db('forum');
  const result = await db.collection('post').find().toArray();
  console.log(result);

  return (
    <div className="list-bg">
      <ListItme data={result} />
    </div>
  );
}
