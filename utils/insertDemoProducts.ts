import prisma from "./db";

const demoProducts = [
    {
      title: "Smart phone",
      price: 22,
      rating: 5,
      description: "This is smart phone description",
      mainImage: "product1.webp",
      slug: "smart-phone-demo"
    },
    {
      title: "SLR camera",
      price: 24,
      rating: 0,
      description: "This is slr description",
      mainImage: "product2.webp",
      slug: "slr-camera-demo"
    },
    {
      title: "Mixed grinder",
      price: 25,
      rating: 4,
      description: "This is mixed grinder description",
      mainImage: "product3.webp",
      slug: "mixed-grinder-demo"
    },
    {
      title: "Phone gimbal",
      price: 21,
      rating: 5,
      description: "This is phone gimbal description",
      mainImage: "product4.webp",
      slug: "phone-gimbal-demo"
    },
    {
      title: "Tablet keyboard",
      price: 52,
      rating: 4,
      description: "This is tablet keyboard description",
      mainImage: "product5.webp",
      slug: "tablet-keyboard-demo"
    },
    {
      title: "Wireless earbuds",
      price: 74,
      rating: 3,
      description: "This is earbuds description",
      mainImage: "product6.webp",
      slug: "wireless-earbuds-demo"
    },
    {
      title: "Party speakers",
      price: 35,
      rating: 5,
      description: "This is party speakers description",
      mainImage: "product7.webp",
      slug: "party-speakers-demo"
    },
    {
      title: "Slow juicer",
      price: 69,
      rating: 5,
      description: "Slow juicer desc",
      mainImage: "product8.webp",
      slug: "slow-juicer-demo"
    },
    {
      title: "Wireless headphones",
      price: 89,
      rating: 3,
      description: "This is wireless headphones description",
      mainImage: "product9.webp",
      slug: "wireless-headphones-demo"
    },
    {
      title: "Smart watch",
      price: 64,
      rating: 3,
      description: "This is smart watch description",
      mainImage: "product10.webp",
      slug: "smart-watch-demo"
    },
    {
      title: "Notebook horizon",
      price: 52,
      rating: 5,
      description: "This is notebook description",
      mainImage: "product11.webp",
      slug: "notebook-horizon-demo"
    },
    {
      title: "Mens trimmer",
      price: 54,
      rating: 5,
      description: "This is trimmer description",
      mainImage: "product12.webp",
      slug: "mens-trimmer-demo"
    },
  ];

  const insertDemoProducts = async () => {
    for(const product of demoProducts){
        await prisma.product.create({
            data: product
        })
    }
    console.log('Demo products inserted successfully!');
  }

  insertDemoProducts()
    .catch(error => {
        console.error(error);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    })