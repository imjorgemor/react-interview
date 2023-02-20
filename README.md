# React interview

> React Starter Boilerplate with React Fast Refresh and Webpack 5

## Background and situationship

**Find a background and situation in my last post in Medium. It is really interesting how fast-refresh has evolved during the years.** Visit my [blog entry](https://medium.com/@imgeorgemor/if-you-know-what-fast-refresh-is-this-is-for-you-otherwise-keep-scrolling-b5dba86d2f48) where I go from the begining of hot reload to the current fast refresh.

## Features

- React 18
- React Fast Refresh
- Webpack 5
- Typescript support (check Typescript branch)
- Node env supported
- basic eslint configuration for react (also with typescript support)

### Getting started

Install dependencies

```
$ npm install
```

Runs the app in the development mode

```
$ npm start
```

### Available scripts

```
$ npm run build
```

Will create a `build` directory containing your compiled code.

```
$ npx servor build
```
Recommended to launch locally a server with the build modules.# react-interview


Crea una aplicación para buscar películas

API a usar: - https://www.omdbapi.com/ Consigue la API Key en la propia página web registrando tu email.
8c6b722e

Requerimientos:

✅ Necesita mostrar un input para buscar la película y un botón para buscar.

✅ Lista las películas y muestra el título, año y poster.

✅ Que el formulario funcione

✅ Haz que las películas se muestren en un grid responsive.

✅ Hacer el fetching de datos a la API

Primera iteración:

✅ Evitar que se haga la misma búsqueda dos veces seguidas.

✅ Haz que la búsqueda se haga automáticamente al escribir.

✅ Evita que se haga la búsqueda continuamente al escribir (debounce)