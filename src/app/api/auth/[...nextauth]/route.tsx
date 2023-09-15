import NextAuth from 'next-auth';
import { signInWithEmailAndPassword } from 'firebase/auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { auth } from '@/lib/firebase';

type Credential = {
  email: string;
  password: string;
};

async function authorizeCredentials(credentials: Credential): Promise<any | null> {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      credentials.email || '',
      credentials.password || ''
    );
    
    if (userCredential.user) {
      return userCredential.user;
    }

    return null;
  } catch (error) {
    console.error(error);
    return null;
  }
}

const authOptions = {
  pages: {
    signIn: '/signin',
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {},
      async authorize(credentials): Promise<any> {
        return await authorizeCredentials(credentials);
      },
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST, authOptions };
