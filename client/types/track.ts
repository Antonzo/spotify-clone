import { IComment } from 'types/comment';

export interface ITrack {
  _id: string;
  name: string;
  artist: string;
  text: string;
  listens: number;
  audio: string;
  picture: string;
  comments: IComment[];
}
