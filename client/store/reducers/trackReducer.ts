import { ITrackState, TrackAction, TrackActionTypes } from 'types/track';

const initialState: ITrackState = {
  tracks: [],
  error: '',
};

export const trackReducer = (
  state = initialState,
  action: TrackAction,
): ITrackState => {
  switch (action.type) {
    case TrackActionTypes.FETCH_TRACKS_ERROR:
      return { ...state, error: action.payload };
    case TrackActionTypes.FETCH_TRACKS:
      return { ...state, tracks: action.payload, error: '' };
    default:
      return state;
  }
};
