# Watchlist

## Value Proposition

**As a** User <br>
**I want to** mark a movie to put it on a watchlist <br>
**so that** I have an overview of my favorised movies. <br>

## Description

![wireframe](./assets/scribble-watchlist.png)

## Acceptance Criteria

- On the overview page a fixed navigation is shown at the bottom and the navigation “Home” is marked.
- On click at the navigationpoint “Watchlist” you will be redirected to the Watchlist Page.
- Each movie detail page has a button to add it to the watchlist. On this site there is no navigation shown.
- If there is no movie in the watchlist, show an information to add one.
- While loading the Watchlist Page show “Loading”.
- If an error occurs show “Unable to load movie details, please try again later”.

## Tasks

- Create Featurebranch:
  Create a new Featurebranch.
- Setup Project:
  - Create a new React component for the Watchlist Page.
  - Implement a Navigation Component.
  - Display the Navigation Component on Overview Page and Watchlist Page with correct marked state.
  - Add handleFavorite function on the Watchlist Page.
  - Create button for a state for marked movies on the Detail Page.
  - Filter the Movie Cards and show only marked movies on the Watchlist Page.
  - If no movies are marked or in laoding state, execute try condition.
  - If no movies are delivered from the API, execute catch condition.
- Implement Layout:
  Style the detailpage on basis of the wireframe.
