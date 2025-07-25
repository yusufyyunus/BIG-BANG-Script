import * as fs from 'fs';

const result: string[] = [];

for (let i = 1; i <= 100; i++) {
  if (i % 15 === 0) {
    result.push("BIGBANG");
  } else if (i % 3 === 0) {
    result.push("BIG");
  } else if (i % 5 === 0) {
    result.push("BANG");
  } else {
    result.push(i.toString());
  }
}

fs.writeFileSync('output.json', JSON.stringify(result, null, 2), 'utf8');

console.log('✅ output.json has been created!');
