import React from 'react'
import DefaultLayout from 'layouts/DefaultLayout'
import { Button, Grid, TextField } from '@mui/material'
import { useRouter } from 'next/router'

const TrackPage = () => {
  const router = useRouter()

  return (
    <DefaultLayout>
      <Button
        variant={'outlined'}
        style={{ fontSize: 32 }}
        onClick={() => router.push('/tracks')}
      >
        Back to list
      </Button>
      <Grid container style={{ margin: '20px 0' }}>
        <img src={track.picture} width={200} height={200} />
        <div style={{ marginLeft: 30 }}>
          <h1>Track name - {track.name}</h1>
          <h1>Artist - {track.artist}</h1>
          <h1>Plays - {track.listens}</h1>
        </div>
      </Grid>
      <h1>Lyrics</h1>
      <p>{track.text}</p>
      <h1>Comments</h1>
      <Grid container>
        <TextField
          label={'Your name'}
          fullWidth
        />
        <TextField
          label={'Comment'}
          fullWidth
          multiline
          rows={4}
        />
        <Button>Send</Button>
      </Grid>
      <div>
        {track.comments.map(comment =>
          <div key={track._id}>
            <div>Author - {comment.username}</div>
            <div>Comment - {comment.text}</div>
          </div>,
        )}
      </div>
    </DefaultLayout>
  )
}

export default TrackPage