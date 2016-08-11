import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { Tasks } from '../../api/tasks.js';

// Templates
import template from './todosList.html';
class TodosListCtrl {
  constructor($scope) {
    $scope.viewModel(this);
 
    this.helpers({
      tasks() {
        return Tasks.find({}, {
          sort: {
            createdAt: -1
          }
        });
      },

    });
  }
  // Add Task Button
  addTask(newTask) {
    // Insert a task into the collection
    Tasks.insert({
      text: newTask,
      createdAt: new Date()
    });

    // Clear form
    this.newTask = '';
  }
}
 
export default angular.module('todosList', [
  angularMeteor
])
  .component('todosList', {
    templateUrl: 'imports/components/todosList/todosList.html',
    controller: ['$scope', TodosListCtrl]
  });