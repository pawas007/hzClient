import {fonts} from "@/assets/fonts/fonts";

export const Themes = {

    light: {
        dark: false,
        colors: {
            primary: 'rgb(76, 120, 253)',
            background: 'rgb(245, 245, 245)',
            card: 'rgb(255, 255, 255)',
            text: 'rgb(33, 33, 33)',
            border: 'rgb(220, 220, 220)',
            notification: 'rgb(255, 99, 71)',
        },
        fonts
    },

    dark: {
        dark: true,
        colors: {
            primary: 'rgb(10, 132, 255)',
            background: 'rgba(25, 25, 53, 1)',
            card: 'rgba(25, 25, 53, 1)',
            text: 'rgb(240, 240, 245)',
            border: 'rgb(50, 50, 60)',
            notification: 'rgb(255, 87, 34)',
        },
        fonts
    },

};

