import React from 'react';
import { useRouter } from 'next/router';
import InputField from '../InputField';
import Logo from '../Logo';
import PasswordInput from '../PasswordInput';
import Button from '../Button';
import GoogleSignInButton from '../GoogleSignInButton';
import ArrowIcon from './ArrowIcon';
import LoginImage from '@/assets/images/login_image.png';

const SignupPage: React.FC = () => {
  const router = useRouter();

  const handleSigninClick = () => {
    router.push('/');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <main className="flex w-full min-h-screen bg-white max-md:flex-col">
      <section className="relative flex-1 max-w-[1000px] max-md:hidden">
        <img
          src={LoginImage.src}
          className="object-cover size-full"
          alt="Decorative background with various icons"
        />
      </section>

      <section className="flex flex-1 justify-center items-center p-10 max-md:p-5">
        <div className="w-[648px] max-md:w-full">
          <header className="flex gap-2 items-center mb-10 w-full">
            <Logo />
          </header>

          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            <div className="flex gap-5 max-sm:flex-col max-sm:gap-5">
              <InputField
                type="text"
                placeholder="First name..."
                label="Full Name"
                className="flex-1"
              />
              <InputField
                type="text"
                placeholder="Last name"
                label="Last Name"
                className="flex-1"
              />
            </div>

            <InputField type="text" placeholder="Username..." label="Username" />

            <InputField type="email" placeholder="Email address" label="Email" />

            <div className="flex gap-5 max-sm:flex-col max-sm:gap-5">
              <PasswordInput label="Password" placeholder="Create password" />
              <PasswordInput label="Confirm Password" placeholder="Confirm password" />
            </div>
            <Button
              variant="primary"
              className="flex items-center px-6 py-0 h-12 text-base font-bold leading-10 text-white bg-teal-500 cursor-pointer border-[none] max-sm:w-full justify-center"
              onClick={handleSigninClick}
            >
              Create account
              <ArrowIcon className="ml-3" />
            </Button>

            <GoogleSignInButton className="mb-10" />
          </form>
        </div>
      </section>
    </main>
  );
};

export default SignupPage;
