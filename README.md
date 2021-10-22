<p align="center"><img src="https://cdn.fusengine.ch/logo/Fusengine.svg" width="200"></p>

# LARAVEL REACT SANCTUM BOILERPLATE

Permet d avoir un starter pour créer une single app avec reactjs et laravel.

## Package utilisé

| php                                             | js                                                                                                           | html/css                             |
| ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------ | ------------------------------------ |
| [sanctum](https://laravel.com/docs/8.x/sanctum) | [reactjs,react-dom](https://reactjs.org/)                                                                    | bootstrap 5                          |
|                                                 | [history](https://github.com/ReactTraining/history#readme)                                                   | [animate.css](https://animate.style) |
|                                                 | [react icons](https://react-icons.github.io/react-icons/)                                                    |                                      |
|                                                 | [redux](http://redux.js.org)                                                                                 |                                      |
|                                                 | [react redux](https://react-redux.js.org)                                                                    |                                      |
|                                                 | [react-router-dom](https://github.com/remix-run/react-router/blob/main/docs/getting-started/installation.md) |                                      |
|                                                 | [reselect](https://github.com/reduxjs/reselect#readme)                                                       |                                      |
|                                                 | [uuid](https://github.com/uuidjs/uuid#readme)                                                                |

## API Laravel

- **app/Fusengine/Models:** permets de créer des traits pour les modèles.
- **app/Fusengine/Repositories:**  regroupe tous les interaction avec les models et les controller.
- **app/Fusengine/Helpers:** permettra de créer des helpers.
- **FusengineRepositoryServiceProvider:** permettra de mapper nos interfaces avec nos repository.

# ReactJS

- **resources/js/react/components:** permettra de créer des composants réutilisable.
- **resources/js/react/config:**   regroupe toutes les configurations au fonctionnement entre react et laravel.
- **resources/js/react/pages:**  regroupe tous les pages qui seront affiché.
- **resources/js/react/routes:**  permettra de router nos page.
- **resources/js/react/services:**  regroupera les divers services dont redux.
- **resources/js/react/stores:**  regroupes tous nos fichiers redux `actions, reducers, selectors`, pour interagir avec l'api laravel & react
