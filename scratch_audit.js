const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

console.log('--- PERFORMANCE AUDIT ---');
console.log('requestAnimationFrame calls:', (html.match(/requestAnimationFrame/g) || []).length);
console.log('setInterval calls:', (html.match(/setInterval/g) || []).length);
console.log('scroll listeners:', (html.match(/scroll/g) || []).length);
console.log('mousemove listeners:', (html.match(/mousemove/g) || []).length);
console.log('backdrop-filter instances:', (html.match(/backdrop-filter/g) || []).length);
console.log('CSS blur instances:', (html.match(/blur\(/g) || []).length);

// Find where mousemove is used
const lines = html.split('\n');
lines.forEach((line, idx) => {
  if (line.includes('mousemove') || line.includes('scroll') || line.includes('requestAnimationFrame') || line.includes('particleCanvas') || line.includes('ripple')) {
    console.log(`L${idx+1}: ${line.trim().slice(0, 100)}`);
  }
});
