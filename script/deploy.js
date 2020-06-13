var ghpages = require('gh-pages')
ghpages.publish('build', {
  branch: 'master',
  repo: 'https://github.com/Odelia0808/Odelia0808.github.io.git'
},()=>{
  console.log('🎉🎉🎉Update successfully!🎉🎉🎉')
});