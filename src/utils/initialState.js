
/**
 * The total initial state of the application will be exposed from here.
 *
 * It is done in case the initial state of the application is needed somewhere
 * in the application
 */

import { GROUPS_INITIAL_STATE } from '../modules/groups/initialState'
import { USERS_INITIAL_STATE } from '../modules/users/initialState'

export const getInitialState = () => {
  return {
    groups: GROUPS_INITIAL_STATE,
    users: USERS_INITIAL_STATE
  }
}
