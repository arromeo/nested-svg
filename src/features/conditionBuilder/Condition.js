import React from 'react'

// Components
import { Box, Card, Grid, Typography } from '@material-ui/core'

export function Condition({ condition, innerRef }) {
  return (
    <div ref={innerRef}>
      <Box component={Card} marginY={2} padding={2} bgcolor="lightblue">
        <Grid container>
          <Grid item xs={3}>
            <Typography>Question</Typography>
          </Grid>
          <Grid item xs={9}>
            <Typography>{condition.source}</Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography>{condition.operator}</Typography>
          </Grid>
          <Grid item xs={9}>
            <Typography>{condition.parameters}</Typography>
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}
