import Vue from 'vue'
import Vuex from 'vuex'

import { STATUS_ENUM } from '../consts'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    tasks: [
      {
        name: 'Learn new view library',
        status: STATUS_ENUM.DONE,
        priority: {
          id: 3,
          name: 'low',
          active: true
        }
      },
      {
        name: 'Start coding',
        status: STATUS_ENUM.DONE,
        priority: {
          id: 2,
          name: 'medium',
          active: true
        }
      },
      {
        name: 'Learn new view library',
        status: STATUS_ENUM.ACTIVE,
        priority: {
          id: 1,
          name: 'high',
          active: true
        }
      },
      {
        name: `Read docs again when you dont know sth blah blah blah blah blah blah blah blah blah`,
        status: STATUS_ENUM.ACTIVE,
        priority: {
          id: 2,
          name: 'medium',
          active: true
        }
      },
      {
        name: 'Continue coding',
        status: STATUS_ENUM.DONE,
        priority: {
          id: 2,
          name: 'medium',
          active: true
        }
      },
      {
        name: 'Do some commits',
        status: STATUS_ENUM.ACTIVE,
        priority: {
          id: 3,
          name: 'low',
          active: true
        }
      },
      {
        name: 'Have fun!',
        status: STATUS_ENUM.ACTIVE,
        priority: {
          id: 3,
          name: 'low',
          active: true
        }
      },
      {
        name: 'Read some docs',
        status: STATUS_ENUM.ACTIVE,
        priority: {
          id: 1,
          name: 'high',
          active: true
        }
      }
    ],
    priorityTypes: [
      {
        id: 1,
        name: 'high',
        active: true
      },
      {
        id: 2,
        name: 'medium',
        active: true
      },
      {
        id: 3,
        name: 'low',
        active: true
      }
    ]
  },
  getters: {
    getFilteredTasks: state => {
      const activeFilters = state.priorityTypes.filter(priorityType => priorityType.active).map(priorityType => priorityType.name)
      return state.tasks.filter(task => !!activeFilters.includes(task.priority.name)).sort((a, b) => a.priority.id - b.priority.id)
    },
    tasksCount: state => state.tasks.length,
    priorityTypes: state => state.priorityTypes
  },
  mutations: {
    addTask (state, task) {
      task.priority = state.priorityTypes.find(priority => priority.name === task.priority)
      console.log(task)
      state.tasks.push(task)
    }
  }
})
