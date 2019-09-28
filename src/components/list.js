
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
    const { classes, Item, list, data, type, onDelete } = this.props
    return (
      <Box className={classes.list}>
        <List>
          {
            list.map(item =>
              <Item key={item} item={data[item]} onDelete={onDelete} />
            )
          }
        </List>
      </Box>
    )
  }
}

export default withStyles(styles)(AppList)
