
import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import DeleteIcon from '@material-ui/icons/Delete'

import { getGroupNamesByUser } from '../modules/users/selector'

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

  get disabled () {
    const { type, item } = this.props
    return type === 'group' ? !!item.users.length : false
  }

  get text () {
    const { type, item, groups } = this.props
    return type === 'group'
      ? `${item.users.length} Users`
      : getGroupNamesByUser(groups, item).join(' | ')
  }

  _onDelete (item) {
    return () => {
      this.props.onDelete(item)
    }
  }

  render () {
    const { classes, item } = this.props
    return (
      <ListItem className={classes.listItem}>
        <ListItemText
          primary={item.name}
          secondary={this.text}
        />
        <ListItemIcon>
          <Button
            onClick={this._onDelete(item)}
            disabled={this.disabled}
          >
            <DeleteIcon />
          </Button>
        </ListItemIcon>
      </ListItem>
    )
  }
}

export default withStyles(styles)(Item)
