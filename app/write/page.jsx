'use client';

import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { getServerSession } from 'next-auth';

export default async function Write() {
  const [src, setSrc] = useState('');

  const session = await getServerSession(authOptions);
  if (session) {
    return (
      <div className="p-20">
        <h4>글작성</h4>
        <form action="/api/post/new" method="POST">
          <input type="text" name="name" placeholder="제목을 입력하세요" />
          <input type="text" name="title" placeholder="내용을 입력하세요" />
          <input
            type="file"
            accept="image/*"
            onChange={async (e) => {
              const file = e.target.files[0];
              const fileName = encodeURIComponent(file.name);
              let res = await fetch(`/api/post/image/file=${fileName}`);
              res = await res.json();
              console.log(res);

              //S3 업로드
              const formData = new FormData();
              Object.entries({ ...res.fields, file }).forEach(([key, value]) => {
                formData.append(key, value);
              });
              let formRes = await fetch(res.url, {
                method: 'POST',
                body: formData,
              });
              console.log(formRes);

              if (formRes.ok) {
                setSrc(formRes.url + '/' + filename);
              } else {
                console.log('실패');
              }
            }}
          />
          <img src={src} alt="" />
          <button type="submit">보내기</button>
        </form>
      </div>
    );
  } else {
    return <div>로그인 후 이용해 주세요</div>;
  }
}
