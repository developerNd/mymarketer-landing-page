export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { event_name, event_id, user_data, custom_data } = req.body;

  if (!event_name) {
    return res.status(400).json({ error: "event_name is required" });
  }

  // Get credentials from environment variables
  const FB_PIXEL_ID = process.env.FB_PIXEL_ID;
  const FB_ACCESS_TOKEN = process.env.FB_ACCESS_TOKEN;

  if (!FB_PIXEL_ID || !FB_ACCESS_TOKEN) {
    console.error('❌ Missing Facebook credentials in environment variables');
    return res.status(500).json({ 
      error: "Facebook credentials not configured. Please set FB_PIXEL_ID and FB_ACCESS_TOKEN environment variables." 
    });
  }

  try {
    const response = await fetch(
      `https://graph.facebook.com/v19.0/${FB_PIXEL_ID}/events?access_token=${FB_ACCESS_TOKEN}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          data: [
            {
              event_name,
              event_time: Math.floor(Date.now() / 1000),
              event_id: event_id || `${event_name}_${Date.now()}`,
              user_data: {
                client_ip_address: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
                client_user_agent: req.headers['user-agent'],
                ...user_data
              },
              custom_data,
              action_source: "website",
              event_source_url: req.headers.referer || req.headers.origin
            },
          ],
        }),
      }
    );

    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(`Facebook API error: ${JSON.stringify(data)}`);
    }

    console.log('✅ Conversion API Success:', data);
    return res.status(200).json(data);
  } catch (err) {
    console.error('❌ Conversion API error:', err);
    return res.status(500).json({ error: err.message });
  }
}

