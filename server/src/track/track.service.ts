import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Schema as MSchema } from 'mongoose';
import { Track, TrackDocument } from './schemas/track.schema';
import { Comment, CommentDocument } from './schemas/comment.schema';
import { CreateTrackDto } from './dto/create-track.dto';
import { CreateCommentDto } from './dto/create-comment.dto';
import { FileService, FileType } from '../file/file.service';

@Injectable()
export class TrackService {
  constructor(
    @InjectModel(Track.name) private trackModel: Model<TrackDocument>,
    @InjectModel(Comment.name) private commentModel: Model<CommentDocument>,
    private fileService: FileService,
  ) {}

  async create(dto: CreateTrackDto, picture, audio): Promise<Track> {
    const audioPath = this.fileService.createFile(FileType.AUDIO, audio);
    const picturePath = this.fileService.createFile(FileType.IMAGE, picture);
    return await this.trackModel.create({
      ...dto,
      listens: 0,
      audio: audioPath,
      picture: picturePath,
    });
  }

  async getAll(count = 20, offset = 0): Promise<Track[]> {
    return await this.trackModel
      .find()
      .skip(Number(offset))
      .limit(Number(count));
  }

  async search(query: string): Promise<Track[]> {
    return await this.trackModel.find({
      name: { $regex: new RegExp(query, 'i') },
    });
  }

  async getOne(id: MSchema.Types.ObjectId): Promise<Track> {
    return await this.trackModel.findById(id);
  }

  async delete(id: MSchema.Types.ObjectId): Promise<MSchema.Types.ObjectId> {
    return await this.trackModel.findByIdAndDelete(id);
  }

  async addComment(dto: CreateCommentDto): Promise<Comment> {
    const track = await this.trackModel.findById(dto.trackId);
    const comment = await this.commentModel.create({ ...dto });
    track.comments.push(comment._id);
    await track.save();
    return comment;
  }

  async listen(id: MSchema.Types.ObjectId) {
    const track = await this.trackModel.findById(id);
    track.listens += 1;
    track.save();
  }
}
