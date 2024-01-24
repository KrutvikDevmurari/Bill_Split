// userModel.ts
import mongoose from 'mongoose';

const Groupschema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    image: { type: String },
    password: { type: String },
    users: [
        {
            userId: { type: String },
            name: { type: String },
        },
    ],

    costs: [
        {
            id: { type: String },
            amount: { type: Number },
            splitBetween: [
                {
                    userId: { type: String },
                    user: { type: String },
                }
            ],
            description: { type: String },
            paidBy: { type: String },
            paidByName: { type: String },
            timeStamp: { type: String },
            isActive: { type: String },
            isPaid: { type: String },
        },
    ],
    isActive: { type: Boolean },
    createdby: { type: String },
    createdAt: { type: String },
    updatedBy: { type: String },
    updatedAt: { type: String },
});


export default mongoose.models.Group || mongoose.model('Group', Groupschema);
