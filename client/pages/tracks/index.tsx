import React from 'react';
import DefaultLayout from 'layouts/DefaultLayout';
import { Box, Button, Card, Grid } from '@mui/material';
import TrackList from 'components/TrackList';
import { useRouter } from 'next/router';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { NextThunkDispatch, wrapper } from 'store';
import { fetchTracks } from 'store/action-creators/track';

const TracksPage = () => {
  const router = useRouter();
  const { tracks, error } = useTypedSelector((state) => state.track);

  if (error) {
    return (
      <DefaultLayout>
        <h1>{error}</h1>
      </DefaultLayout>
    );
  }

  return (
    <DefaultLayout>
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
