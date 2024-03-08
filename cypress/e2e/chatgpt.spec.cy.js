const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: 'your-chatGPT-api-key', dangerouslyAllowBrowser: true
});

describe('ChatGPT Integration', () => {
  it('should generate a response', () => {
  
    async function runCompletion () {
      const completion = await openai.chat.completions.create({
      model: "gpt-4-0125-preview",
      messages: [{ role: "user", content: "generate a 10000000000000 digit random number" }],
      temperature: 0,
      max_tokens: 1000,
      });
      cy.log(JSON.stringify(completion.choices[0].message.content));
  }
  runCompletion();

  });
});