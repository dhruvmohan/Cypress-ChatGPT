describe('Translation Tests', () => {
  it('should translate audio file using Whisper API', () => {
    cy.fixture('whisperapi.m4a', 'binary').then(fileContent => {
      // Create a Blob object from the file content
      const blob = Cypress.Blob.binaryStringToBlob(fileContent);

      const formData = new FormData();
      formData.append('file', blob, 'whisperapi.m4a'); // Append the Blob object

      formData.append('model', 'whisper-1');

      //formData.append('language', 'ISO-639-1');

      formData.append('response_format', 'text');

      cy.request({
        method: 'POST',
        url: 'https://api.openai.com/v1/audio/transcriptions',
        headers: {
          'Authorization': 'Bearer your-api-token', // Replace with your OpenAI API key
          'Content-Type': 'multipart/form-data'
        },
        body: formData,
      }).then(response => {
        // Handle response
        if (response.status === 200) {
          // Translation successful
          console.log('Translation Result:', JSON.stringify(response));
        } else {
          // Handle error
          cy.error('Error:', response);
        }
      });
    });
  });
});
