
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'

const useStyles = makeStyles(_ => ({
  header: {
    width: 400,
    height: 50,
    display: 'flex',
    backgroundColor: 'lightblue'
  }
}))

export default function Header ({ text }) {
  const classes = useStyles()

  return (
    <Box className={classes.header}>
      <Box m='auto'>{text}</Box>
    </Box>
  )
}
