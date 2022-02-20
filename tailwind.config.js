module.exports = {
  // purge: ['./index.html','./src/**/*.{vue,js,ts}'],
  content: [
    './index.html',
    './src/**/*.{vue,js,ts}'
  ],
  mode: 'jit',
  // content: [],
  theme: {
    // colors: {
    //   'green': '#45cfad',
    //   'blue': '#273776',
    // },
    fontFamily: {
      mainfont: ['Roboto', 'sans-serif'],
    },
    extend: {
    },
  },
  plugins: [],
  corePlugins:{
    // preflight: false
  },
}
