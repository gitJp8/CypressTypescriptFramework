# CypressTypescriptFramework

Getting Started
Salesforce Flows Automation with TypeScript and Cypress
Introduction
This project is a Proof of Concept (POC) for automating Salesforce flows using TypeScript and Cypress. The current implementation includes logging into Salesforce, navigating to the Opportunities page, searching for a specific Opportunity, and accessing the Opportunity page.

Getting Started
Installation Process
Create Project Folder:
mkdir salesforce-automation
cd salesforce-automation

Initialize the Project:
npm init -y

Install Cypress:
npm install cypress

Install TypeScript:
npm install typescript@4.1.6

Install Software Dependencies:
npm install lodash cypress-iframe@1.0.1 cypress-xpath@2.0.1 mocha@10.3.0

Initialize TypeScript Configuration:
npx tsc --init --types cypress --lib dom,es6
This command ensures that Cypress types are accessible by TypeScript and creates a tsconfig.json file.

Compile TypeScript Files:
Run the following command each time a TypeScript file is modified:
npx tsc

Project Structure

salesforce-automation/
│
├── cypress/
│   ├── fixtures/
│   ├── integration/
│   │   └── loginTest.spec.ts
│   ├── plugins/
│   ├── support/
│   │   ├── commands.ts
│   │   └── index.ts
│   └── tsconfig.json
│
├── pages/
│   ├── BasePage.ts
│   ├── LoginPage.ts
│   └── OpportunitiesPage.ts
│
├── cypress.config.ts
├── package.json
└── README.md


Running Tests
Open Cypress Test Runner:
npx cypress open

Run Tests in Headless Mode:
npx cypress run