import React from 'react'
import Grid from '@material-ui/core/Grid'

import Users from './modules/users'
import Groups from './modules/groups'

export default class App extends React.Component {
  render () {
    return (
      <Grid container justify='center' spacing={3}>
        <Users />
        <Groups />
      </Grid>
    )
  }
}
