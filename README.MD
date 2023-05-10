# Github repositories explorer

## Description

The project Github repositories exporer is mobile responsive and able to search up to 5 users from Github. When user is found, we can click each of user's card to see the repositories they have.

## Installation

> npm install

## Tech Stack

    1. ReactJS (UI Libraries)
    2. Tailwind CSS (Styling)
    3. Typescript (Programming Language)
    4. ViteJS (Webpack)
    5. Jest (testing)

### What Did I do ?

1.  I created Card Component and Card Detail Components to show list of users and list of repositories on each users.
2.  I created custom hook named useToggle, to toggle the card to be opened by user, to toggle if there is an error while fetching it and etc.
3.  I design the UI with mobile first approach
4.  I'm fetching the api to get the user, and the repositories of each users
5.  I created error validation, when user fail fetch teh data
6.  I test the app with jest
