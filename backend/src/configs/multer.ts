import multer from 'multer';
import crypto from 'crypto';
import { extname, resolve } from 'path';

export default {
  storage: multer.diskStorage({
    destination: (request, file, cb) => {
      return cb(
        null,
        resolve(__dirname, '..', '..', 'tmp', 'uploads')
      );
    },
    filename: (request, file, cb) => {
      crypto.randomBytes(16, (err, response) => {
        if (err) return cb(err, '');

        return cb(null, response.toString('hex') + extname(file.originalname));
      });
    },
  }),
};