import React, { useState } from 'react';
import DefaultLayout from 'layouts/DefaultLayout';
import { Button, Grid, TextField } from '@mui/material';
import { useRouter } from 'next/router';
import { useInput } from 'hooks/useInput';
import { ITrack } from 'types/track';
import { GetServerSideProps } from 'next';
import axios from 'axios';

interface TrackPageProps {
  serverTrack: ITrack;
}

const TrackPage = ({ serverTrack }: TrackPageProps) => {
  // Change to array destructuring
  const [track, setTrack] = useState(serverTrack);
  const router = useRouter();
  const username = useInput('');
  const text = useInput('');

  const addComment = async () => {
    try {
      const response = await axios.post(
        'http://localhost:2828/tracks/comment',
        {
          username: username.value,
          text: text.value,
          trackId: track._id,
        },
      );
      setTrack({ ...track, comments: [...track.comments, response.data] });
    } catch (e) {
      console.log('AddComments: ', e);
    }
  };

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
        <img
          src={'http://localhost:2828/' + track.picture}
          width={200}
          height={200}
          alt="Track"
        />
        <div style={{ marginLeft: 30 }}>
          <h1>Track name - {track.name}</h1>
          <h1>Artist - {track.artist}</h1>
          <h1>Plays - {track.listens}</h1>
        </div>
      </Grid>
      <h1>Lyrics</h1>
      <p>{track.text}</p>
      <h1>Comments</h1>
      <Grid container direction="column">
        <TextField {...text} label={'Your name'} fullWidth />
        <TextField
          {...username}
          label={'Comment'}
          fullWidth
          multiline
          rows={4}
        />
        <Button onClick={addComment}>Send</Button>
      </Grid>
      <div>
        {/* Add a check to make sure we have comments before trying to map */}
        {track.comments &&
          track.comments.map((comment) => (
            <div key={comment._id}>
              {' '}
              {/* Use unique keys for each comment */}
              <div>Author - {comment.username}</div>
              <div>Comment - {comment.text}</div>
            </div>
          ))}
      </div>
    </DefaultLayout>
  );
};

export default TrackPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params } = context;

  if (!params || typeof params.id !== 'string') {
    return {
      notFound: true,
    };
  }

  const response = await fetch(`http://localhost:2828/tracks/${params.id}`);
  const serverTrack: ITrack = await response.json();

  return {
    props: {
      serverTrack,
    },
  };
};
