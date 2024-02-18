# starwarsly
https://curric.rithmschool.com/springboard/assessments/react-3-7bc1/

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

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




The Starwarsly App allowers users to explore information about Star Wars films, people (characters), and planets.

## The Archetecture is described below:

### COMPONENTS: 
- App.js: Main compoenent and application root managing the overall structure of the app. 
- Films.js: Component to display details about a Star Wars franchise film.
- FilmsLIst.js: " " displaying a list of the Star Wars franchise films.
- Homepage.js: " " for the hompeage of the app containing "About" information and links to sub pages.
- NavBar.js: " " for the nav bar with links to subpages/subsections
- Person.js: " " for displaying detailed information about a person/character (people) in Star Wars. 
- PersonList.js: " " for displaying a list of characters in Star Wars films. 
- Planet.js : " " for displaying details of Star Wars planets.
- PlanetList.js: " " for displaying a list of Star Wars planets.
- Routes.js : " " for defining routes and their related components for React Router
- Sublist.js: " " for displying a sublist of items inside another component. 
- ItemLIst.js: " " for displying a list of items. 

### ACTIONS:
- films.js : Actions for fetching and managing Star Wars franchise films.
- people.js: " " fetching and managing people (characters) in Star Wars.
- reset.js : " " resetting specific parts of the application state.
- planets.js: " " for fetching and managing Star Wars planets.
- types.js: Defines constants related to actions in the app. 

### REDUCERS: 
- root.js : Root reducer to combine all reducers (below).
- films.js : Reducer for managing state related to Star Wars franchise films.
- people.js: " " managing state for people (characters) in Star Wars.
- planets.js: " " managing state for planets in Star Wars.

### STYLESHEETS:
- App.css : Styles for App component
- NavBar.cc : " " for nav bar component 
- index.css : GLobal styles


