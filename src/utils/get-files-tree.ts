import * as fs from 'fs';
import * as path from 'path';

export function getFilesTree(sourceUrl: string) {
  const filesTree = [];

  fs.readdirSync(sourceUrl).forEach(file => {
    const url = path.join(sourceUrl, file);

    if (isDirectory(url)) {
      filesTree.push(...getFilesTree(url));
    }

    filesTree.push(url);
  });

  return filesTree;
}

function isDirectory(url: string): boolean {
  return fs.lstatSync(url).isDirectory()
}
