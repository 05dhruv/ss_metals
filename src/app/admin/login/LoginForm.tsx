'use client';
import { useFormState, useFormStatus } from 'react-dom';
import { loginAction } from '../actions';

function Submit() {
  const { pending } = useFormStatus();
  return <button className="btn btn-primary w-full" disabled={pending}>{pending ? 'Signing in...' : 'Sign in'}</button>;
}

export default function LoginForm() {
  const [state, action] = useFormState(loginAction, undefined);
  return (
    <form action={action} className="space-y-4">
      <div><label className="label" htmlFor="username">Username</label><input id="username" name="username" className="field" autoComplete="username" required /></div>
      <div><label className="label" htmlFor="password">Password</label><input id="password" name="password" type="password" className="field" autoComplete="current-password" required /></div>
      {state?.error && <p className="text-sm font-medium text-red-700" role="alert">{state.error}</p>}
      <Submit />
    </form>
  );
}
