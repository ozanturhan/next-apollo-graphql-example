import express from 'express';
import { createServer } from 'http';
import path from 'path';
import { APP_URL, PORT } from './mock-server.utils';
import { ImageService } from './image.service';

const imageService = new ImageService();

const app = express();

app.use('/images', express.static(path.join(__dirname, 'images')));

app.get('/products', (req, res) => {
  res.send([
    {
      id: 1,
      name: 'Apple iPhone 11 128 GB Pro Cep Telefonu Apple Türkiye Garantili',
      image: `${APP_URL}/image/200/iphone_11.png`,
      price: '1,250.00 TL',
      cargoType: 'FREE',
    },
    {
      id: 2,
      name: 'Apple iPhone 12 128 GB Pro Cep Telefonu Apple Türkiye Garantili',
      image: `${APP_URL}/image/200/iphone_12.png`,
      price: '1,500.00 TL',
      cargoType: 'PAID',
    },
    {
      id: 3,
      name: 'Samsung Galaxy S10 256 GB Cep Telefonu Samsung Türkiye Garantili',
      image: `${APP_URL}/image/200/galaxy_s10.png`,
      price: '2,000.00 TL',
      cargoType: 'FREE_SAME_DAY',
    },
    {
      id: 4,
      name: 'Samsung Galaxy S20 256 GB Cep Telefonu Samsung Türkiye Garantili',
      image: `${APP_URL}/image/200/galaxy_s20.png`,
      price: '2,250.00 TL',
      cargoType: 'FREE',
    },
  ]);
});

app.get('/image/:size/:image', async (req, res) => {
  await imageService.resize(req.params.size, req.params.image, res);
});

const httpServer = createServer(app);

httpServer.listen({ port: PORT }, (): void => console.log(`Mock service running on ${APP_URL}`));
