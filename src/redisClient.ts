import { createClient } from 'redis';
import config from './app/config';

const redisClient = createClient({
    url:
        config.node_env === 'production'
            ? config?.redis_live_url
            : config?.redis_dev_url,
});

export async function redisClientFunc() {
    try {
        await redisClient.connect();
        return redisClient;
    } catch (err) {
        console.log(err);
    }
}

redisClient.on('error', (err) => {
  console.error('Redis client error', err);
});

redisClient.on('connect', () => {
  console.log('Redis client connected');
});

export default redisClient;