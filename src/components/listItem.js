
import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import DeleteIcon from '@material-ui/icons/Delete'

const styles = {
  listItem: {
    height: 50,
    backgroundColor: 'lightblue',
    marginBottom: 5
  }
}

class Item extends Component {
  constructor (props) {
    super(props)

    this._onDelete = this._onDelete.bind(this)
  }

  _onDelete (id) {
    return () => {
      this.props.onDelete(id)
    }
  }

  render () {
    const { classes, item } = this.props
    return (
      <ListItem className={classes.listItem}>
        <ListItemText
          primary={item.name}
          secondary='Sub text'
        />
        <ListItemIcon>
          <Button onClick={this._onDelete(item.id)} >
            <DeleteIcon />
          </Button>
        </ListItemIcon>
      </ListItem>
    )
  }
}

export default withStyles(styles)(Item)
