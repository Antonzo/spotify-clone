import { Module } from '@nestjs/common';
import { TrackModule } from './track/track.module';
import { MongooseModule } from '@nestjs/mongoose';
import { FileModule } from './file/file.module';

require('dotenv').config();

const uri = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.vcsomdf.mongodb.net/?retryWrites=true&w=majority`;

@Module({
  imports: [MongooseModule.forRoot(uri), TrackModule, FileModule],
})
export class AppModule {}
