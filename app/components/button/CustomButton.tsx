import React from "react";
import { Text, Pressable, PressableProps } from "react-native";

interface CustomButtonProps extends PressableProps {
  title: string;
  variant?: "primary" | "secondary" | "success" | "danger";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
}

export default function CustomButton({
  title,
  variant = "primary",
  size = "md",
  fullWidth = false,
  className = "",
  disabled = false,
  ...rest
}: CustomButtonProps) {
  const baseStyle = "flex items-center justify-center rounded-full font-bold";
  const variantStyles = {
    primary: "bg-[#F1FE87] text-[#272A32] ",
    secondary: "bg-[#363339] text-white ",
    success: "bg-green-500 text-white ",
    danger: "bg-red-500 text-white ",
  };
  const sizeStyles = {
    sm: "px-2 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };
  const disabledStyle = "opacity-50";
  const fullWidthStyle = fullWidth ? "w-full" : "";

  const buttonStyle = `${baseStyle} ${variantStyles[variant]} ${sizeStyles[size]} ${fullWidthStyle} ${
    disabled ? disabledStyle : ""
  } ${className}`;

  return (
    <Pressable
      className={buttonStyle}
      disabled={disabled}
      style={({ pressed }) => [
        {
          opacity: pressed ? 0.7 : 1,
        },
      ]}
      {...rest}
    >
      <Text className={`font-bold text-base ${variant === "primary" ? "text-[#272A32]" : "text-gray-100"}`}>{title}</Text>
    </Pressable>
  );
}
