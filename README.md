# Prueba tecnica

En esta prueba técnica se realiza el consumo de dos URLs.

- https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json para obtener el listado de los 100 podcasts más populares

- https://itunes.apple.com/lookup?id=934552872&media=podcast&entity=podcastEpisode&limit=20 para obtener 20 episodios de un podcast segun su Id.

La prueba tecnica cuenta con 3 vistas

La primera "/" en la que se genera un listado de los 100 podcasts y puedes hacer una búsqueda a través del input, al hacer click sobre una Card de un podcast nos redirecciona a la segunda vista.

La segunda "/podcast/{podcastId}" en la cual se ve una barra lateral con los detalles del podcast y a la derecha un panel con los episodios del podcast en los que si damos click nos redirecciona a la tercera vista

y por último la tercera "/podcast/{podcastId}/episode/{episodeId}" en la que se muestra la misma bara lateral que en la vista anterior solo que a la derecha tenemos un panel que nos muestra los detalles de un episodio en concreto con un reproductor de audio para reproducir el episodio.

## Instalacion

Para poder instalar y testear esta prueba técnica en tu ordenador debes hacer un git clone de este repositorio para luego desde la terminal ejecutar los siguientes comandos.

- Para instalar las dependencias

```bash
  npm i
```

- Para inicializar el programa en modo developer

```bash
  npm run dev
```

## Autor

- [@migueldgq](https://github.com/Migueldgq)

## 🔗 Links

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/migueldgarciaq/)
