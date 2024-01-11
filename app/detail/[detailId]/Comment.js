'use client';

import { useEffect, useState } from 'react';

export default function Comment(props) {
  const [comments, setComments] = useState('');
  const [commentList, setCommentList] = useState([]);

  useEffect(() => {
    fetch('/api/comment/list?id=' + props.parentId)
      .then((r) => r.json())
      .then((result) => {
        console.log(result);
        setCommentList(result);
      });
  }, []);

  return (
    <div>
      <div>{commentList.length > 0 ? commentList.map((d, i) => <p key={i}>{d.comment}</p>) : '댓글을 작성 해보세요'}</div>
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
