import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const { assignment } = req.query;
  const dirPath = path.join(process.cwd(), `public/${assignment}`);
  
  fs.readdir(dirPath, (err, files) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    
    res.status(200).json({ files });
  });
}
