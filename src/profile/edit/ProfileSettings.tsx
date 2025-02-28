import React, { useState } from "react";
import ProfileHeader from "../ProfileHeader";
import NavigationTabs from "../NavigationTabs";
import PhotoUpload from "./PhotoUpload";
import UserForm from "./UserForm";
import ActionButtons from "./Button";
import { FormData, TabItem } from "../types";
import { useRouter } from 'next/router';

const ProfileSettings: React.FC = () => {
  const router = useRouter();
  // Mock user data - in a real app, this would come from an API or props
  const [photoUrl, setPhotoUrl] = useState(
    "https://cdn.builder.io/api/v1/image/assets/TEMP/85c6d02516c6caf25bc2224efd719f6891b0eda7",
  );
  const [isSaving, setIsSaving] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    username: "Username",
    email: "",
    title: "Student",
  });

  const tabs: TabItem[] = [
    { label: "Courses", isActive: false },
    { label: "Rewards", isActive: false },
    { label: "Setting", isActive: true },
  ];

  const handlePhotoChange = (file: File) => {
    // In a real app, you would upload the file to a server
    // For now, we'll just create a local URL
    const url = URL.createObjectURL(file);
    setPhotoUrl(url);
  };

  const handleFormChange = (newData: FormData) => {
    setFormData(newData);
  };

  const handleResetPassword = () => {
    router.push('/auth/reset-password');
  };

  const handleSaveChanges = () => {
    setIsSaving(true);

    // Simulate API call
    setTimeout(() => {
      // In a real app, you would save the data to a server
      router.push('/');
    }, 1000);
  };

  const handleTabChange = (index: number) => {
    // In a real app, this would change the active tab
    console.log(`Tab ${index} clicked`);
  };

  return (
    <main className="relative min-h-screen font-['Inter'] mt-20">
      <div className="w-full bg-cyan-100 h-[280px]" />
      <section className="relative p-9 mx-auto my-0 bg-white rounded top-[-238px] w-[1320px] max-md:p-5 max-md:w-[90%]">
        <ProfileHeader
          photoUrl={photoUrl}
          username={formData.username}
          title={formData.title}
          courseCount={7}
        />

        <NavigationTabs tabs={tabs} onTabChange={handleTabChange} />

        <div className="flex gap-20 max-md:flex-col max-md:items-center">
          <PhotoUpload photoUrl={photoUrl} onPhotoChange={handlePhotoChange} />

          <UserForm initialData={formData} onChange={handleFormChange} />
        </div>

        <ActionButtons
          onResetPassword={handleResetPassword}
          onSaveChanges={handleSaveChanges}
          isSaving={isSaving}
        />
      </section>
    </main>
  );
};

export default ProfileSettings;
