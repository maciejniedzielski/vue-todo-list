import Vue from 'vue';
import Vuex from 'vuex';

import { STATUS_ENUM } from '../consts';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    tasks: [
      {
        name: 'Learn new view library',
        status: STATUS_ENUM.DONE,
        priority: 'low'
      },
      {
        name: 'Read some docs',
        status: STATUS_ENUM.DONE,
        priority: 'medium'
      },
      {
        name: 'Start coding',
        status: STATUS_ENUM.ACTIVE,
        priority: 'high'
      },
      {
        name: `Read docs again when you dont know sth blah blah blah blah blah blah blah blah blah`,
        status: STATUS_ENUM.ACTIVE,
        priority: 'medium'
      },
      {
        name: 'Continue coding',
        status: STATUS_ENUM.DONE,
        priority: 'medium'
      },
      {
        name: 'Do some commits',
        status: STATUS_ENUM.ACTIVE,
        priority: 'low'
      },
      {
        name: 'Have fun!',
        status: STATUS_ENUM.ACTIVE,
        priority: 'low'
      },
    ]
  },
  getters: {
    getTasks: state => state.tasks,
    tasksCount: state => state.tasks.length
  }
});