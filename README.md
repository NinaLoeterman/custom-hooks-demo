#### Custom Hooks Demo

## Welcome! 

### To view this project in the browser:
First clone the repository, then:
```
cd custom-hooks-demo
```

and then:

```
yarn install
yarn start
```

or:

```
npm install
npm start
```

### Some notes about the demo: 

In this project you can see two uses of custom hooks, and hopefully you can see how nicely they seperate logic from the UI.

This simple webpage presents starwars films from swapi.dev, and allows you to save and unsave your favorites storing them in local storage.

There are two main components here, a CardsWrapper that maps over the films, and a Card component that presents the films. All of the card logic sits in a custom hook in Card.logic.jsx, giving Card.jsx access to the functions and state that it needs to present the wanted UI.

Enjoy:)