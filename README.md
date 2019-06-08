This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

## Before running please make sure you are running the server on localhost:9000
## Running instructions for the server is given in server project

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

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

# User Details
Following are the user details to access server api endpoints which requires administration access.

### Administraion acces:
```shell
username: admin
password: admin
```

Following are the user details to login from client side UI.

### Client side login details
```shell
username: unilever
password: unilever
```

```shell
username: apple
password: apple
```

```shell
username: nike
password: nike
```

```shell
username: ford
password: ford
```

## User-Case Description

### case 1: Unknown user access
```shell
As a user:
    -> go to home page (in my case http://localhost:3000)
    -> click on (plus) button to add items into cart.
    -> click on cart icon from top nav bar to see items in the cart.
    -> you can see items added in the cart with total showing at the bottom.
```

### case 2: Known user access
```shell
As a user:
    -> go to home page (in my case http://localhost:3000)
    -> click on login from header navigation bar.
    -> use any of the above mentioned user crendentials for client side.
    -> click on (plus) button, showing for each ad card on dashboard, to add items into cart.
    -> click on cart icon from header nav bar to see items in the cart.
    -> you can see items added in the cart with total showing at the bottom.
    -> verify the use case for discount package based on logged in user.
```

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
