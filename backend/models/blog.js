import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  id: {
    type: String
  },
  title: {
    type: String,
    required: [true, "please provide blog name"],
    trim: true,
    maxlength: [120, "blog title should not be more than 120 characters"],
  },
  description: {
    type: String,
    required: [true, "please provide blog description"],
  },
  content: {
    type: String,
    required: [true, "please provide blog content"],
  },
  keywords: {
    type: String,
  },
  notes: {
    type: String,
    maxlength: [300, "blog Notes must not exceed 300"],
  },
  photos: [
    {
      id: {
        type: String,
        required: true,
      },
      secure_url: {
        type: String,
        required: true,
      },
    },
  ],
  category: {
    type: mongoose.Schema.ObjectId,
    ref: "SvskhdCategory",
  },
  subCategory: {
    type: mongoose.Schema.ObjectId,
    ref: "SvskhdSubCategory",
  },
  //this field was updated in order videos later
  stock: {
    type: Number,
    required: [true, "please add a number in stock"],
  },
  brand: {
    type: String,
    required: [true, "please add a brand for clothing"],
  },
  ratings: {
    type: Number,
    default: 0,
  },
  numberOfReviews: {
    type: Number,
    default: 0,
  },
  product: {
    type: mongoose.Schema.ObjectId,
    ref: "AquaProduct",
  },
  reviews: [
    {
      user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
    },
  ],
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "SvskhdUser",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});


const SvskhdBlog = mongoose.model("SBlog", blogSchema)
export default SvskhdBlog