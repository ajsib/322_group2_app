import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const { assignment, file } = req.query;
  const filePath = path.join(process.cwd(), `public/${assignment}/${file}`);

  // Check if the file exists
  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ error: 'File not found' });
  }

  // Set appropriate headers for PDF file
  res.setHeader('Content-Type', 'application/pdf');

  // Stream the PDF file
  const fileStream = fs.createReadStream(filePath);
  fileStream.pipe(res);
}
