export async function handler(event, context) {
  const { httpMethod, body } = event;

  // Allow CORS
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS'
  };

  if (httpMethod === 'OPTIONS') {
    return { statusCode: 204, headers };
  }

  if (httpMethod !== 'POST') {
    return { statusCode: 405, headers, body: 'Method not allowed' };
  }

  try {
    const data = JSON.parse(body);
    const { firstName, lastName, phone, email, message } = data;

    // Validate required fields
    if (!firstName || !lastName || !email || !message) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Missing required fields' })
      };
    }

    // For now, just return success
    // In production, you'd store this in a database
    console.log('Form submission:', { firstName, lastName, phone, email, message });

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ success: true, message: 'Submission received' })
    };
  } catch (error) {
    console.error('Error processing submission:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'Failed to process submission' })
    };
  }
}
