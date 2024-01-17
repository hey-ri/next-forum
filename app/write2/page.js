import { connectDB } from '@/util/database';
import { revalidatePath } from 'next/cache';

//1. 페이지만들었음
export default async function Write2() {
  const db = (await connectDB).db('forum');
  let result = await db.collection('post_test').find().toArray();
  //3. 서버기능만듦 유저한텐 안보임
  async function handleSubmit(formData) {
    'use server';
    const db = (await connectDB).db('forum');
    await db.collection('post_test').insertOne({ title: formData.get('title') });
    console.log(formData.get('title'));
    revalidatePath('/write2');
  }

  //2.폼만들었음
  return (
    <form action={handleSubmit}>
      <input type="text" name="title" />
      <button type="submit">Submit</button>
      {result ? result.map((a) => <p>글제목 : {a.title}</p>) : null}
    </form>
  );
}
