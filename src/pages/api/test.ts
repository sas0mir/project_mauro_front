import type { NextApiRequest, NextApiResponse } from 'next';

interface ApiResponse {
    message: string;
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<ApiResponse>
) {
    // This is a simple API endpoint that returns a JSON response
    res.status(200).json({ message: 'Hello from the API!' });
}