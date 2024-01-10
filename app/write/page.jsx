import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { getServerSession } from 'next-auth';

export default async function Write() {
  const session = await getServerSession(authOptions);
  if (session) {
    return (
      <div className="p-20">
        <h4>글작성</h4>
        <form action="/api/post/new" method="POST">
          <input type="text" name="name" placeholder="제목을 입력하세요" />
          <input type="text" name="title" placeholder="내용을 입력하세요" />
          <button type="submit">보내기</button>
        </form>
      </div>
    );
  } else {
    return <div>로그인 후 이용해 주세요</div>;
  }
}
