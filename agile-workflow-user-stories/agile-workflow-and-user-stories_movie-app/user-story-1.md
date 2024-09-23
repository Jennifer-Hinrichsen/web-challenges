# Title

- We want to display a list of vertically arranged movies with their associated titles shown beneath each movie image. If the site is unavailable, we need to display a message indicating that the connection failed and instructing the user to try again later.

Additionally, the user should be able to click on the "Watchlist" and "Home" navigation links located at the bottom of the webpage.

## Value Proposition

**As a** `<Role>` <br>
**I want to** `<Need>` <br>
**so that** `<Purpose>` <br>

As a user, I want to scroll through the list of movies and see the title and rating for each movie. I also want a navigation bar where I can access "Home" and "Watchlist.

## Description

![wireframe](./assets/scribble-movie-list.png)

## Acceptance Criteria

- All movies and their titles are displayed in the list.
- The list is scrollable
- A headline is shown above the movie list.
  -The rating information is displayed above the movie images (as seen in the provided wireframe).
  -The relevant information, including titles and images, is retrieved and displayed for each movie.

## Tasks

-create feature-branch
-set up React component for each movie card

- Add an h1 element above the movie list.
  -Create a list for the movies.
  -Use img tags for the movie images.
  -Use p tags for the movie titles.
  -Ensure the rating information is displayed above each movie image.
  -Add sticky navigation for "Home" and "Watchlist."
  -Fetch movie data (titles, images, ratings) from an external API or database.
  -Handle errors when the data fetch fails, displaying an error message to the user.
