
import React, { Component } from 'react'

import Header from '../../components/header'
import AddGroup from '../../components/addGroups'
import GroupList from '../../components/list'
import GroupItem from '../../components/listItem'

import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

const styles = {
  paper: {
    height: 700,
    width: 400
  }
}

class Groups extends Component {
  render () {
    const { classes } = this.props
    return (
      <Grid item>
        <Paper className={classes.paper}>
          <Header text='Groups' />
          <AddGroup />
          <GroupList Item={GroupItem} />
        </Paper>
      </Grid>
    )
  }
}

export default withStyles(styles)(Groups)
