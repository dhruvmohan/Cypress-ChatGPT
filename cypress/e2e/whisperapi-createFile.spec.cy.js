describe('Audio Speech Generation Test', () => {
  it('should generate speech audio based on input text', () => {
    cy.request({
      method: 'POST',
      url: 'https://api.openai.com/v1/audio/speech',
      headers: {
        'Authorization': `Bearer your-api-token`,
        'Content-Type': 'application/json',
      },
      body: {
        model: "tts-1-hd",
        input: "The quick brown fox jumped over the lazy dog.",
        voice: "alloy"
      },
      responseType: 'blob', // to receive binary response
    }).then((response) => {
      // Save the audio content to a file
      cy.writeFile('speech.mp3', response.body, 'binary');
    });
  });
});
