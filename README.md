## Weather Now!

This project shows a simple weather app, which has the following features:
1. It shows the current temperature of 2 default cities 
2. It shows the current temperature of user entered locations
3. It shows more weather conditions if user clicks the city

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`
To launch the test runner in the interactive watch mode.
### `npm run lint`
To lint the codes


## My Approach
First I use Create React App to bootstrap this project. It gives me the basic setup, such as the folder structure and libraries.

Second I start to install some necessary dependencies.

Then I start to implement the basic functionalities:
* fetch data from OpenWeatherMap API
* render data in the App
* render different components I need

After I am sure that I can have the basic weather data displayed in the app, I start to think about how to design and implement the routes.

Besides, I notice that I need to do some normalization of the data I get from the API.

Eventually, when I get all the data rendered in the components and routes I want, I start with the styling.

In the end, I add some unit tests and snapshot test.

Last but not least, I add more error handling and local storage to keep user's recent entered locations.

## What I would improve
1. More features: personalization settings
2. When the application becomes more complex, I will introduce state management library such as Redux
3. Improve user experience: add icons, animations, localization



