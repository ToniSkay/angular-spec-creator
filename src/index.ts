#!/usr/bin/env node
import { getFilesTree } from './utils/get-files-tree';
import { getFilesForSpecCreating } from './utils/get-files-for-spec-creating';
import { createSpec } from './createSpec';

export class AngularSpecCreator {

  constructor() {
    this.generateSpecFiles();
  }

  async generateSpecFiles() {
      const args = process.argv.slice(2);
      const sourceDir = args[0];

      await createSpec(getFilesForSpecCreating(getFilesTree(sourceDir)));
  }
}

module.exports = new AngularSpecCreator();

