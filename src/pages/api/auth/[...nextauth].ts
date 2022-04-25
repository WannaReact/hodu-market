import NextAuth, { Session } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { JWT } from 'next-auth/jwt';
import axios from 'axios';

export interface CustomSession extends Session {
  user: {
    name?: string | null | undefined;
    id: string;
    nickname: string;
    isAdmin: boolean;
  };
}

interface CustomJWT extends JWT {
  user: {
    id: string;
    nickname: string;
    isAdmin: boolean;
  };
}

export default NextAuth({
  providers: [
    CredentialsProvider({
      id: 'id-pw-credential',
      name: '아이디-비밀번호-인증',
      credentials: {
        userId: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(
        credentials: Record<'userId' | 'password', string> | undefined
      ) {
        const { userId, password } = credentials as {
          userId: string;
          password: string;
        };
        const {
          data: {
            data: { id, nickname, isAdmin }
          }
        } = await axios.post(`${process.env.NEXTAUTH_URL}/api/login`, {
          userId,
          password
        });
        if (id) {
          return { id, nickname, isAdmin };
        }
        throw new Error('로그인 실패');
      }
    })
  ],
  pages: {
    signIn: '/login'
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        return {
          ...token,
          user
        };
      }
      return token;
    },
    async session({ session, token }): Promise<Session | CustomSession> {
      if (token) {
        return { ...session, user: (token as CustomJWT).user };
      }
      return session;
    }
  }
});
