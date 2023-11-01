import { SchemaFactory, Schema, Prop } from "@nestjs/mongoose";
import {Document} from "mongoose";
import {Track} from "./track.schema";

export type CommentDocument = Comment & Document

@Schema()
export class Comment {
  @Prop()
  username: string;

  @Prop()
  text: string;
}

export const CommentSchema = SchemaFactory.createForClass(Track);