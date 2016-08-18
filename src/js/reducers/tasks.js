/**
 * Another clever approach of writing reducers:
 *
 * export default function(state = initialState, action) {
 *   const actions = {
 *      [ACTION_TYPE]: () => [action.payload.data, ...state]
 *   };
 *
 *   return (_.isFunction(actions[action.type])) ? actions[action.type]() : state
 * }
 */

import * as types from '../constants/ActionTypes';
import { assign } from 'lodash';

// task 0 is considered the top-level task, ultimate ancestor of all
const EVE = 0

const initialState = {
  1: {
    parent: EVE,
    children: [2,3],
    data: {
      label: "Play",
      detail: "Woo! Fun!"
    }
  },
  2: {
    parent: 1,
    children: [],
    data: {
      label: "Video Games",
      detail: "**Pew pew pew!**"
    }
  },
  3: {
    parent: 1,
    children: [],
    data: {
      label: "Dress-ups",
      detail: "Wear *all* the clothes"
    }
  },
  4: {
    parent: EVE,
    children: [],
    data: {
      label: "Work",
      detail: "Soooo boring"
    }
  }
};

export default function (state = initialState, action) {
  const actions = {
    // this is just an example
    // [types.CREATE_TASK]: () => [action.payload.data, ...state]
    // really I would want to do something more sophisticated with this,
    // in this case create the child under a given parent and add it to
    // the parent's children list in the specified position
  }

  // why not call actions[action.type] with the data/payload as the argument?
  // then you could write an actual function to handle it easily
  return (_.isFunction(actions[action.type])) ? actions[action.type]() : state
}
