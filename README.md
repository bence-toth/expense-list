# Expense list

A possible solution to [a technical assignment](https://github.com/pleo-io/frontend-challenge) from Pleo.

This project consists of a few reusable React components and a small React application.

The project was bootstrapped with [`create-react-app`](https://github.com/facebook/create-react-app).

## Application structure

### Reusable components

There are some reusable React components in `/src/components`:
- Modal in `/src/components/modal/`
- Avatar in `/src/components/avatar/`
- Spinner in `/src/components/spinner/`

These components are not dependent on each other, but they are all dependencies of the React application.

While these components are somewhat generic, I did not focus on implementing any features (not even obvious ones) I did not have a use case for.

### React application

Besides the above components, there is the React application in `/src/components/app`.

The application is bootstrapped at `/src/index.js`, which imports `/src/components/app/app.container.js` which is where all the magic starts. The container is a React function component using hooks for state management (and more), and there are multiple containers down in the tree that manage their own state and side effects.

I decided not to introduce an external state manager like Redux or MobX, instead, I used React hooks (and built a few custom ones, too), and stored all the data I needed in the React containers. Nonetheless, where it made sense to use a reducer, I kept the _consumer_, _reducer_, and _action creator_ patterns familiar from the Redux world.

The folder structure and the application structure are identical. In each folder, I have separated the logic in multiple files, file names will indicate the purpose of its content.

#### Assumptions

I made a few assumptions while completing the assignment:

- I assumed that that no authentication towards the server is required – although this is most certainly not true.

- I assumed that the server and the client run on the same domain (hence there are no CORS issues to deal with).

- I assumed that if the server responds, it will always deliver the correct JSON schemas.

## Run the application

To run the application, first install dependencies:
```bash
npm ci
```

Then start up the project in your favorite browser with React running in dev mode, hot reloading, and all the bells and whistles:
```bash
npm start
```

## Test the application

### Linting

Run ESLint with [a _very_ extensive config](https://www.npmjs.com/package/@agillic/eslint-config) I love:
```
npm run eslint
```

Run stylelint:
```
npm run stylelint
```

Or run both linters sequentially:
```
npm run lint
```

### Jest

Start Jest’s test runner:

```
npm test
```

Press `a` to run all tests, or just follow the instructions in the console.

You can generate a coverage report with Jest:
```
npm test:coverage
```

### Cypress

You can run [Cypress](https://www.cypress.io/) tests that cover some basic use cases:
```
npm run cypress
```
Just click “Run all specs” in the main Cypress window and see the magic happen.

## Improvement ideas

My goal was to make the application as production ready.

I had several ideas I wanted to implement in order to reach that goal, some of them I did not complete due to the time constraint.

If I were to improve the solution, I would revisit the following:
- Error handling should be introduced primarily around network communication. Using [Error Boundaries](https://reactjs.org/docs/error-boundaries.html) around bigger components could also be a good idea. Additionally, some kind of contract testing or schema verification should be introduced.

- Jest tests should be extended to React components using either [React Testing Library](https://testing-library.com/docs/react-testing-library/intro) or [Enzyme](https://airbnb.io/enzyme/).

- The reusable components (`Avatar`, `Modal`, `Spinner`) should have documentation, I would use [Storybook](https://storybook.js.org/) for that, with [StoryShots](https://storybook.js.org/docs/testing/structural-testing/#using-storyshots) for Jest snapshot tests.

- There are some components that could be turned into more generic and more reusable ones (for example empty state and icon).

- Scroll bar are not cross-browser, now only webkit-based browsers get the nice scroll bars.

- There is some mocking in `expenseList.consumers.utility.js` which should be moved to the API.

- Cypress covers the most critical functionality, but Cypress test coverage could be increased.

- The application was tested only in Google Chrome, it should definitely be checked in other browsers.

- The application is supposed to be responsive, but no actual testing on mobile devices was done.

- There was no accessibility audit conducted, so there might be accessibility issues.

- Support for dark mode could be introduced using [`prefers-color-scheme`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme) CSS media feature.

- Modal animations should be disabled according to user preferences using [`prefers-reduced-motion`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion) CSS media feature.

- Some usability testing would not hurt.

## Branching strategy

I am following the “commit directly to master” branching strategy.

If any of this was to be released in any way, or if multiple developers were to work on this project, I would probably recommend [Git flow](https://datasift.github.io/gitflow/IntroducingGitFlow.html).

## License

MIT, have fun!

## Contact

Made by _Bence A. Tóth_.<br />
Feel free to reach out at tothab@gmail.com.
