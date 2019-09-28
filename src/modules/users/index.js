
import React, { Component } from 'react'

import Header from '../../components/header'
import AddUsers from '../../components/addUsers'
import UserList from '../../components/list'
import UserItem from '../../components/listItem'

import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

const styles = {
  paper: {
    height: 700,
    width: 400
  }
}

class Users extends Component {
  render () {
    const { classes } = this.props
    return (
      <Grid item>
        <Paper className={classes.paper}>
          <Header text='Users' />
          <AddUsers />
          {/* <UserList Item={UserItem} /> */}
        </Paper>
      </Grid>
    )
  }
}

export default withStyles(styles)(Users)
