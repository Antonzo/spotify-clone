import { Module } from '@nestjs/common';
import { TrackModule } from './track/track.module';
import { MongooseModule } from '@nestjs/mongoose';

require('dotenv').config();

const uri = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.vcsomdf.mongodb.net/?retryWrites=true&w=majority`;

@Module({
  imports: [MongooseModule.forRoot(uri), TrackModule],
})
export class AppModule {}
