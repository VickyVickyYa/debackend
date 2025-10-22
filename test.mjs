console.log("Node is working!");

const response = await fetch("http://localhost:3000/chat", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ message: "Hello AI" }),
});

const data = await response.text();
console.log("Raw output:", data);
