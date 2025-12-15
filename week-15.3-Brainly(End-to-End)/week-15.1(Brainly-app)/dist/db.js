import mongoose from "mongoose";
import { model, Schema } from "mongoose";
const UserSchema = new Schema({
    email: { type: String, unique: true },
    password: String
});
export const UserModel = mongoose.model("User", UserSchema);
const ContentSchema = new Schema({
    title: String,
    link: String,
    type: String,
    tags: [{ type: mongoose.Types.ObjectId, ref: 'Tag' }],
    userId: { type: mongoose.Types.ObjectId, ref: 'User', required: true }
});
export const ContentModel = mongoose.model("Content", ContentSchema);
//# sourceMappingURL=db.js.map