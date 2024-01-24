// userModel.ts
import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String },
    image: { type: String },
    timeStamp: { type: String },
    isActive: { type: Boolean },
});


export default mongoose.models.User || mongoose.model('User', UserSchema);
