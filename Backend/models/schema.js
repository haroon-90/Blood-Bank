import mongoose from "mongoose";

mongoose.connect('mongodb://localhost:27017/bloodBank')
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.error("MongoDB connection error:", err));

const bloodSchema = new mongoose.Schema({
    name: { type: String, required: true },
    blood: { type: String, required: true },
    age: { type: Number, required: true },
    location: { type: String, required: true },
    contact: { type: String, required: true }
});

const Blood = mongoose.model("Blood", bloodSchema);

export default Blood;