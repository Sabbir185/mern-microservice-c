/* eslint-disable @typescript-eslint/ban-ts-comment */
import mongoose from 'mongoose';
import redisClient from '../../redisClient';

const exec = mongoose.Query.prototype.exec;

mongoose.Query.prototype.cache = function () {
    this.useCache = true;
    return this;
}

mongoose.Query.prototype.exec = async function () {
    if(!this.useCache) {
        return exec.apply(this, arguments);
    }
    const key = JSON.stringify(
        Object.assign({}, this.getQuery(), {
            collection: this.mongooseCollection.name,
        }),
    );
    const cachedValue = await redisClient.get(key);
    if (cachedValue) {
        const document = JSON.parse(cachedValue);
        return Array.isArray(document)
            ? document.map((doc) => new this.model(doc))
            : new this.model(document);
    }
    const result = await exec.apply(this, arguments);
    await redisClient.set(key, JSON.stringify(result));
    return result;
};
