# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
 it contains webpack and all test scripts are already present.
# Implementation
    - cra
    - tailwind setup
    - header
    - routing of app
    - login/signup form
    - form Validation (useRef hook)
    - regex (for form validation)
    - autentication (firebase)
    - create signup user account
    - STORE (created redux store)
    - implemented signout
    - updated profile(by firebase)
    - header updated
    - fetch movies form TMDB API
    - bug fixed of signin 
    - implemented if user is logged in redirect to browse page and if not then to login page
    - all navigate has been moved to header component
    - in useeffect we have unsubscribe the onauthstatechange
    - created constant file to include hardcoded value
    - in index.js- we have react.strictmode this led to calling API twice (btw this occurs only in local and not in prod ready app).
    - regeister with TMDB api and created a app to get access token
    - get data from tmdb API (browse movies , now playing etc)
    - created custon hooks (movies)
    - update store with movies data (by movies slice)
    - fetch data for trailer video
    - update the store with trailer video data
    - embeded YT video (made autoplay nand mute)
    - tailwind classes added to maincontainer
# Features
- login/signup
    - form for login/signup
    - we use firebase
    - if authenticated redirect to browse page
- browse(only after authentication)
 - header
 - main movie
    - trailer in bg
    - title & description
    - movie suggestion
        - movie lists
        - vertically scrollable
- we add netfilx gpt page
    - serach bar
    - movie suggestion
