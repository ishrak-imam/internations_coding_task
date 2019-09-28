
/**
 * Each modules can have number of selectors which will be used to access data from
 * redux store.
 *
 * Later when the application scales up selectors can be converted into memoized
 * selectors easily if all kept in one place.
 */

export const getGroups = state => {
  return state.groups
}
