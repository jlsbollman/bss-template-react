# A Basic React w/ TypeScript Template

This project is a base template to use when creating a new website using React.
It contains all the basic functionality required for a website that isn't data heavy.

![bss-logo](https://user-images.githubusercontent.com/18294133/221908459-f4e5901e-a595-4d6b-9e66-c5e266dfabc0.gif)

## Major Frameworks

- Bootstrapped with [Create React App](https://github.com/facebook/create-react-app)
- TypeScript
- Webpack/Babel
- React Router
- Docker/nginx
- Jest

## Docker

This template includes a Dockerfile to containerize the React app.
It is configured with nginx and is ready to be deployed.
Extra configuration is required to push to a remote Artifact Repository

## Webpack/Babel

Webpack/Babel is included to work with sass/scss.
Configuration is under the `./webpack` directory.
The `start` and `build` commands utilize webpack.

## Unit Tests

Tests can be found under `./src/__tests__`.
Startup configuration is in `./src/setupTests.ts`.
Run through the `npm run test` command.

## Available Scripts

In the project directory, you can run:

### `npm run start`

Runs the app with Webpack/Babel in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production using Webpack/Babel to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run docker-start`

Builds a new Docker image and creates/starts a container.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

Edits won't be visible until the `npm run docker-start` command is run again and a new container is started.

### `npm run test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
