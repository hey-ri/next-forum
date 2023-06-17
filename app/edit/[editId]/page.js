import { connectDB } from '@/util/database';
import { ObjectId } from 'mongodb';

export default async function Edit(props) {
  /* props 자체에는 현재 url의 정보가 담겨있음 */
  const client = await connectDB;
  const db = client.db('forum');
  const result = await db.collection('post').findOne({ _id: new ObjectId(props.params.editId) });
  // console.log('수정페이지', result);

  /* await db.collection('post').updateOne({ 수정정보 id 정도},{$set:{수정할 이름이나 내용들을 뭘로 할지 정리해준다}}); */

  return (
    <div className="p-20">
      <h4>수정</h4>
      <form action="/api/post/edit" method="POST">
        <label>
          제목 : <input type="text" name="title" defaultValue={result.title} />
        </label>
        <label>
          내용 : <input type="text" name="content" defaultValue={result.content} />
        </label>
        <label style={{ display: 'none' }}>
          ID : <input type="text" name="_id" defaultValue={result._id.toString()} />
        </label>
        <button type="submit">수정</button>
      </form>
    </div>
  );
}
