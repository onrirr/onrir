module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: ["night", "dracula", "cyberpunk", "light"],
  },
  theme: {},
  plugins: [
    require("daisyui")
  ]
}