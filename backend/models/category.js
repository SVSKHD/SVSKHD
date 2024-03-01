import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema(
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
    },
    {
        timestamps: true,
    },
);

const SvskhdCategory =
    mongoose.models.SvskhdCategory ||
    mongoose.model("SvskhdCategory", CategorySchema);

export default SvskhdCategory;