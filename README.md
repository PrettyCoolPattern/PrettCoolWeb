PrettyCoolPattern.com React Web App Public Development Project 
====


Relevant Uncommon Vocabulary (WIP)
==


NodeJS
NPM
ReactJS
Elements
Cards
Import
GCP
VM
Col
Row 
Root
sudo rebooto
eslint


## Setup Step 1.


Install Prerequisites:

NodeJS
NPM
git


## Download Source Files For Web App & Set Up Project Workspace.

# 1) Get files
Type into git bash in the desired setup directory (git install prequisite): 

git clone https://github.com/PrettyCoolPattern/PrettCoolWeb

It should echo out (along the lines of):

Cloning into 'PrettCoolWeb'...
remote: Enumerating objects: 98, done.
remote: Counting objects: 100% (98/98), done.
remote: Compressing objects: 100% (66/66), done.
remote: Total 1750 (delta 41), reused 70 (delta 28), pack-reused 1652
Receiving objects: 100% (1750/1750), 69.04 MiB | 28.70 MiB/s, done.
Resolving deltas: 100% (580/580), done.
Updating files: 100% (1625/1625), done.

*28.70 MiB/s: Nice...

Now you have the source code, edit Pages/ and .js files and any other files as a React app.

# 2) After making changes, upload changes to the group git repo by running the following code:

*note, change  "your message about changes here" to a description of the update

git add .
git commit -m "your message about changes here"
git push

## The Private Personal Passwords File (Not Yet Implemented)

Find example.env in your project root directory and rename it to .env 
This file is set to be auto excluded in sharing and will be your passwords and keys file.

## Installation Instructions & Notes

This project is bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


**Note: this is a one-way operation. Once you `eject`, you can’t go back!**
### `npm run eject`
**Note: this is a one-way operation. Once you `eject`, you can’t go back!**


If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify



## Development Notes:

Update progress:

npm i react-scripts@3.0.0

npm WARN deprecated fsevents@2.0.6: Please update: there are crash fixes
npm WARN deprecated fsevents@1.2.13: fsevents 1 will break on node v14+ and could be using insecure binaries. Upgrade to fsevents 2.
npm WARN deprecated left-pad@1.3.0: use String.prototype.padStart()
npm WARN deprecated request-promise-native@1.0.9: request-promise-native has been deprecated because it extends the now deprecated request package, see https://github.com/request/request/issues/3142
npm WARN deprecated @hapi/joi@15.1.1: joi is leaving the @hapi organization and moving back to 'joi' (https://github.com/sideway/joi/issues/2411)
npm WARN deprecated @hapi/address@2.1.4: This version has been deprecated and is no longer supported or maintained
npm WARN deprecated @hapi/bourne@1.3.2: This version has been deprecated and is no longer supported or maintained
npm WARN deprecated @hapi/hoek@8.5.1: This version has been deprecated and is no longer supported or maintained
npm WARN deprecated @hapi/topo@3.1.6: This version has been deprecated and is no longer supported or maintained
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@2.0.6 (node_modules\react-scripts\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@2.0.6: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@^1.2.7 (node_modules\jest-haste-map\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.13: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
npm WARN notsup Unsupported engine for watchpack-chokidar2@2.0.0: wanted: {"node":"<8.10.0"} (current: {"node":"12.18.3","npm":"6.14.6"})
npm WARN notsup Not compatible with your version of node/npm: watchpack-chokidar2@2.0.0
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@~2.1.2 (node_modules\watchpack\node_modules\chokidar\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@2.1.3: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.13 (node_modules\chokidar\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.13: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

+ react-scripts@3.0.0
updated 12 packages and audited 2170 packages in 54.425s

51 packages are looking for funding
  run `npm fund` for details

found 5 vulnerabilities (1 low, 2 moderate, 2 high)
  run `npm audit fix` to fix them, or `npm audit` for details



## Additional Learning notes WIP & DIY:

Updating depreciated modules (one by one):

# react-scripts contained several depreciations and required updating, processed in this order:

npm i react-scripts@3.0.0
npm install --save --save-exact react-scripts@3.0.1
npm install --save --save-exact react-scripts@3.1.0

tested on Win10x64:

npm start

Result:
Fail

Fix?:
failed:
npm i url-loader
Test:
babel-preset-react-app


# Build a ReactJS app with web frameworks of Bootstrap from scratch for learning:

*npx comes with some npm/nodejs installs also installable independently

npx create-react-app react-bootstrap-app
npm install react-bootstrap bootstrap

Add source & dependencies.

npm install node-sass

