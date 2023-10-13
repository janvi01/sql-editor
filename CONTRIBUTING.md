# Contributing to SQL Online Editor

Welcome to SQL Online Editor! We are thrilled to have you here and appreciate your interest in contributing. This document provides guidelines on how to get started with this project, contribute code, and improve the project together.

### Ways to contribute to the project:
- Reporting bugs: If you find a bug in our project, please report it by opening a new issue on GitHub.
- Suggesting new features: If you have an idea for a new feature, please submit a new issue on GitHub.
- Fixing bugs: If you want to work on any issue/bug, comment on the issue and make a pull request.
- Improving documentation: If you find any errors or omissions in our documentation, please create an issue and submit a pull request with your changes.

## Table of Contents

- [Setting up the Project Locally](#setting-up-the-project-locally)
- [GitHub Workflow](#github-workflow)
  - [Cloning the Repository](#cloning-the-repository)
  - [Navigate to the project directory](#navigate-to-the-project-directory)
  - [Adding Upstream Remote](#adding-upstream-remote)
  - [Creating a New Branch](#creating-a-new-branch)
- [Procedure to Make a Pull Request (PR)](#procedure-to-make-a-pull-request-pr)

## Setting up the Project Locally

> Prerequisites - Git and Node.js

To contribute to this project, you need to set it up on your local machine. Follow these steps:

1. **Fork [this](https://github.com/janvi01/sql-editor) Repository:** Click the "Fork" button at the top right corner of the repository page to create a copy of this repository in your GitHub account.
> Note: Forking helps you make changes in your own fork and later create a pull request to merge those changes into the main repository.*

2. **Clone Your Fork:** Clone your forked repository to your local machine using Git. Replace `<your-username>` with your GitHub username:
   ```bash
   git clone https://github.com/<your-username>/sql-editor.git
   ```

3.  **Navigate to the project directory:** `cd sql-editor`.

4. **Install Dependencies:** `npm install`.

5. **Start the development server:** `npm start`.

*You can now open the project in your web browser at http://localhost:3000.*

## GitHub Workflow

#### Adding Upstream Remote:
This helps keep your fork up to date with the main repository.
```bash
git remote add upstream https://github.com/<username>/sql-editor.git
```

#### Creating a New Branch:
For each contribution or bug fix, create a new branch. 
```bash
git checkout -b <branch name>
```

*Make your changes to the code.*

#### Commit your changes:

```bash
git commit -m "<Commit message>"
```

#### Push your changes :

```bash
git push -u origin <branch name>
```

*Create a pull request to merge your changes into the upstream repository.*

## Procedure to Make a Pull Request (PR)

To create a pull request, follow these steps:

1. Go to your fork of the repository on GitHub.
2. Click the Pull Requests tab.
3. Click the New pull request button.
4. Select the branch that you want to merge into the upstream repository.
5. Click the Create pull request button.

*Once you have created a pull request, the project maintainers will review your changes and merge them into the upstream repository if they are approved.*

## Writing a Pull Request

When writing a pull request, be sure to include the following information:

- A clear and concise description of your changes.
- Any relevant documentation or test cases.
- Links to any related issues or pull requests.
- It is also a good idea to test your changes thoroughly before submitting a pull request.

Your Pull Request(PR) will be reviewed by the maintainers, and once approved, your changes will be merged into the main repository.

Thank you for contributing to SQL Online Editor! We appreciate your efforts in making this project better.
