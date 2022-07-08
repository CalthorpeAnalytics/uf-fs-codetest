# The Urban Footprint Fullstack Code Test

Thank you for your interest in a Software Engineering position with UrbanFootprint!

This exercise is designed to test your knowledge of Client/Server interaction over HTTP, manipulating data, and familiarity with React.

While the React app uses a Mapbox component, prior knowledge of Mapbox isn't necessary to produce a solution.

This app was scaffolded using [Create React App](https://reactjs.org/docs/create-a-new-react-app.html) and uses a React wrapper for Mapbox called [react-map-gl](https://visgl.github.io/react-map-gl/).

## Goal: Measuring success

Complete the **Basic Requirements** below. This is a  (45 min) exercise, so write the minimum amount of code necessary to fulfill the requirements. If time allows, pick a Bonus Requirement. We will assess your solution based on these criteria:

1. Code functions as specified in Basic Requirements
2. Code is well-factored and uses common patterns ("good practices")
3. You can point to improvements you'd make given more time

This is a pairing exercise! That means we want you to ask questions to clarify the requirements and talk aloud as you consider different solutions. The interviewers will help point out syntax errors and give you hints if you get stuck. You are free to use the internet to look up APIs.

### Basic Requirements
1. There is an API endpoint to request city data
   a. We strongly recommend you use the scaffolded Express server
   b. You're welcome to use a different Node server framework, or even a different language if you prefer. However, keep in mind you have 45 minutes to solve all Basic Requirements.
2. The clients calls the endpoint and uses the data to:
   a. render an alphabetically sorted list of cities in the Panel component
   b. render map pins/markers in the correct locations (using provided Pin component)

### Bonus requirements

Choose one:
1. Add a text input field to the top of the sidebar to filter the cities displayed
   a. any city that matches the substring (case insensitive) should be displayed
   b. both sidebar list and map markers should be filtered
2. Click sidebar City list item to zoom to that city on the map
   a. See `react-map-gl` [Controlled Map example](https://visgl.github.io/react-map-gl/docs/get-started/state-management#controlled-map)

## Getting started

If you need to, install Node and npm: [download](https://nodejs.org/en/download/) or use [`nvm`](https://github.com/nvm-sh/nvm#installing-and-updating).

### Clone the repo

```
$ git clone git@github.com:CalthorpeAnalytics/uf-fs-codetest.git
```

### Install Dependencies

```
$ cd uf-fs-codetest
$ ./install_deps.sh
```

### Run the API server

In a terminal, run:

```
$ cd server
$ npm start
```
### Run the React app

In a separate terminal, run:

```
$ cd client
$ npm start
```


Open [http://localhost:3000](http://localhost:3000) to load the app in the browser.

The application _should_ "hot reload" when you edit a file and save it. If in doubt, reload the page.
