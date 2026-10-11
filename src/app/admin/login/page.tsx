import type { Metadata } from 'next';
import LoginForm from './LoginForm';

export const metadata: Metadata = { title: 'Admin sign in', robots: { index: false } };

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-steel-100 p-4">
      <div className="w-full max-w-sm rounded border border-steel-200 bg-white p-6 shadow-sm">
        <h1 className="font-display text-3xl font-bold">Admin sign in</h1>
        <p className="mb-5 mt-1 text-sm text-steel-500">SS Metals website</p>
        <LoginForm />
      </div>
    </div>
  );
}
