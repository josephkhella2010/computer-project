const computerArr = [
  {
    id: 1,
    url: "/Foto/productFoto/productOne1.jpg",
    name: "Dell1",
    description:
      "Paket med 5 stycken Menalux 1800 dammsugarpåsar och ett filter till Electrolux, Philips, Volta och AEG. Upp till 50% längre livslängd än andra kompatibla dammsugarpåsar samt med Duraflow-teknologi som motverkar dålig lukt!",
    price: 1000,
    discount: 15,
    finalPrice: 1000 - (1000 * 15) / 100,
    imgs: [
      "/Foto/productFoto/productOne1.jpg",
      "/Foto/productFoto/productOne2.jpg",
      "/Foto/productFoto/productOne3.jpg"
    ]
  },
  {
    id: 2,
    url: "/Foto/productFoto/productOne1.jpg",
    name: "Dell2",
    description:
      "Paket med 5 stycken Menalux 1800 dammsugarpåsar och ett filter till Electrolux, Philips, Volta och AEG. Upp till 50% längre livslängd än andra kompatibla dammsugarpåsar samt med Duraflow-teknologi som motverkar dålig lukt!",
    discount: 30,
    price: 2000,
    finalPrice: 2000 - (2000 * 30) / 100,
    imgs: [
      "/Foto/productFoto/productOne1.jpg",
      "/Foto/productFoto/productOne2.jpg",
      "/Foto/productFoto/productOne3.jpg"
    ]
  },
  {
    id: 3,
    url: "/Foto/productFoto/productOne1.jpg",
    name: "Dell3",
    description:
      "Paket med 5 stycken Menalux 1800 dammsugarpåsar och ett filter till Electrolux, Philips, Volta och AEG. Upp till 50% längre livslängd än andra kompatibla dammsugarpåsar samt med Duraflow-teknologi som motverkar dålig lukt!",
    discount: 5,
    price: 3000,
    finalPrice: 3000 - (3000 * 5) / 100,
    imgs: [
      "/Foto/productFoto/productOne1.jpg",
      "/Foto/productFoto/productOne2.jpg",
      "/Foto/productFoto/productOne3.jpg"
    ]
  },
  {
    id: 4,
    url: "/Foto/productFoto/productOne1.jpg",
    name: "Dell4",
    description:
      "Paket med 5 stycken Menalux 1800 dammsugarpåsar och ett filter till Electrolux, Philips, Volta och AEG. Upp till 50% längre livslängd än andra kompatibla dammsugarpåsar samt med Duraflow-teknologi som motverkar dålig lukt!",
    discount: 0,
    price: 4000,
    finalPrice: 4000,
    imgs: [
      "/Foto/productFoto/productOne1.jpg",
      "/Foto/productFoto/productOne2.jpg",
      "/Foto/productFoto/productOne3.jpg"
    ]
  },
  {
    id: 5,
    url: "/Foto/productFoto/productOne1.jpg",
    name: "Dell5",
    description:
      "Paket med 5 stycken Menalux 1800 dammsugarpåsar och ett filter till Electrolux, Philips, Volta och AEG. Upp till 50% längre livslängd än andra kompatibla dammsugarpåsar samt med Duraflow-teknologi som motverkar dålig lukt!",
    discount: 0,
    price: 5000,
    finalPrice: 5000,

    imgs: [
      "/Foto/productFoto/productOne1.jpg",
      "/Foto/productFoto/productOne2.jpg",
      "/Foto/productFoto/productOne3.jpg"
    ]
  },
  {
    id: 6,
    url: "/Foto/productFoto/productOne1.jpg",
    name: "Dell6",
    description:
      "Paket med 5 stycken Menalux 1800 dammsugarpåsar och ett filter till Electrolux, Philips, Volta och AEG. Upp till 50% längre livslängd än andra kompatibla dammsugarpåsar samt med Duraflow-teknologi som motverkar dålig lukt!",
    discount: 50,
    price: 6000,
    finalPrice: 6000 - (6000 * 50) / 100,

    imgs: [
      "/Foto/productFoto/productOne1.jpg",
      "/Foto/productFoto/productOne2.jpg",
      "/Foto/productFoto/productOne3.jpg"
    ]
  },
  {
    id: 7,
    url: "/Foto/productFoto/productOne1.jpg",
    name: "Dell7",
    description:
      "Paket med 5 stycken Menalux 1800 dammsugarpåsar och ett filter till Electrolux, Philips, Volta och AEG. Upp till 50% längre livslängd än andra kompatibla dammsugarpåsar samt med Duraflow-teknologi som motverkar dålig lukt!",
    discount: 0,
    price: 7000,
    finalPrice: 7000,
    imgs: [
      "/Foto/productFoto/productOne1.jpg",
      "/Foto/productFoto/productOne2.jpg",
      "/Foto/productFoto/productOne3.jpg"
    ]
  },
  {
    id: 8,
    url: "/Foto/productFoto/productOne1.jpg",
    name: "Dell8",
    description:
      "Paket med 5 stycken Menalux 1800 dammsugarpåsar och ett filter till Electrolux, Philips, Volta och AEG. Upp till 50% längre livslängd än andra kompatibla dammsugarpåsar samt med Duraflow-teknologi som motverkar dålig lukt!",
    discount: 0,
    price: 8000,
    finalPrice: 8000,
    imgs: [
      "/Foto/productFoto/productOne1.jpg",
      "/Foto/productFoto/productOne2.jpg",
      "/Foto/productFoto/productOne3.jpg"
    ]
  },
  {
    id: 9,
    url: "/Foto/productFoto/productOne1.jpg",
    name: "Dell9",
    description:
      "Paket med 5 stycken Menalux 1800 dammsugarpåsar och ett filter till Electrolux, Philips, Volta och AEG. Upp till 50% längre livslängd än andra kompatibla dammsugarpåsar samt med Duraflow-teknologi som motverkar dålig lukt!",
    discount: 0,
    price: 9000,
    finalPrice: 9000,
    imgs: [
      "/Foto/productFoto/productOne1.jpg",
      "/Foto/productFoto/productOne2.jpg",
      "/Foto/productFoto/productOne3.jpg"
    ]
  },
  {
    id: 10,
    url: "/Foto/productFoto/productOne1.jpg",
    name: "Dell10",
    description:
      "Paket med 5 stycken Menalux 1800 dammsugarpåsar och ett filter till Electrolux, Philips, Volta och AEG. Upp till 50% längre livslängd än andra kompatibla dammsugarpåsar samt med Duraflow-teknologi som motverkar dålig lukt!",
    discount: 40,
    price: 10000,
    finalPrice: 10000 - (10000 * 40) / 100,

    imgs: [
      "/Foto/productFoto/productOne1.jpg",
      "/Foto/productFoto/productOne2.jpg",
      "/Foto/productFoto/productOne3.jpg"
    ]
  },
  {
    id: 11,
    url: "/Foto/productFoto/productOne1.jpg",
    name: "Dell11",
    description:
      "Paket med 5 stycken Menalux 1800 dammsugarpåsar och ett filter till Electrolux, Philips, Volta och AEG. Upp till 50% längre livslängd än andra kompatibla dammsugarpåsar samt med Duraflow-teknologi som motverkar dålig lukt!",
    discount: 60,
    price: 11000,
    finalPrice: 11000 - (11000 * 60) / 100,

    imgs: [
      "/Foto/productFoto/productOne1.jpg",
      "/Foto/productFoto/productOne2.jpg",
      "/Foto/productFoto/productOne3.jpg"
    ]
  },
  {
    id: 12,
    url: "/Foto/productFoto/productOne1.jpg",
    name: "Dell12",
    description:
      "Paket med 5 stycken Menalux 1800 dammsugarpåsar och ett filter till Electrolux, Philips, Volta och AEG. Upp till 50% längre livslängd än andra kompatibla dammsugarpåsar samt med Duraflow-teknologi som motverkar dålig lukt!",
    discount: 0,
    price: 12000,
    finalPrice: 12000,

    imgs: [
      "/Foto/productFoto/productOne1.jpg",
      "/Foto/productFoto/productOne2.jpg",
      "/Foto/productFoto/productOne3.jpg"
    ]
  }
];

module.exports = computerArr;
