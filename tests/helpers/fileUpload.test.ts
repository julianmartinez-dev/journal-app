import { v2 as cloudinary } from 'cloudinary';
import { fileUpload } from '../../src/helpers/fileUpload';
import dotenv from 'dotenv';
dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

describe('Pruebas en fileUpload', () => { 
    test('Debe de subir el archivo correctamente a Cloudinary', async() => {
        const IMAGE_URL =
          'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png';

          const resp = await fetch(IMAGE_URL);
          const blob = await resp.blob();
          const file = new File([blob], 'test.png', { type: 'image/png' });
          const url = await fileUpload(file);

          expect( typeof url ).toBe('string');

          const segmentsUrl = url!.split('/');
          const imageID = segmentsUrl[segmentsUrl.length - 1].replace('.png', '');

          await cloudinary.api.delete_resources(['journal/' + imageID]);
        
    })

    test('Debe de retornar null',async () => {
      const file = new File([], 'test.png');
      const url = await fileUpload(file);
      expect( url ).toBe(null);
    })
 })