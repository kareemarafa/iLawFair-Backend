export const MediaEntityMapperUtils = (file, uploadedFile) => {
  file.filename = uploadedFile.filename;
  file.path = (uploadedFile.path).split(__dirname)[1];
  file.destination = (uploadedFile.destination).split(__dirname)[1];
  file.mimetype = uploadedFile.mimetype;
  return file;
}
