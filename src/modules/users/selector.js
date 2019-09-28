
/**
 * Each modules can have number of selectors which will be used to access data from
 * redux store.
 *
 * Later when the application scales up selectors can be converted into memoized
 * selectors easily if all kept in one place.
 */

export const getUsers = state => {
  return state.users
}

export const getGroupNamesByUser = (groups, user) => {
  const { data } = groups
  const userGroups = user.groups

  return userGroups.map(group => {
    return data[group].name
  })
}
