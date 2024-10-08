# BDD CRA

**BigDevDog's create-react-app**:

because I'm tired of redoing the same things at the beginning of every react project I start.

## Overview

This package can be used by anybody, but it is currently pointed toward me, as it uses my pixel face logo and says 'by b1gd3vd0g' in the title.

This removes some unnecessary files from create-react-app, and modifies the remaining files to follow my coding preferences (arrow functions, lowercase file names, etc.).

## How I use this repository

I just use this repository indirectly by accessing a bash script I have saved on my computer.

The bash script is right here:

```
#!usr/bin/bash

# $1 is equal to the name of the new directory we are gonna create.
# ($1 refers to the FIRST word following the 'bash bdd-cra' command.)

# Clone the github repository with my starter code in it.
# It will be put into a file on the system named $1.
git clone https://github.com/b1gd3vd0g/bdd-cra.git $1 &&

# Change into the newly made directory.
cd ./$1 &&

# Nobody needs my old git stuff
rm -rf .git &&

# Reinitialize a git repo
git init &&

# Add and commit everything that was just made.
git add . &&
git commit -m "Initial commit - React app created with bdd-cra" &&

# Make sure all the dependencies are installed so that the app can
# be run immediately.
npm i &&

# Let the user know how to start
echo &&
echo React app \'$1\' has been created successfully. &&
echo Start the project by doing: &&
echo cd $1 &&
echo npm start &&
echo
```

Once this is in the folder I want it in, I simply say navigate to the directory in which I want my new app to be located, and enter into the terminal:

`bash /path/to/bdd-cra newApp`

Then once I enter:

`cd newAppName && npm start`

I can see the app running.

## Potential improvements

There's gotta be a better way than downloading a bash script from the readme of
my git repository in order to use my repository. Figure out something that is
a little bit easier, like the `npx create-react-app`.

Maybe personalize it a _little_ bit less - as in, don't actually SAY b1gd3vd0g anywhere, but still use the logo.

## Available scripts

As this is simply a personalized version of create-react-app,
the same scripts which are available there are available here. Below I have
simply copied the README info from create-react-app.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
