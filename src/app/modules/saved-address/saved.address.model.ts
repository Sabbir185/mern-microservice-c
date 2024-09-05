import { model, Schema } from 'mongoose';
import aggregatePaginate from 'mongoose-aggregate-paginate-v2';
import { TSavedAddress } from './saved.address.interface';

const schema = new Schema<TSavedAddress>(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: 'user',
        },
        name: String,
        address: String,
        location: {
            lat: Number,
            lng: Number,
        },
    },
    { timestamps: true },
);

schema.plugin(aggregatePaginate);
const SavedAddress = model<TSavedAddress>('saved_address', schema);

export default SavedAddress;
