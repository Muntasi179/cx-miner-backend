// Simple transaction verification API
export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { boc, walletAddress } = req.body;
    
    // Log the verification request
    console.log('Verifying transaction for:', walletAddress);
    
    // In a real implementation, you would verify on the TON blockchain
    // For now, we'll simulate verification after a short delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Always return success for simulation purposes
    // In production, you would verify the transaction on the blockchain
    res.status(200).json({ 
      success: true, 
      message: 'Transaction verified successfully',
      transactionId: `tx_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ success: false, error: error.message });
  }
}
