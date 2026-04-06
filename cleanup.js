const fs = require('fs');
const path = require('path');

const rootDir = __dirname;
const targetToKeep = 'React-Portfolio';

fs.readdirSync(rootDir).forEach(item => {
  if (item === targetToKeep || item === 'cleanup.js') return;

  const fullPath = path.join(rootDir, item);
  try {
    const stats = fs.statSync(fullPath);
    if (stats.isDirectory()) {
      fs.rmSync(fullPath, { recursive: true, force: true });
      console.log(`Removed directory: ${item}`);
    } else {
      fs.unlinkSync(fullPath);
      console.log(`Removed file: ${item}`);
    }
  } catch (err) {
    console.error(`Error removing ${item}:`, err.message);
  }
});
