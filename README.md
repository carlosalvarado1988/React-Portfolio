# Personal Portfolio page

A simple SPA Portfolio to showcase demos, learnings and other information to clients.

## How to make updates to resume

1. Change the values in `src/components/home/resumeData.js` to suit your use-case.
2. Run `npm start` to spin the up the local dev server port 3000.(http://localhost:3000).
3. Make required changes in `src/components/home/resumeData.js` to suit your needs.

## TechStack and scalability

ReactJS Typescript and its config Prettier and its config React Router

## Using Vercel to host a live page.

You can visit the page at: https://react-portfolio-pi-rose.vercel.app/ and its connected to main branch the site is deployed in a hobby free account, vercel conneted to main branch in github any new
merge to main branch, will result in an update in the site.

In order to make this site work in vercel, package json states the following attribute:

> "homepage": "",

## Using Circleci for CI/CD.

The build process makes sure to run tests and run eslint before merging (https://app.circleci.com/pipelines/github/carlosalvarado1988/react-portfolio)

## Exploring with AWS deploy

In order to make a local build version work, package json states the following attribute:

> "homepage": "./",

navigate into the build folder and run a local server to avoid CORS erros, css, images and manifest are considered sources coming from different domain, and the browser would block them if you only
open the html file.

> python3 -m http.server 8000

currently hosted in S3 buckets.

the intention is to setup a custom domain: calvarado1988-porfolio.com so thats why the buckets were name under that domain

By default, the s3 generates the following url site: http://calvarado1988-portfolio.com.s3-website-us-east-1.amazonaws.com/

S3 bucket named: calvarado1988-porfolio.com contains all files from build folder S3 bucket named: www.calvarado1988-porfolio.com serves as a redirect reference to calvarado1988-porfolio.com in the
meantime (while buying a custom domain) - this redirect porfolio will redirect to the default url http://calvarado1988-portfolio.com.s3-website-us-east-1.amazonaws.com/

next step is to configure https to work with the default url for testing purposes.
