export default async function handler(req, res) {
  const { message } = req.body;

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: "Sei un esperto di comunicazione social."
        },
        {
          role: "user",
          content: `Messaggio: "${message}". Dammi 3 risposte: flirty, funny, smart. Brevi, su righe separate.`
        }
      ]
    })
  });

  const data = await response.json();
  res.status(200).json(data);
}