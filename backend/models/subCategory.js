import mongoose from "mongoose";


const SvskhdSubCategorySchema = new mongoose.Schema(
    {
        title: {
            type: String,
        },
        description: {
            type: String,
        },
        photos: [
            {
                id: String,
                secure_url: String,
            },
        ],
        keywords: {
            type: String,
        },
        category: {
            type: mongoose.Schema.ObjectId,
            ref: "SvskhdCategory",
            required: true,
        },
    },
    {
        timestamps: true,
    },
);

const SvskhdSubCategory =
    mongoose.models.SvskhdSubCategory ||
    mongoose.model("SvskhdSubCategory", SvskhdSubCategorySchema);

export default SvskhdSubCategory;