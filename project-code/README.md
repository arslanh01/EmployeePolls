# Employee Polls Web App

## Introduction

This is a web app created for the final project of Udacity React Nanodegree Program. It enables the emplooyees of an organizationn to create and answer internal polls. It has been developed using the following cooncepts:

- State Management
- Redux
- Routing

## QuickStart

To get this application in up and running state, perform the following steps:

- `git clone` the `EmployeePolls` repo
- Navigate to `project-code` directory
- Run `npm install` to install the dependencies
- Run `npm start` to start the development server

And you're good to go!

## Features

### Login

When you first start the app, you'll be asked to sign in using an existing user ID. Sign in and then you'll be in the app.

### Dashboard

The first page you'll see is a dashboard. There will be a navigation bar at the top to help you navigate throught the app. The dashboard displays the information about the logged in user and shows his/her unanswered poll. The user can also toggle to see his/her answered polls.

### Poll

On clicking a poll on the dashboard, that particular poll will be displayed with all of its details. 

If it is an unanswered poll, you will be asked to answer the pol. Upon answering, the details of all the votes (including yours) will be displayed.

It it is answered poll, all the details will already be displayed.

### Leaderboard

On clicking **Leaderboard** on the navigation bar, you'll be taken to the leaderboard page. Here, you'll see all the users ordered according to the number of polls created and also the number of polls answered.

### Poll Creation

On clicking **Create New Poll** on the navigation bar, you'll be taken to a page where you'll be able to create a new poll. You'll just have to  write the two options and click the **Create Poll** button. Your poll will be created and you'll be taken to the dashboard where your newly created poll will appear in the **Unanswered Polls** category.

## Author and Developer

**Arslan Haider** is the author of this README and the develooer of this application.
