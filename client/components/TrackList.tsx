import React from 'react'
import ITrack from 'types/track'
import Index from './TrackItem'
import { Grid, Box } from '@mui/material'

interface TrackListProps {
  tracks: ITrack[]
}

const TrackList = ({ tracks }: TrackListProps) => {
  return (
    <Grid container direction='column'>
      <Box p={2}>
        {tracks.map(track =>
          <Index key={track._id} />,
        )}
      </Box>
    </Grid>
  )
}

export default TrackList