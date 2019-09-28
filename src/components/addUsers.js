import React, { Component } from 'react'

import { withStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import TextField from '@material-ui/core/TextField'
import Submit from './submit'

import MultiSelect from '@khanacademy/react-multi-select'

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

const options = [
  { label: 'One', value: 1 },
  { label: 'Two', value: 2 },
  { label: 'Three', value: 3 }
]

class AddUsers extends Component {
  constructor (props) {
    super()
    this.state = {
      selected: []
    }
  }

  render () {
    const { classes } = this.props
    return (
      <Box className={classes.addUser}>
        <TextField
          id='user-name'
          label='User Name'
          value=''
          onChange={() => {}}
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
            options={options}
            selected={this.state.selected}
            onSelectedChanged={selected => this.setState({ selected })}
          />
        </Box>

        <Submit />
      </Box>
    )
  }
}

export default withStyles(styles)(AddUsers)
