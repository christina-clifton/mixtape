# Mixtape
Simple playlist app I made to practice interfacing with an API. I learned how to:
* set up access tokens
* use API endpoints
* write GET & POST fetch requests
* parse JSON responses into JS objects
* chain fetch requests

## Table of Contents
* [General info](##general-info)
* [Technologies](##technologies)
* [Setup](##setup)
* [Screenshots](##screenshots)
* [Status](##status)
* [Room for Improvement](##room-for-improvement)
* [Acknowledgements](##acknowledgements)
* [Contact](##contact)

## General info
Users can search [Spotify](https://www.spotify.com/)'s database for an artist, song or album. They can then build a new playlist from the search results. When they've built their playlist, users can name it and save it to their Spotify profile.

## Technologies
Project is created with React (version 18.2.0).

## Setup
To run this project, install it locally using npm:
```
$ cd ../mixtape
$ npm install
$ npm start
```

## Screenshots
*Main*
![Image](/src/assets/Screenshot_home.png)

*Search Results*
![Image](/src/assets/Screenshot_SearchResults.png)

*New Playlist*
![Image](/src/assets/Screenshot_Playlist.png)

*Published to Spotify*
![Image](/src/assets/Screenshot_Spotify.png)

## Status
Project is: complete. I set out to create a playlist app and have built one. I may add additional functionality in the future (include podcasts & audiobooks in search results) if there's a compelling reason to do so.

## Room for Improvement
* If a user's access token has expired and they attempt to submit a new search, the page will refresh to update their token and their search term will be forgotten. User will need to enter the search term again.

## Acknowledgements
* This project is part of [Codecademy's front-end developer course](https://www.codecademy.com/learn/paths/front-end-engineer-career-path).

## Contact
Created by [@christina-clifton](https://github.com/christina-clifton)



