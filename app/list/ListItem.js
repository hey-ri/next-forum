'use client';
import Link from 'next/link';

export default function ListItme({ data }) {
  return (
    <div>
      {data.map((data, i) => (
        <div key={i} className="list-item">
          <Link href={`/detail/${data._id}`}>
            <h4>{data.title}</h4>
          </Link>
          <Link href={`/edit/${data._id}`}>✏️</Link>
          <p>1월 1일</p>
        </div>
      ))}
    </div>
  );
}
