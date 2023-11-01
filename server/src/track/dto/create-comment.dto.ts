import { Schema as MSchema } from 'mongoose';

export class CreateCommentDto {
  readonly username: string;
  readonly text: string;
  readonly trackId: MSchema.Types.ObjectId;
}
