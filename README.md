# Frontend Boilerplate with Webpack, ES6, SCSS, autoprefixer

Also with [tree shaking](https://webpack.js.org/guides/tree-shaking/), [autoprefixer](https://github.com/postcss/autoprefixer), [filename hashing](https://github.com/webpack-contrib/mini-css-extract-plugin#long-term-caching), [source maps](https://webpack.js.org/configuration/devtool/), [babel](https://babeljs.io/) (for ES6) and [automatic filled in filenames](https://github.com/jantimon/html-webpack-plugin) of the `css` and `js`-files in your _HTML_-page.

## How to run?

Clone this repo to a `boilerplate`-folder with the following command (so you don't get this long directory name)

```
git clone https://github.com/adriaanvanrossum/frontend-boilerplate-webpack-es6-scss-autoprefixer.git boilerplate && cd "$_"
```

The install the modules with `npm install` && run the code with `npm start`!

When you are done and want to compile the results to `dist`, you type

```
npm run build
```

## Webpack is a Bitch to Setup
It is, but I recommend going through their guides, because they are very good at the moment. Go to [webpack.js.org/guides/getting-started](https://webpack.js.org/guides/getting-started) and browse through the sidebar from top to bottom and you will learn a lot! It's worth your time.

## Philosophy of this Boilerplate
This packages does not everything for you, but it is a strong basis for when you want to use ES6 and SCSS. It adds a few things that are used most of the times, like [autoprefixer](https://github.com/postcss/autoprefixer) and [filename hashing](https://github.com/webpack-contrib/mini-css-extract-plugin#long-term-caching). But not much more than that.

The files in the `src`-directory are super simple and just for demonstration purposes. [Take a look!](/src)

## [Travis Deploy to GitHub Pages](https://docs.travis-ci.com/user/deployment/pages/)
If you use GitHub Pages to deploy your frontend but you don't want to commit your `dist`-directory every time, you can use [Travis](https://docs.travis-ci.com/user/deployment/pages/) (see config in `.travis.yml`) to push your compiled code (it runs `npm run build`) to `gh-pages`. You can easily add more commands and scripts to Travis which will run before or after your deploy like pruning your cache for example.

## Recourses
Most of this comes from two recourses. The first [Webpack Guides](https://webpack.js.org/guides), again, they are really good and you should check them out.

Next is this awesome guide _[A tale of Webpack 4 and how to finally configure it in the right way](https://hackernoon.com/a-tale-of-webpack-4-and-how-to-finally-configure-it-in-the-right-way-4e94c8e7e5c1)_ writen by Margarita Obraztsova ([instagram](https://www.instagram.com/riittagirl), [twitter](https://twitter.com/riittagirl)) on [hackernoon.com](https://hackernoon.com/a-tale-of-webpack-4-and-how-to-finally-configure-it-in-the-right-way-4e94c8e7e5c1)

## Contribute
Can you find things that could be better here? Just create a PR and I will merge it.
