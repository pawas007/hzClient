import React from 'react';
import { Text, TextProps } from 'react-native';

// Кастомний компонент для тексту з шрифтом Roboto
const Texts = ({ style, ...props }: TextProps) => {
    return <Text {...props} style={[{ fontFamily: 'Roboto' }, style]} />;
};

export default Texts;