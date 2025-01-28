import {Platform} from 'react-native';

import type {Theme} from "@react-navigation/native";

const WEB_FONT_STACK =
    'Roboto';

export const fonts = Platform.select({
    web: {
        regular: {
            fontFamily: WEB_FONT_STACK,
            fontWeight: '400',
        },
        medium: {
            fontFamily: WEB_FONT_STACK,
            fontWeight: '500',
        },
        bold: {
            fontFamily: WEB_FONT_STACK,
            fontWeight: '600',
        },
        heavy: {
            fontFamily: WEB_FONT_STACK,
            fontWeight: '700',
        },
    },
    ios: {
        regular: {
            fontFamily: WEB_FONT_STACK,
            fontWeight: '400',
        },
        medium: {
            fontFamily: WEB_FONT_STACK,
            fontWeight: '500',
        },
        bold: {
            fontFamily: WEB_FONT_STACK,
            fontWeight: '600',
        },
        heavy: {
            fontFamily: WEB_FONT_STACK,
            fontWeight: '700',
        },
    },
    default: {
        regular: {
            fontFamily: WEB_FONT_STACK,
            fontWeight: 'normal',
        },
        medium: {
            fontFamily: WEB_FONT_STACK,
            fontWeight: 'normal',
        },
        bold: {
            fontFamily: WEB_FONT_STACK,
            fontWeight: '600',
        },
        heavy: {
            fontFamily: WEB_FONT_STACK,
            fontWeight: '700',
        },
    },
} as const satisfies Record<string, Theme['fonts']>);
