require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected!"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// Message Schema & Model
const MessageSchema = new mongoose.Schema({
  text: String,
  sender: String,
  timestamp: { type: Date, default: Date.now },
});
const Message = mongoose.model("Message", MessageSchema);

// Fetch all messages
app.get("/messages", async (req, res) => {
  try {
    const messages = await Message.find();
    res.json(messages);
  } catch (error) {
    res.status(500).json({ error: "Error fetching messages" });
  }
});

// Store a new message
app.post("/messages", async (req, res) => {
  try {
    const { text, sender } = req.body;
    const newMessage = new Message({ text, sender });
    await newMessage.save();
    io.emit("receive-message", newMessage); // Broadcast message
    res.status(201).json(newMessage);
  } catch (error) {
    res.status(500).json({ error: "Error sending message" });
  }
});

// WebSocket Connection
io.on("connection", (socket) => {
  console.log("User connected");

  socket.on("send-message", async (data) => {
    const message = new Message(data);
    await message.save();
    io.emit("receive-message", data);
  });

  socket.on("disconnect", () => console.log("User disconnected"));
});

// Start Server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
