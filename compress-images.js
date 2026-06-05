import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const eventsDir = path.join(process.cwd(), 'events');

async function compressImages(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      await compressImages(filePath);
    } else if (file.match(/\.(jpg|jpeg)$/i)) {
      console.log(`Compressing: ${filePath}`);
      
      const outputPath = filePath;
      
      try {
        await sharp(filePath)
          .jpeg({ quality: 70, progressive: true })
          .toFile(outputPath + '.tmp');
        
        fs.renameSync(outputPath + '.tmp', outputPath);
        console.log(`Compressed: ${filePath}`);
      } catch (err) {
        console.error(`Error compressing ${filePath}:`, err);
        if (fs.existsSync(outputPath + '.tmp')) {
          fs.unlinkSync(outputPath + '.tmp');
        }
      }
    }
  }
}

compressImages(eventsDir);
console.log('Image compression started...');
