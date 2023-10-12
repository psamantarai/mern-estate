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
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.iprcenter.gov%2Fimage-repository%2Fblank-profile-picture.png%2Fimage_view_fullscreen&psig=AOvVaw09F_vlQ_3ai6xC38gaGB5T&ust=1697210321957000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCMDtoKTn8IEDFQAAAAAdAAAAABAJ",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
