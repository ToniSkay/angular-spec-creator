[![NPM version](https://badge.fury.io/js/angular-spec-creator.svg)](http://badge.fury.io/js/angular-spec-creator)

# Angular Spec Creator

## Description

Creates spec files for all angular entities.<br>
Such as components, services, directives, interceptors, guards, pipes, and resolvers.

## Install

### Global install (Recommended)
You can install angular-spec-creator globally by `npm i -g angular-spec-creator` command and use it inside any project.

### Local install
You can install angular-spec-creator locally by running `npm i angular-spec-creator` in your project's root path. But then you will, can use angular-spec-generator only inside this project.

## How to use

### From needed directory (Recommended)
You can open a directory with entities of angular for which you would like to create the spec file in a terminal and run `angular-spec-creator ./` command.<br>
Then you will see a notification about the successful creation of files with their names in the terminal.

#### First example. You have such structure:
- some-feature
  - components
    - some-component(without spec file)
  - services
    - some-service(without spec file)

If you open in a terminal such path `root/.../some-feature/` and run `angular-spec-creator ./`, then you get two spec files. First for component and second for service.
<br><br>
If you open in a terminal such path `root/.../some-feature/some-component/` and run `angular-spec-creator ./`, then you get only one spec file for component.

#### Second example. You have such structure:
- some-feature
  - components
    - some-component(without spec file)
  - services
    - some-service(with spec file)

If you open in a terminal such path `root/.../some-feature/` and run `angular-spec-creator ./`, then you get only one spec file for component, because service already have spec file.
<br><br>
If you open in a terminal such path `root/.../some-feature/some-service/` and run `angular-spec-creator ./`, then you won't get any new spec files, because service already have spec file.

### From any place with an indication of the exact path in the command
You can open a terminal in any path and indicate in command the exact path `angular-spec-creator ./some-folder/`

#### For example, you have such structure:
- features
  - some-feature
    - components
      - some-component(without spec file)
    - services
      - some-service(without spec file)

If you open in a terminal such path `root/.../features/` and run `angular-spec-creator ./some-feature`, then you get two spec files. First for component and second for service.
<br><br>
If you open in a terminal such path `root/.../features/` and run `angular-spec-creator ./some-feature/components`, then you get only one spec file for component.
