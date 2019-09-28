
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import DeleteIcon from '@material-ui/icons/Delete'

const useStyles = makeStyles(_ => ({
  listItem: {
    height: 50,
    backgroundColor: 'lightblue',
    marginBottom: 5
  }
}))

export default function Item () {
  const classes = useStyles()

  return (
    <ListItem className={classes.listItem}>
      <ListItemText
        primary='User name'
        secondary='Sub text'
      />
      <ListItemIcon>
        <Button>
          <DeleteIcon />
        </Button>
      </ListItemIcon>
    </ListItem>
  )
}
