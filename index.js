const Stress = require('ddos-stress');
const stress = new Stress();

let fs = require('fs');

let url = '';
let fetchesPerSecond = NaN;
try {
    url = fs.readFileSync('url.txt');
    fetchesPerSecond = parseInt(fs.readFileSync('fetchesPerSecond.txt'));
} catch (e) {
    url = null;
} 
if (url == null || url == '' || !fetchesPerSecond) {
    console.log('url.txt or fetchesPerSecond.txt is empty or not exist.\nClose application...');
    setInterval(() => process.exit(1), 3000);
} else {
    console.log('URL: ' + url);
    console.log('Fetches per second: ' + fetchesPerSecond);
    stress.run(`${url}`, fetchesPerSecond);
}




