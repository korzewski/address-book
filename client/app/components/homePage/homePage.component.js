import template from './homePage.html';
import controller from './homePage.controller';
import './homePage.scss';

let homePageComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default homePageComponent;
