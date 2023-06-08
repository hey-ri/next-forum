export default function Write() {
  return (
    <div>
      <h4>글작성</h4>
      <form action="/api/testServer" method="POST">
        <button type="submit">보내기</button>
      </form>
    </div>
  );
}
