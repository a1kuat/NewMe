# Marvel API Explorer

Marvel API Explorer is a web application that allows users to explore the vast universe of Marvel characters and series. Built with React and Material-UI, this app provides a seamless interface to navigate through the Marvel database and visualize the intricate connections between characters and series.

## Live Demo

Experience the Marvel API Explorer in action by visiting the [live demo](https://github.com/a1kuat/NewMe/assets/88373996/8c85ca6a-83a0-4b8d-b75d-a87e8bc5ff6e).

## Features

- Browse and search for Marvel characters and series.
- View detailed profiles of characters and series.
- Interact with an interactive graph showing character-series relations.

## API Endpoint and Credits

The Marvel Comics API’s base endpoint is `http(s)://gateway.marvel.com/`. To use the Marvel API, you must obtain API keys through the [Marvel Developer Portal](https://developer.marvel.com/). Be sure to adhere to the API's terms of use and provide proper attribution as per Marvel's guidelines.

### Application Structure

The application consists of six main pages:

  - HomePage: The landing page providing an overview of the Marvel Universe.
  - CharactersPage: A list of characters available in the Marvel database.
  - DetailedCharactersPage: Provides detailed information about individual characters.
  - SeriesPage: Showcases a list of comic book series from Marvel.
  - DetailedSeriesPage: Offers comprehensive details about specific comic book series.
  - GraphPage: Displays an interactive graph illustrating the connections between characters and series.


## Technologies Used

- Frontend: React, React Router DOM, Material-UI System and Material-UI Core
- Backend: Marvel Comics API
- Data Security: CryptoJS for API access
- Graph Visualization: react-flow-renderer

## Setup

To run this project locally, clone the repository and install dependencies:
```
git clone https://github.com/a1kuat/NewMe.git
cd NewMe
npm install
```

Build and start the development server:

```
npm run build
npm run start
```

The app will be available at [http://localhost:3000](http://localhost:3000).

## Contributing

Contributions are welcome! Please feel free to submit issues or pull requests. Before submitting a pull request, please ensure that your code follows the existing style conventions and that you update any relevant documentation.

---

©  2024 GitHub, Inc.

