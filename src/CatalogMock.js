const mockedData = [
  {
    id: 0,
    image: "image/product.png",
    rate: 2,
    in_stock: true,
    comments: [
      {
        photo: "product1",
        name: "product1user1",
        text: "product1user1",
        data: "21.03.2020",
        rating: 2
      },
      {
        photo: "product1",
        name: "product2user2",
        text: "product2user2",
        data: "21.03.2020",
        rating: 2
      }
    ],
    delivery_period: 1,
    title:
      "1Сухой корм Hill's Science Plan Adult Large Breed Lamb & Rice для взрослых собак",
    details_weights: [
      { weight: 0.3, price: 450, sale: 500 },
      { weight: 1, price: 430, sale: 480 },
      { weight: 2, price: 420 },
      { weight: 10, price: 375 },
      { weight: 15, price: 350, sale: 400 },
      { weight: 20, price: 325 }
    ],
    priceUnit: "RUB",
    description: {
      manufacturer: "Grandorf",
      taste: "белая рыба",
      age: "взрослая кошка",
      destination: "гипоаллергенный",
      country: "Италия"
    }
  },
  {
    id: 1,
    image: "image/product.png",
    rate: 4,
    in_stock: true,
    comments: [
      {
        photo: "test",
        name: "test",
        text: "test",
        data: "21.03.2020",
        rating: 2
      },
      {
        photo: "test2",
        name: "test2",
        text: "test2",
        data: "21.03.2020",
        rating: 2
      }
    ],
    delivery_period: 1,
    title:
      "2Сухой корм Hill's Science Plan Adult Large Breed Lamb & Rice для взрослых собак",
    details_weights: [
      { weight: 0.3, price: 123, sale: 321 },
      { weight: 1, price: 430, sale: 480 },
      { weight: 2, price: 420 },
      { weight: 10, price: 375 },
      { weight: 15, price: 350, sale: 400 },
      { weight: 20, price: 325 }
    ],
    priceUnit: "RUB"
  },
  {
    id: 2,
    image: "image/product.png",
    rate: 5,
    in_stock: true,
    comments: [
      {
        photo: "product2",
        name: "product2user1",
        text: "product2user1",
        data: "21.03.2020",
        rating: 2
      },
      {
        photo: "product2",
        name: "product2user2",
        text: "product2user2",
        data: "21.03.2020",
        rating: 2
      }
    ],
    delivery_period: 1,
    title:
      "3Сухой корм Hill's Science Plan Adult Large Breed Lamb & Rice для взрослых собак",
    details_weights: [
      { weight: 0.3, price: 121 },
      { weight: 1, price: 430, sale: 480 },
      { weight: 2, price: 420 },
      { weight: 10, price: 375 },
      { weight: 15, price: 350, sale: 400 },
      { weight: 20, price: 325 }
    ],
    priceUnit: "RUB"
  },
  {
    id: 3,
    image: "image/product.png",
    rate: 0,
    in_stock: true,
    comments: [
      {
        photo: "test",
        name: "test",
        text: "test",
        data: "21.03.2020",
        rating: 2
      },
      {
        photo: "test2",
        name: "test2",
        text: "test2",
        data: "21.03.2020",
        rating: 2
      }
    ],
    delivery_period: 1,
    title:
      "4Сухой корм Hill's Science Plan Adult Large Breed Lamb & Rice для взрослых собак",
    details_weights: [
      { weight: 0.3, price: 222, sale: 333 },
      { weight: 1, price: 430, sale: 480 },
      { weight: 2, price: 420 },
      { weight: 10, price: 375 },
      { weight: 15, price: 350, sale: 400 },
      { weight: 20, price: 325 }
    ],
    priceUnit: "RUB"
  },
  {
    id: 4,
    image: "image/product.png",
    rate: 2,
    in_stock: true,
    comments: [
      {
        photo: "product3",
        name: "product3user1",
        text: "product3user1",
        data: "21.03.2020",
        rating: 2
      },
      {
        photo: "product3",
        name: "product3user2",
        text: "product3user2",
        data: "21.03.2020",
        rating: 2
      }
    ],
    delivery_period: 1,
    title:
      "5Сухой корм Hill's Science Plan Adult Large Breed Lamb & Rice для взрослых собак",
    details_weights: [{ weight: 1, price: 430, sale: 480 }],
    priceUnit: "RUB"
  }
  // {
  //   id: 1,
  //   image: "image/product.png",
  //   rate: 2,
  //   in_stock: true,
  //   title:
  //     "2Сухой корм Hill's Science Plan Adult Large Breed Lamb & Rice для взрослых собак",
  //   weights: ["300гр", "1кг", "2кг", "5кг"],
  //   price: 500,
  //   sale: 450,
  //   priceUnit: "RUB"
  // },
  // {
  //   id: 2,
  //   image: "image/product.png",
  //   rate: 5,
  //   in_stock: true,
  //   title:
  //     "3Сухой корм Hill's Science Plan Adult Large Breed Lamb & Rice для взрослых собак",
  //   weights: ["300гр", "1кг", "2кг", "5кг"],
  //   price: 500,
  //   sale: 450,
  //   priceUnit: "RUB"
  // },
  // {
  //   id: 3,
  //   image: "image/product.png",
  //   rate: 4,
  //   in_stock: true,
  //   title:
  //     "4Сухой корм Hill's Science Plan Adult Large Breed Lamb & Rice для взрослых собак",
  //   weights: [],
  //   price: 500,
  //   priceUnit: "RUB"
  // },
  // {
  //   id: 4,
  //   image: "image/product.png",
  //   rate: 4,
  //   in_stock: true,
  //   title:
  //     "5Сухой корм Hill's Science Plan Adult Large Breed Lamb & Rice для взрослых собак",
  //   weights: ["300гр", "1кг", "2кг", "5кг"],
  //   price: 500,
  //   priceUnit: "RUB"
  // }
];

export default mockedData;
