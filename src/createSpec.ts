import * as fs from 'fs';
import * as path from 'path';
import * as format from 'string-template';
import { File } from './interfaces/file';
import { createFile } from './utils/create-file';
import { camelize } from './utils/camelize';
import chalk from 'chalk';

export async function createSpec(files: File[]) {
  for (const file of files) {
    if (!isSpecFileAlreadyExists(file)) {
      await createFile(getSpecUrl(file), getContent(file));

      console.log(getSpecUrl(file) + chalk.green(' successfully created'));
    }
  }
}

function getContent(file: File) {
  return format(getTemplate(file), {
    entityName: camelize(getFileName(file)),
    urlName: getFileName(file)
  });
}

function getFileName(file: File) {
  return file.name.replace(`.${file.type}`, '')
}

function getTemplate(file: File): string {
  return fs.readFileSync(path.join(__dirname, `templates/${file.type}.template`)).toString();
}

function isSpecFileAlreadyExists(file: File): boolean {
  return fs.existsSync(getSpecUrl(file));
}

function getSpecUrl(file: File): string {
  return path.join(file.dir, `${file.name}.spec.ts`);
}
