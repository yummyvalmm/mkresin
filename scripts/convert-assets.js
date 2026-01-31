import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const assetsDir = path.resolve(__dirname, '../src/assets');

async function convertImages() {
    console.log(`Scanning directory: ${assetsDir}`);

    try {
        const files = fs.readdirSync(assetsDir);

        for (const file of files) {
            const ext = path.extname(file).toLowerCase();
            if (ext === '.png' || ext === '.jpg' || ext === '.jpeg') {
                const inputPath = path.join(assetsDir, file);
                const outputPath = path.join(assetsDir, path.basename(file, ext) + '.webp');

                console.log(`Converting: ${file} -> ${path.basename(outputPath)}`);

                try {
                    await sharp(inputPath)
                        .toFormat('webp', { quality: 80 }) // 80% quality is usually a good balance
                        .toFile(outputPath);
                    console.log(`✅ Success: ${file}`);
                } catch (err) {
                    console.error(`❌ Error converting ${file}:`, err);
                }
            }
        }
        console.log('Conversion complete!');
    } catch (err) {
        console.error('Error reading directory:', err);
    }
}

convertImages();
