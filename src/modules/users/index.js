
import React, { Component } from 'react'

import Header from '../../components/header'
import AddUsers from './addUsers'
import UserList from '../../components/list'
import UserItem from '../../components/listItem'

import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

import { connect } from 'react-redux'
import { getUsers } from './selector'
import { getGroups } from '../groups/selector'
import { deleteUser } from './action'

const styles = {
  paper: {
    height: 700,
    width: 400
  }
}

class Users extends Component {
  constructor (props) {
    super(props)

    this._deleteUser = this._deleteUser.bind(this)
  }

  _deleteUser (user) {
    this.props.deleteUser(user)
  }

  render () {
    const { classes, users: { byId, data }, groups } = this.props
    return (
      <Grid item>
        <Paper className={classes.paper}>
          <Header text='Users' />
          <AddUsers />
          <UserList
            onDelete={this._deleteUser}
            data={data}
            list={byId}
            Item={UserItem}
            type='user'
            groups={groups}
          />
        </Paper>
      </Grid>
    )
  }
}

const stateToProps = state => ({
  users: getUsers(state),
  groups: getGroups(state)
})

const dispatchToProps = dispatch => ({
  deleteUser: id => dispatch(deleteUser(id))
})

export default connect(stateToProps, dispatchToProps)(withStyles(styles)(Users))
