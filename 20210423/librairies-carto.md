# Exercice 3 – 20210423

## Pourquoi doit-on projeter des données cartographiques?

Permettre la représentation de données "sphériques" (éléments de la Terre) sur une surface plate (image).

## Qu'est ce qu'Open street map?

C'est un projet open source qui propose un système de cartographie. On peut le comparer à l'alternative libre de droit de Google Map

## Quelles fonctions D3 sont spécifiques à la cartographie?

`geoMercator()`
Initialise une projection 

`geoPath()`
Initialisation d'un élément `path`

`geoEquirectangular()`
Projection réctangulaire

## À quoi sert le format topojson? En quoi est-il différent du geojson?

Topojson est une extension de geojson qui encode la topoplogie. Son avantage premier est la taille des données.

## À quoi sert `turf`? Décrivez ce que font trois fonctions de cette libraire

Série de function comme le fait d3 mais orienté données géospatiales.

`area()`
Calcul d'une surface en mètres carré.

`destination()`
Permet d'établir la destination entre deux points en spécifiant la mesure (degré, kilomètres, etc)


`square()`
Place un carré avec les valeurs (mesures) spécifiées