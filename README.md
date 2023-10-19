# Anisource

Anisource is an engine where you can search info for any anime, anime character or manga. It is made with JikanAPI.

![Anisource_preview](http://Anisource/public/assets/show.jpg)

## Prerequisites

Before running this project, make sure you have the following installed:

* Node.js: Download and Install Node.js

## Installation

Follow these steps to setup the application:

1. Open the terminal and Clone the repository to your local machine:

    ```bash
    https://github.com/KoiByteDev/Anisource.git
    ```

2. Navigate to the project directory:

    ```bash
    cd Anisource
    ```

3. Initialize npm:

   ```bash
   npm init
   ```

4. Install additional packages:

   ```bash
   npm install axios ejs express
   ```

## Get Started

To run Anisource, perform the following actions:

1. Open a new terminal window.

2. Start the application using nodemon:

   ```bash
   nodemon index.js
   ```
7. Open a web browser and navigate to [localhost:3000](http://localhost:3000) to access the application.

## Usage

* Click on the search bar and type the title / name of any anime / character of your interest.

* Hover over any of the cards to see more information.

* On the menu sidebar, click on any of the available routes to filter your search.

* Click on the slider on the top-left on the menu sidebar to toggle dark/light modes.

## Project Structure

* `index.js:` This is the server file. It sets up the routes and makes requests to the API to render the information on the site.

* `public:` This directory contains static files such as CSS stylesheets.
    * `styles.css` This file contains the CSS stylesheets for the site.

* `views:` This directory contains the EJS templates used to render the HTML pages.

    * `anime.ejs:` Template for the /anime route. Filters to only show animes.
     
    * `characters.ejs:` Template for the /characters route. Filters to only show characters.

    * `manga.ejs:` Template for the /manga route. Filters to only show manga.

    * `partials:` Directory for repetitive templates.
        * `header.ejs:` The header template that is included in other EJS files.

        * `footer.ejs:` The footer template that is included in other EJS files.

## Contributing
Contributions are welcome! 

If you have any suggestions or improvements, feel free to create an issue or submit a pull request.

## About Me

* I'm an aspiring full-stack developer and Software Development student at the Technological University of Panama.


### Contact Details
* Email: KoiByteDev@gmail.com