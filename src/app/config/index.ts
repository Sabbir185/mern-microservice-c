import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env') });

export default {
    node_env: process.env.NODE_ENV,
    website_name: process.env.WEBSITE_NAME,

    port: process.env.PORT,
    dev_port: process.env.DEV_PORT,

    db_string: process.env.DB_STRING,
    dev_db_string: process.env.DEV_DB_STRING,

    redis_live_url: process.env.REDIS_LIVE_URL,
    redis_dev_url: process.env.REDIS_DEV_URL,

    bcrypt_salt_rounds: process.env.BCRYPT_SALT_ROUNDS,

    jwt_access_secret: process.env.JWT_ACCESS_SECRET,
    jwt_access_expires_in: process.env.JWT_ACCESS_EXPIRES_IN,

    jwt_refresh_secret: process.env.JWT_REFRESH_SECRET,
    jwt_refresh_expires_in: process.env.JWT_REFRESH_EXPIRES_IN,

}