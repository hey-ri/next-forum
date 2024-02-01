'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { RxDotsHorizontal } from 'react-icons/rx';

export default function ListItme({ result }) {
  // useEffect(() => {
  //   /* props로 데이터 받아오지 않고 서버에서 부탁해서 DB 게시물 가져오기(get 요청),
  //   const result = DB게시물
  //   페이지에 서버에서 가져온 뒤 화면에 보여주기 때문에 조금 느림 + 검색 엔진 노출에 어려움이 있을 수 있음
  //   검색엔진에 잘 노출 되기 위해서는 부모 컴포넌트는 서버컴포넌트로, 자식 컴포넌트엔 props로 전달하는 것이 좋음
  //   */
  // }, []);

  const [showCategory, setShowCategory] = useState(false);
  const [clickId, setClickId] = useState('');

  // const showListCategory = () => {};

  return (
    <div>
      {result.map((data, i) => (
        <div key={i} className="list-item">
          <div className="data">
            <Link className="list-txt" href={`/detail/${result[i]._id}`}>
              <h4>{result[i].title}</h4>
              <p>{result[i].name}</p>
            </Link>
            <p>1월 1일</p>
          </div>
          <button
            onClick={() => {
              setShowCategory((prev) => !prev);
              setClickId(result[i]._id);
            }}
          >
            <RxDotsHorizontal />
          </button>
          {showCategory && clickId == data._id ? (
            <div className="category">
              <Link href={`/edit/${result[i]._id}`}>수정</Link>
              <button
                onClick={(e) => {
                  fetch('/api/post/delete', { method: 'POST', body: result[i]._id })
                    .then((r) => r.json())
                    .then((r) => {
                      console.log('삭제완료후', r);
                      e.target.parentElement.style.opacity = 0;
                      setTimeout(() => {
                        e.target.parentElement.style.display = 'none';
                      }, 1000);
                    })
                    .catch((err) => console.log(err));
                  // fetch('/api/abc/tesst');
                }}
              >
                삭제
              </button>
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
}
