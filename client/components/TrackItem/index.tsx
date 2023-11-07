import React from 'react'
import ITrack from 'types/track'
import { Grid, Card, IconButton } from '@mui/material'
import styles from './TrackItem.module.scss'
import { Pause, PlayArrow, Delete } from '@mui/icons-material'

interface TrackItemProps {
  track: ITrack;
  active: boolean;
}

const Index = ({ track, active = false }: TrackItemProps) => {
  const router = useRouter()

  return (
    <Card className={styles.track} onClick={() => router.push('/tracks/' + track._id)}>
      <IconButton onClick={e => e.stopPropagation()}>
        {active ? <Pause /> : <PlayArrow />}
      </IconButton>
      <img width={70} height={70} src={track.picture} />
      <Grid container direction='column' style={{ width: 200, margin: '0 20px' }}>
        <div>{track.name}</div>
        <div style={{ fontSize: 12, color: 'gray' }}>{track.artist}</div>
      </Grid>
      {active && <div>02:42 / 03:22</div>}
      <IconButton style={{ marginLeft: 'auto' }} onClick={e => e.stopPropagation()}>
        <Delete />
      </IconButton>
    </Card>
  )
}

export default Index