'use client';

import { useEffect, useState } from 'react';

export default function Comment(props) {
  const [comments, setComments] = useState('');
  const [commentList, setCommentList] = useState([]);

  const fetchComments = async () => {
    try {
      const response = await fetch('/api/comment/list?id=' + props.parentId);
      const result = await response.json();
      setCommentList(result);
    } catch (error) {
      console.error('댓글 목록 불러오기 오류:', error);
    }
  };

  useEffect(() => {
    fetchComments();
  }, [props.parentId]);

  const handleCommentSubmit = async () => {
    try {
      const response = await fetch('/api/comment/new', {
        method: 'POST',
        body: JSON.stringify({ comment: comments, _id: props.parentId }),
      });

      if (response.ok) {
        await fetchComments();
        setComments('');
      } else {
        console.error('댓글 추가 실패:', response.statusText);
      }
    } catch (error) {
      console.error('댓글 추가 요청 오류:', error);
    }
  };

  return (
    <div>
      <div>{commentList.length > 0 ? commentList.map((d, i) => <p key={i}>{d.content}</p>) : '댓글을 작성 해보세요'}</div>
      <input value={comments} onChange={(e) => setComments(e.target.value)} />
      <button onClick={handleCommentSubmit}>전송</button>
    </div>
  );
}
