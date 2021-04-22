# Exercice 2, 20210312

## Décrivez ce qu'est la programmation réactivité
Émission de données depuis une/plusieurs sources (producteurs) à destination d’éléments (consommateurs).

Le traitement des données se fait via un flux: les données (valeur, erreur, signal de fin) arrivent de manière ordonnée dans le temps.

C'est un paradigme utile pour faire du temps réel et de l'asychrone (simulation, intelligence artificielle dans un jeu, etc.)

_Exemple_

```javascript
let a = 1, b = 2, c = a + b;
let b = 9;
console.log(c);
// En programmation impérative: 3
// En programmation réactive: 10
```

## Comment l'utiliser en javascript ? Quelles alternatives ?

On peut en faire via l'utilisation de Promesse (asynchrone), mais le plus simple est d'utiliser des bibilothèques comme RxJS, Bacon.js, Kefir, … Ou des frameworks: Svelte, react, observable, Vuejs