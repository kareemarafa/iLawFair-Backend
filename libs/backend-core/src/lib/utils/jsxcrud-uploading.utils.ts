import {FileInterceptor, FilesInterceptor} from '@nestjs/platform-express';

import {diskStorage} from 'multer';
import {join, extname} from 'path';

const path = join(__dirname, 'uploads/images')

export class FileUploadingUtils {
  static singleFileUploader(name: string, dest: string = path) {
    return FileInterceptor(name, {
      storage: diskStorage({
        destination: dest,
        filename: (req, file, cb) => {
          const randomName = Array(32)
            .fill(null)
            .map(() => Math.round(Math.random() * 16).toString(16))
            .join('');
          return cb(null, `${randomName}${extname(file.originalname)}`);
        },
      }),
    });
  }

  static multipleFileUploader(name: string, dest: string = path, maxFileNumber: number = 20) {
    return FilesInterceptor(name, maxFileNumber, {
      storage: diskStorage({
        destination: dest,
        filename: (req, file, cb) => {
          const randomName = Array(32)
            .fill(null)
            .map(() => Math.round(Math.random() * 16).toString(16))
            .join('');
          return cb(null, `${randomName}${extname(file.originalname)}`);
        },
      }),
    });
  }
}
