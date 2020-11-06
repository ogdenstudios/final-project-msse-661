# Tyler Williams MSSE 661 Final Project

Built with [RedwoodJS](https://redwoodjs.com)

[View the production site](https://tyler-williams-msse661-final-project.netlify.app/)

## Setup

We use Yarn as our package manager. To get the dependencies installed, just do this in the root directory:

```terminal
yarn install
```

### Fire it up

```terminal
yarn redwood dev
```

Your browser should open automatically to `http://localhost:8910` to see the web app. Lambda functions run on `http://localhost:8911` and are also proxied to `http://localhost:8910/.redwood/functions/*`.

## Tests

Cypress:

```
yarn cypress
```

## Logging in

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
