import { createClient } from 'redis';
import logger from './logger';
import config from '../config';

const redisClinet = createClient({
  url: config.redis.url
});

redisClinet.on('error', (err) => logger.info('Redis Error', err));
redisClinet.on('connect', () => logger.info('Redis Connected'));

const connect = async (): Promise<void> => {
  return await redisClinet.connect();
};

export const RedisClinet = {
  connect
};
