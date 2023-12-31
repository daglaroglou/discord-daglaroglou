module.exports = {
  content: [
    "./src/**/*.tsx"
  ],
  theme: {
    extend: {
      colors: {
        online: "#3ba55d",
        idle: "#faa81a",
        dnd: "#ed4245",
        offline: "#747f8d",
        //banner: '#77373a',
        link: 'hsl(197,calc(var(--saturation-factor, 1)*100%),47.8%)',
        normal: 'hsl(210,calc(var(--saturation-factor, 1)*2.9%),86.7%)',
        transparent: 'hsla(217,calc(var(--saturation-factor, 1)*7.6%),33.5%,0.48)',
        timestamp: 'hsla(0,calc(var(--saturation-factor, 1)*0%),100%,.8)'
      }
    }
  },
  plugins: []
};
