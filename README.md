# Getting Started with SHERLOCK-SSO

SHERLOCK-SSO is the SSO interface to get authenticated on every Sherlock web application.\
At this time, it does only support authentication via [ORCID](https://orcid.org/) with OAuth2 protocol.\
\
Once user is authenticated, his access_token to [sherlock-api](https://github.com/Amleth/sherlock-service) is stored in cookies. \
\
In case one of your apps is using SHERLOCK-SSO and is not sharing the same domain, you have to specify this new domain in `AUTHENTICATED_WEBSITES` (.env)\
\
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Run project

### `yarn install`

Install all dependencies.

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3001](http://localhost:3001) to view it in the browser.
