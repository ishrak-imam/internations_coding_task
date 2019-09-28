
import React, { Component } from 'react'

import Header from '../../components/header'
import AddGroup from './addGroups'
import GroupList from '../../components/list'
import GroupItem from '../../components/listItem'

import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

import { connect } from 'react-redux'
import { getGroups } from './selector'
import { deleteGroup } from './action'

const styles = {
  paper: {
    height: 700,
    width: 400
  }
}

class Groups extends Component {
  constructor (props) {
    super(props)
    this._deleteGroup = this._deleteGroup.bind(this)
  }

  _deleteGroup (group) {
    this.props.deleteGroup(group)
  }

  render () {
    const { classes, groups: { byId, data } } = this.props
    return (
      <Grid item>
        <Paper className={classes.paper}>
          <Header text='Groups' />
          <AddGroup />
          <GroupList
            onDelete={this._deleteGroup}
            data={data}
            list={byId}
            Item={GroupItem}
            type='group'
          />
        </Paper>
      </Grid>
    )
  }
}

const stateToProps = state => ({
  groups: getGroups(state)
})

const dispatchToProps = dispatch => ({
  deleteGroup: id => dispatch(deleteGroup(id))
})

export default connect(stateToProps, dispatchToProps)(withStyles(styles)(Groups))
