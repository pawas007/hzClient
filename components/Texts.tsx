import React from "react";
import {Text, TextProps} from "react-native";
import {useThemeColor} from "@/hooks/useThemeColor";
import {useTheme} from "@/hooks/useTheme";


interface TextsProps extends TextProps {
    className?: string;
}

const Texts: React.FC<TextsProps> = ({className, style, ...props}) => {
    const {colorScheme} = useTheme();
    const textColor = colorScheme === 'light' ? 'text-red' : 'text-white'
    return (
        <Text
            {...props}
            className={textColor + " font-normal " + className}
            style={[{fontFamily: "Roboto"}, style]}
        />
    );
};

export default Texts;
