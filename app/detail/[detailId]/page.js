import { connectDB } from '@/util/database';
import { ObjectId } from 'mongodb';

/* 다이나믹 라우트 []로 이름을 감싸준다 /detail/1 /detail/2 detail/3 등등의 detail/ 다음에 아무거나 올 수 있게, 그 루트로 url로 페이지 접근이 가능하다 */
async function Detail(props) {
  const client = await connectDB;
  const db = client.db('forum');
  const result = await db.collection('post').findOne({ _id: new ObjectId(props.params.detailId) });
  // console.log('상세페이지 id', props.params.detailId);
  console.log(result);
  return (
    <div>
      <h4>상세페이지</h4>
      <h5>{result.name}</h5>
      <p>{result.title}</p>
    </div>
  );
}

export default Detail;
