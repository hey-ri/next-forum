'use client';

import { useRouter } from 'next/navigation';

function DetailLink() {
  const router = useRouter();
  return (
    <div>
      <button
        onClick={() => {
          router.push('/detail/anythig');
        }}
      >
        버튼
      </button>
    </div>
  );
}

export default DetailLink;
