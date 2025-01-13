import React from "react";

type ButtonType = "delete" | "cancel" | "add" | "save" | "edit";

interface ButtonProps {
  type: ButtonType; // Button action type
  onClick: () => void; // Click handler
  disabled?: boolean; // Whether the button is disabled
  className?: string; // Additional CSS classes for customization
  children?: React.ReactNode; // Custom button text (optional)
}

const Button: React.FC<ButtonProps> = ({
  type,
  onClick,
  disabled = false,
  className = "",
  children,
}) => {
  const baseClass =
    "inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-lg focus:outline-none focus:ring disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200";

  const typeStyles: Record<ButtonType, string> = {
    delete:
      "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500 focus:ring-2",
    cancel:
      "bg-gray-200 text-gray-700 hover:bg-gray-300 focus:ring-gray-400 focus:ring-2",
    add: "bg-green-600 text-white hover:bg-green-700 focus:ring-green-500 focus:ring-2",
    save: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 focus:ring-2",
    edit: "bg-yellow-500 text-white hover:bg-yellow-600 focus:ring-yellow-400 focus:ring-2",
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseClass} ${typeStyles[type]} ${className}`}
    >
      {children || type.charAt(0).toUpperCase() + type.slice(1)}
    </button>
  );
};

export default Button;
