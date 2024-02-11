# Marvel API Explorer 
<p align="center">
  <img src="https://seeklogo.com/images/M/marvel-comics-logo-B9EA67A8EE-seeklogo.com.png" alt="Marvel Logo" width="250"/>
</p>

Marvel API Explorer is a web application that allows users to explore the vast universe of Marvel characters and series. Built with React and Material-UI, this app provides a seamless interface to navigate through the Marvel database and visualize the intricate connections between characters and series.

## Live Demo

Experience the Marvel API Explorer in action:


https://github.com/a1kuat/NewMe/assets/88373996/557b3c43-9a7c-4102-ab18-ff01a7baed7c



## Features

- Browse and search for Marvel characters and series.
- View detailed profiles of characters and series.
- Interact with an interactive graph showing character-series relations.

## API Endpoint and Credits

The Marvel Comics API’s base endpoint is `http(s)://gateway.marvel.com/`. To use the Marvel API, you must obtain API keys through the [Marvel Developer Portal](https://developer.marvel.com/). Be sure to adhere to the API's terms of use and provide proper attribution as per Marvel's guidelines.

### Application Structure

The application consists of six main pages:

  - HomePage: The landing page providing an overview of the Marvel Universe:
    
    ![HomePage](https://github.com/a1kuat/NewMe/assets/88373996/f3398da4-8859-418c-868c-7fa38f183454)
    
  - CharactersPage: A list of characters available in the Marvel database:
    
    ![CharactersPage](https://github.com/a1kuat/NewMe/assets/88373996/4ee652d4-7604-4b4e-88a4-5425e931be38)
  
  - SeriesPage: Showcases a list of comic book series from Marvel:
    
    ![SeriesPage](https://github.com/a1kuat/NewMe/assets/88373996/3c0a74d5-c6b5-4024-99f5-da3e1fe3908a)
    
  - DetailedCharactersPage and DetailedSeriesPage: Offers comprehensive details about individual characters or specific comic book series:
    
    ![DetailedPages](https://github.com/a1kuat/NewMe/assets/88373996/3826960a-0621-49da-8328-cf0db2e1601a)
    
  - GraphPage: Displays an interactive graph illustrating the connections between characters and series:
    
    ![GraphPage](https://github.com/a1kuat/NewMe/assets/88373996/adb92307-d431-4f25-9751-229c7aeb16ca)


## Technologies Used

- Frontend: React, Typescript, React Router DOM, Material-UI System and Material-UI Core
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

The app will be available at [http://localhost:8099/newme](http://localhost:8099/newme).

## Contributing

Contributions are welcome! Please feel free to submit issues or pull requests. Before submitting a pull request, please ensure that your code follows the existing style conventions and that you update any relevant documentation.

---

©  2024 GitHub, Inc.

