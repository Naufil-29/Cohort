import mongoose from "mongoose";
import { model, Schema } from "mongoose";
const UserSchema = new Schema({
    email: { type: String, unique: true },
    password: String
});
export const UserModel = mongoose.model("User", UserSchema);
//# sourceMappingURL=db.js.map