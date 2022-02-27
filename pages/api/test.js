export default function handler(req, res) {
  if (req.method === 'POST') {
    console.log('API', req.body);
  } else {
    // Handle any other HTTP method
  }
}
