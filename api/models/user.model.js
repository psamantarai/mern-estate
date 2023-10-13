import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      default:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FFile%3ADefault_pfp.svg&psig=AOvVaw2-pbXJRcE6cE-SuPhOpuJT&ust=1697275012726000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLikrKPY8oEDFQAAAAAdAAAAABAD"
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
