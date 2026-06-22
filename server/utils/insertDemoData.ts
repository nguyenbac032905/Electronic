import prisma from "./db";

const demoProducts = [
    {
        id: "1",
        title: "Smart phone",
        price: 22,
        rating: 5,
        description: "This is smart phone description",
        mainImage: "product1.webp",
        slug: "smart-phone-demo",
        manufacturer: "Samsung",
        categoryID: "480e2ad5-a448-40d5-9e32-68eb88621b9a",
        inStock: 0
    },
    {
        id: "7",
        title: "Party speakers",
        price: 35,
        rating: 5,
        description: "This is party speakers description",
        mainImage: "product7.webp",
        slug: "party-speakers-demo",
        manufacturer: "SOWO",
        categoryID: "93dfc621-158c-4d03-9e6a-1d0a396654d2",
        inStock: 1
    }
];

const demoProductImages = [
    {
        imageID: "1",
        productID: "13",
        image: "sony speaker image 1.jpg",
    },
    {
        imageID: "2",
        productID: "13",
        image: "sony speaker image 2.jpg",
    },
    {
        imageID: "3",
        productID: "13",
        image: "sony speaker image 3.jpg",
    },
    {
        imageID: "4",
        productID: "13",
        image: "sony speaker image 4.jpg",
    },
];

const insertDemoProducts = async () => {
    for(const product of demoProducts){
        await prisma.product.create({
            data: product
        })
    }
    console.log('Demo products inserted successfully!');

    // for(const image of demoProductImages){
    //     await prisma.image.create({
    //         data: image,
    //     });
    // }
    // console.log("Demo images inserted successfully!");
}

insertDemoProducts()
    .catch(error => {
        console.error(error);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    })