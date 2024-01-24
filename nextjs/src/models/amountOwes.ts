// userModel.ts
import mongoose from 'mongoose';

const AmountOweschema = new mongoose.Schema({
    totalAmountOwns: { type: String },
    userId: {
        ownerId: { type: String },
        name: { type: String },
        amount: { type: Number },
    },
});


export default mongoose.models.AmountOwes || mongoose.model('AmountOwes', AmountOweschema);

