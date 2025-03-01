import React from "react";

interface ButtonProps {
  onResetPassword: () => void;
  onSaveChanges: () => void;
  isSaving?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  onResetPassword,
  onSaveChanges,
  isSaving = false,
}) => {
  return (
    <div className="flex gap-5 justify-end mt-10 max-sm:flex-col">
      <button
        onClick={onResetPassword}
        className="px-6 py-0 h-12 font-semibold text-orange-300 bg-cyan-100 rounded cursor-pointer border-none max-sm:w-full"
        type="button"
      >
        Reset Password
      </button>
      <button
        onClick={onSaveChanges}
        className="px-6 py-0 h-12 font-semibold text-white bg-teal-500 rounded cursor-pointer border-none max-sm:w-full"
        type="button"
        disabled={isSaving}
      >
        {isSaving ? "Saving..." : "Save changes"}
      </button>
    </div>
  );
};

export default Button;
