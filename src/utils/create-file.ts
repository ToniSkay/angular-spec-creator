import * as fs from 'fs';

export function createFile(url, value) {
  return new Promise<void>(async (resolve, reject) => {
    try {
      const file = fs.createWriteStream(url);
      file.write(value);
      file.end();
      file.on('close', () => {
        resolve();
      });
    } catch (error) {
      reject(error);
    }
  });
}
