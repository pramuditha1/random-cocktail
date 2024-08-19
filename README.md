# Cocktail App

## Tech Stack

Following tech stacks are used in this application
React + Typescript
Redux Toolkit: State management 
Vite: Build tool, development server
Material UI (MUI): Prebuilt UI components
Tailwind CSS: To build responsive design
Jest + RTL : For unit testing

## Installation and running on local PC

Extract the zip file
Using the terminal run following commands

### Navigate the project folder
cd cocktail-app

### Install dependencies
npm install

### Start the application
npm run dev

### Run unit tests
npm run test

### Run tests in watch mode
npm run test:watch


## Project structure

Inside the 'src' folder you can find following files and directories

### Containers folder
SearchCocktails.tsx - Fetch random five cocktails and search cocktails. Results from both actions will be updated in store.

Cocktails.tsx - List all the cocktails in card components in a responsive design

FavouriteItems.tsx - Header has a button to open the favourite cocktails modal and it will open a MUI Dialog modal. User abe to add/ remove quantity from favourite cocktails

### Components folder

All the components used in the application implemented here. And also they are typed with Typescript.
Button, Header, FavouriteListItem, ItemCard, Lable, TextBox, Tooltip components are implemented and integrated with unit testing.

### Store

Redux toolkit store implementation is done inside the directory.

reducers - Both cocktails and favourite cocktail reducer slices are implemented in this, Action creator functions defined, asyncThunk actions defined to fetch cocktail data from given api endpoints.

selectors - using reselect select store values and funhctions are defined in this folder.

### Utility files

Constants.tsx - All the constants values are defined here and exported
locale.tsx - All the text values are declared and exported, if you want to add a new text in project define them here.