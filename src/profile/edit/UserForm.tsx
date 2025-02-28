import React, { useState, useEffect } from "react";
import { FormData } from "../types";
import InputField from "@/components/InputField/InputField";

interface UserFormProps {
  initialData: FormData;
  onChange: (data: FormData) => void;
}

const UserForm: React.FC<UserFormProps> = ({ initialData, onChange }) => {
  const [formData, setFormData] = useState<FormData>(initialData);
  const [titleCharCount, setTitleCharCount] = useState(0);

  useEffect(() => {
    setTitleCharCount(formData.title.length);
  }, [formData.title]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: keyof FormData,
  ) => {
    const value = e.target.value;

    // For title field, limit to 50 characters
    if (field === "title" && value.length > 50) {
      return;
    }

    const updatedData = { ...formData, [field]: value };
    setFormData(updatedData);
    onChange(updatedData);
  };

  return (
    <div className="flex-1 max-sm:w-full">
      <div className="flex gap-5 mb-3 max-sm:flex-col max-sm:gap-5">
        <InputField
          label="First name"
          type="text"
          placeholder="First name"
          value={formData.firstName}
          onChange={(e) => handleChange(e, "firstName")}
          className="flex-1"
        />
        <InputField
          label="Last name"
          type="text"
          placeholder="Last name"
          value={formData.lastName}
          onChange={(e) => handleChange(e, "lastName")}
          className="flex-1"
        />
      </div>

      <InputField
        label="Username"
        type="text"
        placeholder="Username"
        value={formData.username}
        onChange={(e) => handleChange(e, "username")}
        className="mb-3"
      />

      <InputField
        label="Email"
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => handleChange(e, "email")}
        className="mb-3"
      />

      <InputField
        label="Title"
        type="text"
        placeholder="Title"
        value={formData.title}
        onChange={(e) => handleChange(e, "title")}
        className="mb-3"
      />
    </div>
  );
};

export default UserForm;
