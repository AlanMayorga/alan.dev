// prettier.config.js
const config = {
    plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
    overrides: [
        {
            files: "*.astro",
            options: {
                parser: "astro",
            }
        }
    ]
};
 module.exports = config;