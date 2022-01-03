import * as path from 'path';
import { File } from '../interfaces/file';
import { ParsedPath } from 'path';
import { supportedTypes } from '../constants/supportedTypes';

export function getFilesForSpecCreating(array: Array<string>): File[] {
  return array
    .filter(url => isNotSpecFile(path.parse(url)) && getType(url))
    .map((url) => {
      const file = path.parse(url);

      return {
        type: getType(url),
        name: file.name,
        dir: file.dir,
        url: url
      }
    });
}

function isNotSpecFile(file: ParsedPath): boolean {
  return file.ext === '.ts' && !file.name.includes('spec')
}

function getType(url): string {
  return supportedTypes.find(t => url.includes(t));
}
