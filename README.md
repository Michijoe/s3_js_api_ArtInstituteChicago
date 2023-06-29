[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/LD2-b-lE)
# Épreuve finale

Énoncé : cours 19 \
Remise : cours 20 \
Pondération : 30%

Pour l’épreuve finale, il vous faut interroger l’[API du Art Institute of Chicago](https://api.artic.edu/docs/#introduction) afin de récupérer et d’afficher un jeu de données qui contient des informations sur diverses œuvres d’art.

## Consignes

- Lors du chargement, le site Web affiche 10 œuvres d’art. Chaque œuvres contient une **image** (voir la [documentation](https://api.artic.edu/docs/#iiif-image-api)), le **titre** de l’œuvre, ses **dimensions**, et le **nom de l’artiste**. Si une de ses informations n’est pas disponible, l’interface ne l’affiche pas.
- L’affichage est **paginé**, c’est-à-dire que des boutons permettent d’afficher d’autres pages, chacune contenant 10 œuvres d’art différentes (voir la [documentation](https://api.artic.edu/docs/#pagination)). Si le site Web est rafraichie, on reste sur la même page.
- Il est possible d’effectuer une **recherche** selon le titre des œuvres d’art présentement affichées. Le résultat de la recherche s’affiche immédiatement, et il est possible d’annuler la recherche sans avoir à rafraichir la page.
- Le site Web est conçu en suivant un patron de conception **orientée object**.

## Critère d’évaluation

### Respect des consignes `5`

- [ ] Les consignes liées aux fonctionnalités sont respectées.

### Propreté et lisibilité du code `10`

- [ ] Le code est propre ; il contient aucune variables ou fonctions inutilisées.
- [ ] L’utilisation des espaces et des indentations est ordonnée et cohérente.
- [ ] Les longues lignes (plus de ~ 80 caractères) sont divisées.
- [ ] L’espace blanc est utilisé pour regrouper visuellement la logique.
- [ ] Le nom des variables et des fonctions est cohérent et descriptif.
- [ ] Les fonctions et leurs paramètres sont bien documenté avec [JSDoc](https://jsdoc.app/index.html).	
- [ ] Les lignes denses ou complexes sont brièvement expliquées.
- [ ] Les commentaires ne réitèrent pas ce que le code dit déjà.

### Conception du programme `15`

- [ ] L’exécution de l’affichage dynamique est adéquat.
- [ ] Les réponses asynchrones et les erreurs sont bien traitées.
- [ ] Le programme est décomposé en morceaux logiques qui peuvent être facilement composés.
- [ ] L’interface des fonctions est propre et bien encapsulée.
- [ ] Les algorithmes appropriés sont utilisés, et codés proprement.
- [ ] Le code ne se répète pas inutilement.
- [ ] Le balisage HTML est syntaxiquement correct.

