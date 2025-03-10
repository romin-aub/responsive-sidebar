import 'next-auth';
import type { DefaultSession } from 'next-auth';

declare module 'next-auth' {
  interface User {
    id?: string;
    username?: string;
    role?: number;
  }

  interface Session {
    user: {
      id?: string;
      username?: string;
      role?: number;
    } & DefaultSession['user'];
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    id?: string;
    username?: string;
    role?: number;
  }
}
