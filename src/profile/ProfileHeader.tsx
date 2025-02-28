import React from "react";

interface ProfileHeaderProps {
  photoUrl: string;
  username: string;
  title: string;
  courseCount: number;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({
  photoUrl,
  username,
  title,
  courseCount,
}) => {
  return (
    <section className="mb-16">
      <div className="flex gap-12 items-start max-md:flex-col max-md:gap-8 max-md:items-center">
        <img
          src={photoUrl}
          className="object-cover rounded-full h-[200px] w-[200px]"
          alt="Profile"
        />
        <div className="pt-5 max-md:text-center">
          <h1 className="mb-5 text-3xl font-semibold text-neutral-800">
            {username}
          </h1>
          <p className="mb-5 text-base text-gray-500">{title}</p>
          <div className="flex gap-1.5 items-center">
            <div>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="course-icon"
              >
                <path
                  d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                  fill="#00ADB5"
                  stroke="#00ADB5"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                ></path>
                <path
                  d="M15 12L10.5 9V15L15 12Z"
                  fill="white"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
            <span className="text-sm text-gray-500">{courseCount} courses</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileHeader;
