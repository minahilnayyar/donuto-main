import mongoose from 'mongoose';
const { Schema } = mongoose;

const DonutoSchema = new mongoose.Schema({
    donutname:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    desc:{
        type: String
    }
});

export default mongoose.model("donut",DonutoSchema);