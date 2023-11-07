import React from 'react'
import ITrack from 'types/track'
import { Grid, Card, IconButton } from '@mui/material'
import styles from './TrackItem.module.scss'
import { Pause, PlayArrow } from '@mui/icons-material'

interface TrackItemProps {
  track: ITrack;
  active: boolean;
}

const Index = ({ track, active = false }: TrackItemProps) => {
  return (
    <Card className={styles.track}>
      <IconButton>
        {active ? <Pause /> : <PlayArrow />}
      </IconButton>
      <img width={70} height={70} src={track.picture} />
      <Grid container direction='column' style={{ width: 200, margin: '0 20px' }}>
        <div>{track.name}</div>
        <div style={{ fontSize: 12, color: 'gray' }}>{track.artist}</div>
      </Grid>
    </Card>
  )
}

export default Index