import React, { Component } from 'react'

import { withStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import TextField from '@material-ui/core/TextField'
import Submit from '../../components/submit'
import { guid } from '../../utils/helpers'

import { connect } from 'react-redux'
import { addGroup } from './action'

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
      name: ''
    }

    this._handleChange = this._handleChange.bind(this)
    this._handleSubmit = this._handleSubmit.bind(this)
    this._checkIsReady = this._checkIsReady.bind(this)
    this._clearForm = this._clearForm.bind(this)
  }

  _checkIsReady () {
    const { name } = this.state
    this.setState({ isReady: !!name })
  }

  _handleChange (event) {
    this.setState({ name: event.target.value }, this._checkIsReady)
  }

  _handleSubmit (event) {
    event.preventDefault()
    const { isReady, name } = this.state
    if (isReady) {
      const id = guid()
      this.props.addGroup({
        id,
        group: { id, name, users: [] }
      })
      this._clearForm()
    }
  }

  _clearForm () {
    this.setState({ name: '', isReady: false })
  }

  render () {
    const { classes } = this.props

    const { name, isReady } = this.state

    return (
      <Box className={classes.addGroup}>
        <form onSubmit={this._handleSubmit}>
          <TextField
            id='group-name'
            label='Group Name'
            value={name}
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

const dispatchToProps = dispatch => ({
  addGroup: group => dispatch(addGroup(group))
})

export default connect(null, dispatchToProps)(withStyles(styles)(AddGroups))
