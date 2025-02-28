import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Logo from '../Logo';
import Button from '../Button';
import InputField from '@/components/InputField/InputField';
import GoogleSignInButton from '../GoogleSignInButton';
import LoginImage from '@/assets/images/login_image.png';

function LoginPage() {
  const router = useRouter();

  const handleSigninClick = () => {
    router.push('/');
  };

  const handleForgotPasswordClick = () => {
    router.push('/auth/reset-password');
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <main className="flex w-full min-h-screen bg-white max-md:flex-col">
      <section className="flex flex-col items-center justify-center p-10 w-[920px] max-md:items-center max-md:p-5 max-md:w-full max-sm:p-4 h-screen">
        <div className="flex flex-col items-center w-[400px] max-md:w-full max-md:max-w-[400px]">
          <header className="flex gap-2 items-center mb-10 w-full">
            <Logo />
          </header>

          <form className="w-full">
            <InputField
              label="Email"
              type="email"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              className="mb-9 max-sm:mb-6"
            />

            <InputField
              label="Password"
              type="password"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
              className="mb-9 max-sm:mb-6"
            />

            <div className="flex justify-between items-center mb-12 w-full max-sm:flex-col max-sm:gap-2.5 max-sm:items-start">
              <div className="flex gap-2.5 items-center text-xs text-neutral-900">
                <input
                  type="checkbox"
                  id="remember"
                  className="rounded border border-solid border-black border-opacity-30 h-[17px] w-[19px]"
                />
                <label htmlFor="remember">Remember me</label>
              </div>
              <button
                type="button"
                className="text-xs cursor-pointer text-neutral-900"
                onClick={handleForgotPasswordClick}
              >
                Forgot password
              </button>
            </div>

            <Button variant="primary" className="mb-6" onClick={handleSigninClick}>
              Sign in
            </Button>

            <GoogleSignInButton className="mb-10" />

            <p className="text-xs text-center text-zinc-600">
              Don't have an account?{' '}
              <a href="/auth/signup" className="text-teal-500 no-underline">
                Sign up fo free!
              </a>
            </p>
          </form>
        </div>
      </section>

      <aside className="flex-1 h-screen max-md:hidden">
        <img src={LoginImage.src} alt="Illustration" className="object-cover size-full" />
      </aside>
    </main>
  );
}

export default LoginPage;
