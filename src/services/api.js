import axios from "axios";

const API_URL = "http://localhost:5000"; // Adjust if needed

export const sendMessage = async (messageData) => {
  try {
    const response = await axios.post(`${API_URL}/messages`, messageData);
    return response.data;
  } catch (error) {
    console.error("Error sending message:", error);
  }
};

export const getMessages = async () => {
  try {
    const response = await axios.get(`${API_URL}/messages`);
    return response.data;
  } catch (error) {
    console.error("Error fetching messages:", error);
  }
};
