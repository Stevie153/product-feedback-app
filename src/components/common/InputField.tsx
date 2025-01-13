import React from "react";

interface DropdownProps<T> {
  options: { label: string; value: T }[]; // Dropdown options
  value: T | undefined; // Selected value
  onChange: (value: T) => void; // Callback when the value changes
  placeholder?: string; // Placeholder text
  disabled?: boolean; // Disable the dropdown
  className?: string; // Additional CSS classes for customization
}

const Dropdown = <T,>({
  options,
  value,
  onChange,
  placeholder = "Select an option",
  disabled = false,
  className = "",
}: DropdownProps<T>) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = options.find(
      (option) => String(option.value) === event.target.value
    )?.value;

    if (selectedValue !== undefined) {
      onChange(selectedValue);
    }
  };

  return (
    <select
      value={value !== undefined ? String(value) : ""}
      onChange={handleChange}
      disabled={disabled}
      className={`block w-full px-4 py-2 text-base text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-500 focus:border-blue-500 ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      } ${className}`}
    >
      {placeholder && (
        <option value="" disabled>
          {placeholder}
        </option>
      )}
      {options.map((option) => (
        <option key={String(option.value)} value={String(option.value)}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
