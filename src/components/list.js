
import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import List from '@material-ui/core/List'

const styles = {
  list: {
    width: 400,
    maxHeight: 500,
    overflow: 'auto',
    marginTop: 10
  }
}

class AppList extends Component {
  render () {
    const { classes, Item } = this.props
    return (
      <Box className={classes.list}>
        <List>
          <Item />
          <Item />
          <Item />
          <Item />
        </List>
      </Box>
    )
  }
}

export default withStyles(styles)(AppList)
