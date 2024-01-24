// userModel.ts
import mongoose from 'mongoose';

const AmountOwnschema = new mongoose.Schema({
    totalAmountOwns: { type: String },
    userId: {
        ownerId: { type: String },
        name: { type: String },
        amount: { type: Number },
    },
});


export default mongoose.models.AmountOwns || mongoose.model('AmountOwns', AmountOwnschema);

