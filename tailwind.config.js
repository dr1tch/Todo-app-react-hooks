module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: "class", // or 'media' or 'class'
    theme: {
        screens: {
            sm: "460px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
        },
        extend: {
            colors: {
                "gray-darkest": "#17181f",
                "gray-dark": "#20212C",
                "gray-default": "#18191A",
                "gray-light": "#232626",
            },
        },
        fontFamily: {
            roboto: "Roboto, sans-serif",
            opensans: "Open Sans, sans-serif",
            poppins: "Poppins, sans-serif",
            lato: "lato, sans-serif",
        },
    },
    variants: {
        extend: {
            opacity: ["disabled"],
        },
    },
    plugins: [
        require("@tailwindcss/forms"),
        function({ addComponents }) {
            addComponents({
                ".container": {
                    maxWidth: "100%",
                    "@screen sm": {
                        maxWidth: "462px",
                    },
                    "@screen md": {
                        maxWidth: "750px",
                    },
                    "@screen lg": {
                        maxWidth: "970px",
                    },
                    "@screen xl": {
                        maxWidth: "1170px",
                    },
                },
            });
        },
    ],
};