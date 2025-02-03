import React from "react";
import { Text, TextProps } from "react-native";

const Texts = ({ style, ...props }: TextProps) => {
  return <Text {...props} style={[{ fontFamily: "Roboto" }, style]} />;
};

export default Texts;

// TODO заюзати один шрифт для цілої апки
