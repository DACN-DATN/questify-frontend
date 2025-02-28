import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Logo from '../Logo';
import Button from '../Button';
import InputField from '@/components/InputField/InputField';
import PasswordInput from '../PasswordInput';
import LoginImage from '@/assets/images/login_image.png';

function LoginPage() {
  const router = useRouter();

  const handleResetPasswordClick = () => {
    router.push('/auth/login');
  };

  const [email, setEmail] = useState('');

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

            <PasswordInput label="Password" placeholder="Create password" />
            <PasswordInput label="Confirm Password" placeholder="Confirm password" />

            <Button variant="primary" className="mb-6" onClick={handleResetPasswordClick}>
              Change Password
            </Button>
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
