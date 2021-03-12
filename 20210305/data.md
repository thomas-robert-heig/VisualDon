# Préparation jeu de données
_[https://opendata.swiss/fr/dataset/volksinitiative-ja-zum-verhullungsverbot/resource/8f4c1f06-30c6-4cd2-a12b-87736b99143e]()_

**Description des données:**<br>
Résultats finaux du vote fédéral "Initiative populaire «Oui à l’interdiction de se dissimuler le visage»", 7 mars 2021

**Organisation:**
[Chancellerie d’État des Grisons](https://opendata.swiss/fr/organization/standeskanzlei-graubuenden)

**Commande pour récupérer les données:**
```
curl https://abstimmungen.gr.ch/vote/volksinitiative-ja-zum-verhuellungsverbot/data-json > data.json
```

**Préparation:**
Pour chaque données, on veut récupérer:
* Le nom de la ville
* Le pourcentage d'absentention des votations

```javascript

```