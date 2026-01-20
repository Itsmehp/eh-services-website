const fs = require('fs');
const path = require('path');

function merge(base, target) {
  for (const key of Object.keys(base)) {
    if (typeof base[key] === 'object' && base[key] !== null && !Array.isArray(base[key])) {
      if (!target[key] || typeof target[key] !== 'object' || Array.isArray(target[key])) target[key] = {};
      merge(base[key], target[key]);
    } else {
      if (target[key] === undefined) {
        target[key] = base[key];
      }
    }
  }
}

const enPath = path.join(__dirname, '..', 'messages', 'en.json');
const dePath = path.join(__dirname, '..', 'messages', 'de.json');

const en = JSON.parse(fs.readFileSync(enPath, 'utf8'));
const de = JSON.parse(fs.readFileSync(dePath, 'utf8'));

merge(en, de);

fs.writeFileSync(dePath, JSON.stringify(de, null, 2) + '\n');
console.log('Merged missing keys from en.json into de.json (placeholders added).');
