import React from "react";
import { Text, TextProps } from "react-native";

interface TextsProps extends TextProps {
  className?: string;
}

const Texts: React.FC<TextsProps> = ({ className, style, ...props }) => {
  return (
    <Text
      {...props}
      className={"text-primary-700 dark:text-white font-normal " + className}
      style={[{ fontFamily: "Roboto" }, style]}
    />
  );
};

export default Texts;
