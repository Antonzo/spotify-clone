import { Dispatch } from 'redux';
import { TrackActionTypes, TrackAction } from 'types/track';
import axios from 'axios';

export const fetchTracks = () => async (dispatch: Dispatch<TrackAction>) => {
  try {
    const response = await axios.get('http://localhost:2828/tracks');
    dispatch({
      type: TrackActionTypes.FETCH_TRACKS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: TrackActionTypes.FETCH_TRACKS_ERROR,
      payload: 'Error: track upload ',
    });
  }
};
