# Tyler Williams MSSE 661 Final Project

**Texas Hold 'Em Odds Calculator**


[The Texas Hold ‘Em Odds Calculator](https://tyler-williams-msse661-final-project.netlify.app/) is a web application that helps people improve their ability to make sound mathematical decisions in poker games.

Users are be presented with randomized poker scenarios and asked to calculate their pot odds and hand strength (using the rule of 2 and 4).

User success is graded server-side and stored in a database, along with each scenario in question.

Built with [RedwoodJS](https://redwoodjs.com)

## Feature Progress

* [x] Home page for signing in and signing up
* [x] Authentication and authorization solution
* [x] Frontend logic to generate random hole cards, community cards, and betting scenarios
* [x] Random scenarios saved to the database
* [] User input to collect answers
* [] Backend validation and grading
* [] User grades and results tracking stored in the database

## Setup

We use Yarn as our package manager. To get the dependencies installed, just do this in the root directory:

```terminal
yarn install
```

### Database migrations

To prepare the local database, run:

```
yarn rw db up
```

### Start the development server

```terminal
yarn redwood dev
```

Your browser should open automatically to `http://localhost:8910` to see the web app. Lambda functions run on `http://localhost:8911` and are also proxied to `http://localhost:8910/.redwood/functions/*`.

### Logging in

We use [Netlify Identity](https://docs.netlify.com/visitor-access/identity/) for the [RedwoodJS authentication](https://redwoodjs.com/docs/authentication). There is a test user set up with the credentials:

```
email: tyler@ogdenstudios.xyz
password: password
```

In the entrypoint, we set up the correct localStorage cookies for Netlify Identity to run on development machines, but if you receive an error message that reads:

```
Looks like you're running a local server. Please let us know the URL of your Netlify site.
```

Use the following URL: `https://tyler-williams-msse661-final-project.netlify.app/`

The test credentials should work in development environments, and also in production (an acceptable choice for a class project of this scope).

## Tests

RedwoodJS Tests (Jest):

```
yarn rw test
```

Cypress:

```
yarn cypress
```

**Note: on WSL, the Jest tests may run slowly, and Cypress may fail to run entirely. WSL1 doesn't have a good windowing solution. This should not be a problem on OSX or Linux systems.**
