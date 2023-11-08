import React, { useState } from 'react';
import DefaultLayout from 'layouts/DefaultLayout';
import { Box, Button, Card, Grid, TextField } from '@mui/material';
import TrackList from 'components/TrackList';
import { useRouter } from 'next/router';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { wrapper } from 'store';
import { fetchTracks, searchTracks } from 'store/action-creators/track';
import { useDispatch } from 'react-redux';
import { NextThunkDispatch } from 'store';

const TracksPage = () => {
  const router = useRouter();
  const { tracks, error } = useTypedSelector((state) => state.track);
  const [query, setQuery] = useState('');
  const dispatch = useDispatch() as NextThunkDispatch;

  const search = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    await dispatch(await searchTracks(e.target.value));
  };

  if (error) {
    return (
      <DefaultLayout>
        <h1>{error}</h1>
      </DefaultLayout>
    );
  }

  return (
    <DefaultLayout title={'List of tracks'}>
      <Grid container justifyContent="center">
        <Grid item xs={8}>
          <Card>
            <Box px={3}>
              <Grid container justifyContent="space-between">
                <h1>Track list</h1>
                <Button onClick={() => router.push('/tracks/create')}>
                  Upload
                </Button>
              </Grid>
            </Box>
            <TextField fullWidth value={query} onChange={search} />
            <TrackList tracks={tracks} />
          </Card>
        </Grid>
      </Grid>
    </DefaultLayout>
  );
};

export default TracksPage;

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const dispatch = store.dispatch;

    await dispatch(await fetchTracks());

    const state = store.getState();

    const tracks = state.track.tracks;
    return {
      props: {
        tracks,
      },
    };
  },
);
