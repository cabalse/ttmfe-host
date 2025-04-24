# ttmfe-host

Welcome!

This is the Host application of the demo I ran for my tech talk about Micro Frontends. This is the main application that utilises five other repositories to demonstrate how a Federated Micro Frontend solution can be implemented. Not the only way, but one way.

To get this working, you will need to clone the following repos:

https://github.com/cabalse/ttmfe-button
https://github.com/cabalse/ttmfe-subscribe-form
https://github.com/cabalse/ttmfe-bff
https://github.com/cabalse/ttmfe-subscribers
https://github.com/cabalse/ttmfe-component-lib

BUT!!! You can, if you only want to check out Module Federation, use this and the ttmfe-button repo and use the "host-app-simpler.jsx" instead of "host-app.jsx", see "Simpler Demo" below

## The Component Library

This is a stand-alone demo component library to display a way to address the Coherent Application problem that can occur in a Micro Frontend architecture.
The library is hosted on GitHub as an NPM Package, which is a neat feature if you don't want to host it through NPM itself.
BUT!!! There is a small but significant "problem" and that is that all (at the time of writing) GitHub Packages need authenticated access through a token to be used. This token and the Package need to be specified through an .npmrc file at the top level of the project (the same level as package.json and vite.config.js). The .npmrc should look like this:

> @cabalse:registry=https://npm.pkg.github.com/  
> //npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN

NOTE!!!!
Apparently, GitHub won't let you share tokens in a repo. Good feature :) Unless you want to. Need to check this out. Contact me for a token if you need one for the demo. I will remove the dependency on the Component Lib as fast as possible.

The Component Libraries are used by the following applications: ttmfe-button, ttmfe-subscribe-form, ttmfe-bff, and ttmfe-subscribers.
So these need the above .npmrc file in order to be able to run npm i after cloning.

## Simpler Demo

To check out Module Federation in its simplest form, clone this repo and the "ttmfe-button" repo. You need to substitute "host-app.jsx" with "host-app-simpler.jsx" and use that component in "main.jsx" instead.

## How to start the demo

### Setup

- Clone each repo, add .npmrc files if necessary, and run "npm i"
- Start the BFF (Backend For Frontend) application (npm run dev). Both ttmfe-subscribe-form and ttmfe-subscribers use this.
- Then build each Remote Application (ttmfe-button, ttmfe-subscribe-form, and ttmfe-subscribers) with "npm run build".
- Start each Remote "npm run serve"
- Start the host (npm run dev)
- Open a web browser on the local address where the host was started and enjoy.

## Example

This Demo followed the tutorial on YouTube at https://www.youtube.com/watch?v=t-nchkL9yIg&t=1267s.

# Questions?

Look me up on LinkedIn and fire away
https://www.linkedin.com/in/j%C3%B6rgen-bengtsson-7229105/
