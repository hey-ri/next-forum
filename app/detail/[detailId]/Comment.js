'use client';

import {  useState } from 'react';

export default function Comment(props) {
  const [comments, setComments] = useState('');

  return (
    <div>
      <div>댓글 목록 보여줄 부분</div>
      <input onChange={(e) => setComments(e.target.value)} />
      <button
        onClick={() => {
          console.log(comments);
          fetch('/api/comment/new', { method: 'POST', body: JSON.stringify({ comment: comments, _id: props.parentId }) });
        }}
      >
        전송
      </button>
    </div>
  );
}
