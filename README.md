This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

# Link

HomePage [https://wilsonchen40172.github.io/free-whale]

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## 能使用sass

You should use terminal : npm install node-sass sass-loader --save(MacOs)

## fontawesome

基本icon:
npm i --save @fortawesome/react-fontawesome@latest
社群app相關icon:
npm i --save @fortawesome/free-brands-svg-icons

## deploy 直接用指令部署上gh-pages

npm install gh-pages
npm run build
package.json -> scripts -> "deploy": "gh-pages -d build" // 增加這一行
npm run deploy
Published就代表部署成功
package.json -> scripts -> "deploy": "react-scripts build && gh-pages -d build"
先build後部署

## json cloud db testing

先啟動
json-server --watch db.json
再啟動server
npm run start

## Node Version

Node version -> v18.9.1 (需用nvm更換版本)
"node-sass": "^7.0.0" -> "^8.0.0",
"sass-loader": "^12.6.0" -> "^10.0.4",