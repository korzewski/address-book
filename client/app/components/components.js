import angular from 'angular';
import HomePage from './homePage/homePage';

let componentModule = angular.module('app.components', [
  HomePage.name
]);

export default componentModule;
