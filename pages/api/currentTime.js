/* 특정 url 입력시 지금 현재 시간 보내주기 */
export default function currentTime(req, res) {
  const time = new Date();
  // console.log(time);
  res.status(200).json(time);
}
