# employeeSummary

<a name="desc"></a>

# Description

This command-line application generates a company team HTML page based on the user's feedback to questions about his/her company's employees.

Prompts request information including:

- Name of the employee
- Employee email address
- Employee ID
- Employee role (Intern, Manager, or Engineer)
- Employee gitHub username, if the employee is an engineer
- Employee school name, if the employee is an intern
- Employee office phone number, if the employee is a manager

# Table of Contents

1. [Description](#desc)
2. [Installation](#install)
3. [Usage](#usage)
4. [License](#lic)
5. [Testing](#test)
6. [Contributing](#contr)
7. [Questions](#quest)

<a name="install"></a>

# Installation

Run an npm install to ensure all required modules are installed before usage.

<a name="usage"></a>

# Usage

This is a command-line application intended for purely for use within the terminal. By running the command "npm node", the application prompts users with a series of questions, their answers to which will become the content of a templated team.html file for their company' team information to be showcased.

[A video demonstration of the usage of this application can also be found in the assets file.](./assets/applicationDemo.mov)

Sample terminal prompts and responses: <img src = "./assets/sampleTerminalPrompts.png">

Sample generated HTML page: <img src = "./assets/htmlOutput.png">

<a name="lic"></a>

# License

No additional licenses are needed for this application.

<a name="test"></a>

# License

The test folder includes four files to test using the Jest framework. These tests ensure that all objects created through classes Manager, Engineer, Intern, or Employee, are created accurately to ensure code runs smoothly and as intended.

<a name="contr"></a>

# Contributing

When contributing to this project, please add clear and concise comments to all added code to ensure my and future users' understanding of additions and changes.

<a name="quest"></a>

# Questions

Please direct all questions to Sarah Kerr, who can be found at https://github.com/skerr924 or by emailing sarah.kerr93@gmail.com.
