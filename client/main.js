import angular from 'angular';
import angularMeteor from 'angular-meteor';
import '../imports/api/tasks.js';
import '../imports/startup/accounts-config.js';
import todosList from '../imports/components/todosList/todosList';


angular.module('simple-todos', [
    angularMeteor,
  todosList.name,
  'accounts.ui'
]);