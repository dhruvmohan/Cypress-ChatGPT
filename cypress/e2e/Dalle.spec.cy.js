describe('Image Generation Test', () => {
  it('should generate an image based on prompt', () => {
    cy.request({
      method: 'POST',
      url: 'https://api.openai.com/v1/images/generations',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer your-api-token`,
      },
      body: {
        model: "dall-e-3",
        prompt: "A cute baby sea otter",
        n: 1,
        size: "1024x1024",
      },
    }).then((response) => {
      // Add assertions or further actions based on the response
      expect(response.status).to.eq(200);
      cy.log('Image Generated:', JSON.stringify(response.body.data[0].url));
     
    });
  });
});