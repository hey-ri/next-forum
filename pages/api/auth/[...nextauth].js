import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: '5a1a19d7c1a872204164',
      clientSecret: '06688838e2d105fc0b668b5247e14a82722659af',
    }),
  ],
  secret: 'qwer1234!@#$',
};
export default NextAuth(authOptions);
