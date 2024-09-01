import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const products = [
  {
    name: 'Teclado',
    price: 75.25,
    createdAt: new Date(1709049027545),
    updatedAt: new Date(1709049027545),
  },
  {
    name: 'Mouse',
    price: 150.0,
    createdAt: new Date(1709049041977),
    updatedAt: new Date(1709049041977),
  },
  {
    name: 'Monitor',
    price: 150.0,
    createdAt: new Date(1709049047955),
    updatedAt: new Date(1709049047955),
  },
  {
    name: 'Audífonos',
    price: 50.0,
    createdAt: new Date(1709049048406),
    updatedAt: new Date(1709049048406),
  },
  {
    name: 'Laptop',
    price: 1000.0,
    createdAt: new Date(1709049048754),
    updatedAt: new Date(1709049048754),
  },
  {
    name: 'Smartphone',
    price: 800.0,
    createdAt: new Date(1709049058406),
    updatedAt: new Date(1709049058406),
  },
  {
    name: 'Tablet',
    price: 300.0,
    createdAt: new Date(1709049063205),
    updatedAt: new Date(1709049063205),
  },
  {
    name: 'Impresora',
    price: 200.0,
    createdAt: new Date(1709049068123),
    updatedAt: new Date(1709049068123),
  },
  {
    name: 'Altavoces',
    price: 150.0,
    createdAt: new Date(1709049073021),
    updatedAt: new Date(1709049073021),
  },
  {
    name: 'Cámara',
    price: 400.0,
    createdAt: new Date(1709049077943),
    updatedAt: new Date(1709049077943),
  },
  {
    name: 'Televisor',
    price: 700.0,
    createdAt: new Date(1709049082912),
    updatedAt: new Date(1709049082912),
  },
  {
    name: 'Router',
    price: 80.0,
    createdAt: new Date(1709049087876),
    updatedAt: new Date(1709049087876),
  },
  {
    name: 'Reproductor Blu-ray',
    price: 180.0,
    createdAt: new Date(1709049092805),
    updatedAt: new Date(1709049092805),
  },
  {
    name: 'Teclado inalámbrico',
    price: 60.0,
    createdAt: new Date(1709049097701),
    updatedAt: new Date(1709049097701),
  },
  {
    name: 'Mouse inalámbrico',
    price: 80.0,
    createdAt: new Date(1709049102663),
    updatedAt: new Date(1709049102663),
  },
  {
    name: 'Webcam',
    price: 70.0,
    createdAt: new Date(1709049107602),
    updatedAt: new Date(1709049107602),
  },
  {
    name: 'Tarjeta de video',
    price: 250.0,
    createdAt: new Date(1709049112487),
    updatedAt: new Date(1709049112487),
  },
  {
    name: 'Memoria RAM',
    price: 120.0,
    createdAt: new Date(1709049117415),
    updatedAt: new Date(1709049117415),
  },
  {
    name: 'Disco duro externo',
    price: 150.0,
    createdAt: new Date(1709049122337),
    updatedAt: new Date(1709049122337),
  },
  {
    name: 'Tarjeta madre',
    price: 350.0,
    createdAt: new Date(1709049127245),
    updatedAt: new Date(1709049127245),
  },
  {
    name: 'Procesador',
    price: 300.0,
    createdAt: new Date(1709049132156),
    updatedAt: new Date(1709049132156),
  },
  {
    name: 'Gabinete para PC',
    price: 80.0,
    createdAt: new Date(1709049137078),
    updatedAt: new Date(1709049137078),
  },
  {
    name: 'Fuente de poder',
    price: 100.0,
    createdAt: new Date(1709049141998),
    updatedAt: new Date(1709049141998),
  },
  {
    name: 'Router inalámbrico',
    price: 50.0,
    createdAt: new Date(1709049146924),
    updatedAt: new Date(1709049146924),
  },
  {
    name: 'Adaptador Wi-Fi USB',
    price: 30.0,
    createdAt: new Date(1709049151830),
    updatedAt: new Date(1709049151830),
  },
  {
    name: 'Cargador portátil',
    price: 40.0,
    createdAt: new Date(1709049156726),
    updatedAt: new Date(1709049156726),
  },
  {
    name: 'Batería de repuesto',
    price: 50.0,
    createdAt: new Date(1709049161615),
    updatedAt: new Date(1709049161615),
  },
  {
    name: 'Mochila para laptop',
    price: 40.0,
    createdAt: new Date(1709049166562),
    updatedAt: new Date(1709049166562),
  },
  {
    name: 'Estuche para tablet',
    price: 20.0,
    createdAt: new Date(1709049171487),
    updatedAt: new Date(1709049171487),
  },
  {
    name: 'Cable HDMI',
    price: 10.0,
    createdAt: new Date(1709049176416),
    updatedAt: new Date(1709049176416),
  },
  {
    name: 'Adaptador de corriente',
    price: 20.0,
    createdAt: new Date(1709049181319),
    updatedAt: new Date(1709049181319),
  },
  {
    name: 'Soporte para monitor',
    price: 30.0,
    createdAt: new Date(1709049186250),
    updatedAt: new Date(1709049186250),
  },
  {
    name: 'Base para laptop',
    price: 25.0,
    createdAt: new Date(1709049191148),
    updatedAt: new Date(1709049191148),
  },
  {
    name: 'Teclado numérico',
    price: 15.0,
    createdAt: new Date(1709049196075),
    updatedAt: new Date(1709049196075),
  },
  {
    name: 'Mouse ergonómico',
    price: 35.0,
    createdAt: new Date(1709049200976),
    updatedAt: new Date(1709049200976),
  },
  {
    name: 'Auriculares con micrófono',
    price: 50.0,
    createdAt: new Date(1709049205910),
    updatedAt: new Date(1709049205910),
  },
  {
    name: 'Control remoto universal',
    price: 20.0,
    createdAt: new Date(1709049210831),
    updatedAt: new Date(1709049210831),
  },
  {
    name: 'Base para smartphone',
    price: 15.0,
    createdAt: new Date(1709049215765),
    updatedAt: new Date(1709049215765),
  },
  {
    name: 'Adaptador de audio Bluetooth',
    price: 25.0,
    createdAt: new Date(1709049220648),
    updatedAt: new Date(1709049220648),
  },
  {
    name: 'Lector de tarjetas de memoria',
    price: 15.0,
    createdAt: new Date(1709049225590),
    updatedAt: new Date(1709049225590),
  },
  {
    name: 'Cable USB-C',
    price: 10.0,
    createdAt: new Date(1709049230512),
    updatedAt: new Date(1709049230512),
  },
  {
    name: 'Cable Lightning',
    price: 10.0,
    createdAt: new Date(1709049235427),
    updatedAt: new Date(1709049235427),
  },
  {
    name: 'Cable VGA',
    price: 10.0,
    createdAt: new Date(1709049240329),
    updatedAt: new Date(1709049240329),
  },
  {
    name: 'Cable DisplayPort',
    price: 10.0,
    createdAt: new Date(1709049245243),
    updatedAt: new Date(1709049245243),
  },
  {
    name: 'Cable de red Ethernet',
    price: 10.0,
    createdAt: new Date(1709049250141),
    updatedAt: new Date(1709049250141),
  },
  {
    name: 'Bolsa para laptop',
    price: 25.0,
    createdAt: new Date(1709049255042),
    updatedAt: new Date(1709049255042),
  },
  {
    name: 'Almohadilla para mouse',
    price: 15.0,
    createdAt: new Date(1709049259956),
    updatedAt: new Date(1709049259956),
  },
];

async function main() {
  await prisma.product.deleteMany();
  // await prisma.$queryRaw`ALTER SEQUENCE "Product_id_seq" RESTART WITH 1`;
  await prisma.product.createMany({
    data: products,
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
