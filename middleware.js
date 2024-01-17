import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server';

export async function middleware(req) {
  /* 유저가 get 이나 post를 보내면 middleware를 먼저 거치고 서버 코드가 실행된다. */

  // console.log('미들웨어 콘솔입니다.', req.nextUrl);
  // console.log('미들웨어 콘솔입니다.', req.cookies);
  // console.log('미들웨어 콘솔입니다.', req.headers.get('user-agent'));

  // console.log('req.nextUrl.pathname', req.nextUrl.pathname);

  const session = await getToken({ req: req });
  console.log(session);

  if (req.nextUrl.pathname.startsWith('/write') && !session) {
    //NextResponse.redirect(new URL('http://localhost:3000/register', req.url)); //<======에러 발생
  }

  /* 
  유저가 /register 페이지 방문시 visit = true 라는 쿠키 생성하는 코드
  if (request.nextUrl.pathname.startsWith('/register')) {
    if (request.cookies.has('visited') == false) {
      const response = NextResponse.next();
      response.cookies.set({
        name: 'visited',
        value: 'true',
        maxAge: 3600,
      });
      return response;
    }
    return NextResponse.next();
  } */

  if (req.nextUrl.pathname.startsWith('/list')) {
    console.log(req.headers.get('sec-ch-ua-platform'));
    return NextResponse.next(); // 통과
  }

  // NextResponse.next(); // 통과
  // NextResponse.redirect(); //다른페이지로 이동인데 주소창으로 이동
  // NextResponse.rewrite(); //다른페이지로 이동인데 현재 url 유지
}
