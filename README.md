## Description

This is a clone of the Airbnb experiences page.

# Preview:

// add image here.

- The `public` directory contains the html page
- The `src` directory contains the images and the components folder and all other js and css files.
- The project has 3 components:
  - `NavBar.js`: inlcudes the navigation bar and displays the airbnb logo
  - `Hero.js`: displays the photo grid
  - `Cards.js`: conditionally renders the 'ONLINE'/'SOLD OUT' tag and image on the page with CSS Styles
- `Data.js` contains the data related to the card components (additional data to be displayed on the webpage can be added in this file)
- `App.js` then collates `Navbar.js`, `Hero.js` & `Cards.js` together and exports to `index.js`
- `Index.js` renders the page.

## Installation

The dependencies required are all included in the `package.json` file. They will all be installed by running the `npm install` command.

## Set-up

To start the project run `npm start`.

## Technologies

This project was bootstrapped with create-react-app. `npx create-react-app`.

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://cdn.icon-icons.com/icons2/2415/PNG/512/react_original_wordmark_logo_icon_146375.png">
  <source media="(prefers-color-scheme: light)" srcset="https://cdn.icon-icons.com/icons2/2415/PNG/512/react_original_wordmark_logo_icon_146375.png">
  <img width="30px" alt="Shows a logo of c-sharp" src="https://cdn.icon-icons.com/icons2/2415/PNG/512/react_original_wordmark_logo_icon_146375.png">
</picture>
