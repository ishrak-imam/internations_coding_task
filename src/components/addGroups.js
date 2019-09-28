import React, { Component } from 'react'

import { withStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import TextField from '@material-ui/core/TextField'
import Submit from './submit'

const styles = {
  addGroup: {
    marginTop: 10,
    display: 'flex',
    flexDirection: 'column',
    height: 200,
    alignItems: 'center'
  },
  input: {
    height: 40,
    width: 200
  }
}

class AddGroups extends Component {
  constructor () {
    super()

    this.state = {
      isReady: false,
      groupName: ''
    }

    this._handleChange = this._handleChange.bind(this)
    this._handleSubmit = this._handleSubmit.bind(this)
    this._checkIsReady = this._checkIsReady.bind(this)
    this._clearForm = this._clearForm.bind(this)
  }

  _checkIsReady () {
    const { groupName } = this.state
    this.setState({ isReady: !!groupName })
  }

  _handleChange (event) {
    this.setState({ groupName: event.target.value }, this._checkIsReady)
  }

  _handleSubmit (event) {
    event.preventDefault()
    const { isReady, groupName } = this.state
    if (isReady) {
      console.log(groupName)
      this._clearForm()
    }
  }

  _clearForm () {
    this.setState({ groupName: '', isReady: false })
  }

  render () {
    const { classes } = this.props

    const { groupName, isReady } = this.state

    return (
      <Box className={classes.addGroup}>
        <form onSubmit={this._handleSubmit}>
          <TextField
            id='group-name'
            label='Group Name'
            value={groupName}
            onChange={this._handleChange}
            margin='normal'
            variant='outlined'
            InputProps={{
              className: classes.input
            }}
            InputLabelProps={{
              shrink: true
            }}
          />

          <Submit disabled={!isReady} onSubmit={this._handleSubmit} />
        </form>
      </Box>
    )
  }
}

export default withStyles(styles)(AddGroups)
