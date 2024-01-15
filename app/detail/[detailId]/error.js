'use client';

/* 에러 페이지는 무조건 use client 페이지가 나와야 되고 props에는 두가지 인자가 전달되는데 error와 reset이 나타난다. 

error: error정보 알려줌
reset: reset은 홈페이지를 리프레쉬시켜줌
*/

function Error({ error, reset }) {
  return <div>에러</div>;
}

export default Error;
