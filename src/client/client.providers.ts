import { Connection, Repository } from 'typeorm';
import { Client } from './client.entity';

export const photoProviders = [
  {
    provide: 'PHOTO_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Client),
    inject: ['DATABASE_CONNECTION'],
  },
];