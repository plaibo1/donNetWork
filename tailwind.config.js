

module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
      ],
    theme: {
        extend: {
            colors: {
                'baseColor': '#2b3cff',
                'baseColor-10': '#4050ff',
                'baseColor-20': '#5563ff',
                'baseColor-30': '#6b77ff',
                'baseColor-40': '#808aff',
                'baseColor-50': '#959eff',
                'myPurple': '#6c00ff',
                'myYellow': '#ffc833',
                'myGreen': '#69e5ab',
                'myGreen-10': '#78e8b3',
                'myGreen-20': '#87eabc',
                'myGreen-30': '#96edc4',
                'myGreen-40': '#a5efcd',
                'kiwi': '#e7f0c0',
            },
            zIndex: {
                'mid': '999',
                'max': '9999',
            }
        }
    },
    plugins: [
        require('@tailwindcss/typography')
    ],
}