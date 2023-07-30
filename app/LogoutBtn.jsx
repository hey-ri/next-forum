'use client';

export default function LogoutBtn() {
  return (
    <button
      onClick={() => {
        signOut();
      }}
    >
      로그아웃버튼
    </button>
  );
}
