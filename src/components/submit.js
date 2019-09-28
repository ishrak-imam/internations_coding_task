
import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles(_ => ({
  wrapper: {
    width: 200,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  button: {
    width: 90,
    height: 35,
    fontSize: '12px'
  }
}))

export default function Submit ({ disabled, onSubmit }) {
  const classes = useStyles()

  return (
    <Box className={classes.wrapper}>
      <Button
        onClick={onSubmit}
        disabled={disabled}
        variant='outlined'
        color='primary'
        className={classes.button}
        size='large'
      >Add
      </Button>
    </Box>
  )
}
