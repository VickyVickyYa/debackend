app.post("/chat", async (req, res) => {
  console.log("🟢 Chat endpoint hit!"); 
  try {
    const userMessage = req.body.message;
    console.log("User message received:", userMessage);  

    const url = "https://openrouter.ai/api/v1/chat/completions";
    console.log("Request URL:", url);  
const requestBody = JSON.stringify({
  model: "deepseek/deepseek-chat-v3.1:free",


  messages: [
    
    
    
    { role: "user", content: userMessage 
  }]




});
    console.log("Request body:", requestBody); 


    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "http://localhost:3000",
        "X-Title": "DebateCom",
      },
      body: requestBody,
    });

   
    console.log("Response status:", response.status);

    const data = await response.json();
    console.log("API response data:", data);  

   
    res.json(data);
  } catch (error) {
    console.error("Error occurred:", error);
    res.status(500).json({ error: "Failed to contact AI" });
  }
});
