import React, { Component } from 'react'

import { withStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import TextField from '@material-ui/core/TextField'
import Submit from '../../components/submit'

import MultiSelect from '@khanacademy/react-multi-select'

import { connect } from 'react-redux'
import { addUser } from './action'

import { getGroups } from '../groups/selector'

import { guid } from '../../utils/helpers'

const styles = {
  addUser: {
    marginTop: 10,
    display: 'flex',
    flexDirection: 'column',
    height: 200,
    alignItems: 'center'
  },
  select: {
    width: 200,
    height: 45
  },
  input: {
    height: 40,
    width: 200
  }
}

class AddUsers extends Component {
  constructor (props) {
    super()
    this.state = {
      isReady: false,
      groups: [],
      name: ''
    }

    this._getOptions = this._getOptions.bind(this)
    this._handleChange = this._handleChange.bind(this)
    this._handleSubmit = this._handleSubmit.bind(this)
    this._checkIsReady = this._checkIsReady.bind(this)
    this._clearForm = this._clearForm.bind(this)
    this._onGroupSelect = this._onGroupSelect.bind(this)
  }

  _checkIsReady () {
    const { name, groups } = this.state
    this.setState({ isReady: !!name && groups.length })
  }

  _handleChange (event) {
    this.setState({ name: event.target.value }, this._checkIsReady)
  }

  _onGroupSelect (groups) {
    this.setState({ groups }, this._checkIsReady)
  }

  _handleSubmit (event) {
    event.preventDefault()
    const { isReady, name, groups } = this.state
    if (isReady) {
      const id = guid()
      this.props.addGroup({
        id,
        user: { id, name, groups }
      })
      this._clearForm()
    }
  }

  _clearForm () {
    this.setState({ name: '', groups: [], isReady: false })
  }

  _getOptions () {
    const { data } = this.props.groups
    return Object.values(data).map(item => {
      return {
        label: item.name,
        value: item.id
      }
    })
  }

  render () {
    const { classes } = this.props

    const { name, groups, isReady } = this.state

    return (
      <Box className={classes.addUser}>

        <form onSubmit={this._handleSubmit}>

          <TextField
            id='user-name'
            label='User Name'
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

          <Box className={classes.select}>
            <MultiSelect
              options={this._getOptions()}
              selected={groups}
              onSelectedChanged={this._onGroupSelect}
            />
          </Box>

          <Submit disabled={!isReady} onSubmit={this._handleSubmit} />

        </form>
      </Box>
    )
  }
}

const stateToProps = state => ({
  groups: getGroups(state)
})

const dispatchToProps = dispatch => ({
  addGroup: user => dispatch(addUser(user))
})

export default connect(stateToProps, dispatchToProps)(withStyles(styles)(AddUsers))
