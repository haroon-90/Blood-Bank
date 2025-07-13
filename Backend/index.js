import express from "express";
import Cors from "cors";
import Blood from "./models/schema.js";

const app = express();
app.use(express.json());
const PORT = 3000;
app.use(Cors());

app.get('/', (req, res) => {
    // const newblood = new Blood({name :"Testing", blood: "T+", age: 20, location: "Testing", contact: "testing"});
    // newblood.save()
    res.send(`<h1>Welcome to the Blood Bank Storage System</h1>`);
});

app.get("/blood", async (req, res) => {
    try {
        const bloods = await Blood.find();
        res.json(bloods);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post("/blood", async (req, res) => {
    try {
        // console.log("Received request to add blood donation: " + req.body);
        const { name, blood, age, location, contact } = req.body;
        const newBlood = new Blood({ name, blood, age, location, contact });
        await newBlood.save();
        res.status(201).json(newBlood);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

app.delete("/blood/:id", async (req, res) => {
    try {
        const result = await Blood.findByIdAndDelete(req.params.id);
        if (!result) return res.status(404).json({ error: "Not found" });
        res.status(200).json({ message: "Deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.put("/blood/:id", async (req, res) => {
    try {
        const { name, blood, age, location, contact } = req.body;
        const updatedBlood = await Blood.findByIdAndUpdate(
            req.params.id,
            { name, blood, age, location, contact },
            { new: true }
        );
        if (!updatedBlood) return res.status(404).json({ error: "Not found" });
        res.status(200).json(updatedBlood);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
