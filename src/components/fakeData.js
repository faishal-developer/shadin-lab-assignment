import image1 from '../images/homeProduct.png'
import image2 from '../images/Product2.png'
import image3 from '../images/Product3.png'
import image4 from '../images/Product4.png'
import hat from '../images/hat.png'
import trouser from '../images/Trouser.png'

const fakeData = [
    {
        id: 1,
        name: 'FULL WINTER KIT',
        price: 100,
        image: image1,
        shortDes:'Half Jacket + Skinny Trouser + Boot lether',
        moreImage:[image1,hat,trouser],
        sizes: ['s','l','xl'],
        color: ['red', 'blue', 'green'],
        Brand:'Reebok',
        des:'lorem ipsum dummy text goes here.lorem ipsum dummy text goes herelorem ipsum dummy text goes herelorem ipsum dummy text goes here'
    },
    {
        id: 2,
        name: 'One Man Shirt Red',
        price: 120,
        image: image2,
        moreImage: [image2, hat, trouser],
        sizes: ['s','m'],
        color: ['red', 'yellow', 'green'],
        Brand:'Addidas',
        shortDes: 'Jacket + Skinny Pant + lether',
        des: 'lorem ipsum dummy text goes here.lorem ipsum dummy text goes herelorem ipsum dummy text goes herelorem ipsum dummy text goes here'
    },
    {
        id: 3,
        name: 'Jacket Track Reebok',
        price: 200,
        image: image1,
        moreImage: [image1, hat, trouser],
        sizes: ['l','xl'],
        color: ['red', 'pink', 'green'],
        Brand:'Nike',
        shortDes: 'Special Cotton + Export Quality',
        des: 'lorem ipsum dummy text goes here.lorem ipsum dummy text goes herelorem ipsum dummy text goes herelorem ipsum dummy text goes here'
    },
    {
        id: 4,
        name: 'Reebok Track Jacket',
        price: 150,
        image: image4,
        moreImage: [image4, hat, trouser],
        sizes: ['s','xl'],
        color: ['red', 'yellow', 'green'],
        Brand:'Addidas',
        shortDes: 'Half Jacket + Skinny Trouser + Boot lether',
        des: 'lorem ipsum dummy text goes here.lorem ipsum dummy text goes herelorem ipsum dummy text goes herelorem ipsum dummy text goes here'
    },
    {
        id: 5,
        name: 'Reebok Track Jacket',
        price: 180,
        image: image4,
        shortDes:'Half Jacket + Skinny Trouser + Boot lether',
        moreImage:[image1,hat,trouser],
        sizes: ['s','m','xl'],
        color: ['red', 'blue', 'green'],
        Brand:'Nike',
        des:'lorem ipsum dummy text goes here.lorem ipsum dummy text goes herelorem ipsum dummy text goes herelorem ipsum dummy text goes here'
    },
    {
        id: 6,
        name: 'Reebok Track Jacket',
        price: 200,
        image: image1,
        moreImage: [image2, hat, trouser],
        sizes: ['s'],
        color: ['red', 'yellow', 'green'],
        Brand:'Reebok',
        shortDes: 'Half Jacket + Skinny Trouser + Boot lether',
        des: 'lorem ipsum dummy text goes here.lorem ipsum dummy text goes herelorem ipsum dummy text goes herelorem ipsum dummy text goes here'
    },
    {
        id: 7,
        name: 'Reebok Track Jacket',
        price: 170,
        image: image2,
        moreImage: [image1, hat, trouser],
        sizes: ['l','xl'],
        color: ['red', 'pink', 'green'],
        Brand:'Nike',
        shortDes: 'Half Jacket + Skinny Trouser + Boot lether',
        des: 'lorem ipsum dummy text goes here.lorem ipsum dummy text goes herelorem ipsum dummy text goes herelorem ipsum dummy text goes here'
    },
    {
        id: 8,
        name: 'Reebok Track Jacket',
        price: 230,
        image: image2,
        moreImage: [image4, hat, trouser],
        sizes: ['xl'],
        color: ['red', 'yellow', 'green'],
        Brand:'Active',
        shortDes: 'Half Jacket + Skinny Trouser + Boot lether',
        des: 'lorem ipsum dummy text goes here.lorem ipsum dummy text goes herelorem ipsum dummy text goes herelorem ipsum dummy text goes here'
    },
    {
        id: 9,
        name: 'Reebok Track Jacket',
        price: 180,
        image: image1,
        moreImage: [image2, hat, trouser],
        sizes: ['s','m','xl'],
        color: ['red', 'yellow', 'green'],
        Brand:'Reebok',
        shortDes: 'Half Jacket + Skinny Trouser + Boot lether',
        des: 'lorem ipsum dummy text goes here.lorem ipsum dummy text goes herelorem ipsum dummy text goes herelorem ipsum dummy text goes here'
    },
    {
        id: 10,
        name: 'Red-brown mans jacket',
        price: 170,
        image: image4,
        shortDes: 'Half Jacket + Skinny Trouser + Boot lether',
        moreImage: [image1, hat, trouser],
        sizes: ['s', 'm', 'l'],
        color: ['red', 'blue', 'green'],
        Brand:'Active',
        des: 'lorem ipsum dummy text goes here.lorem ipsum dummy text goes herelorem ipsum dummy text goes herelorem ipsum dummy text goes here'
    },
    {
        id: 11,
        name: 'Reebok Track Jacket',
        price: 220,
        image: image2,
        moreImage: [image4, hat, trouser],
        sizes: ['s','m','l','xl'],
        color: ['red', 'yellow', 'green'],
        Brand:'Addidas',
        shortDes: 'Half Jacket + Skinny Trouser + Boot lether',
        des: 'lorem ipsum dummy text goes here.lorem ipsum dummy text goes herelorem ipsum dummy text goes herelorem ipsum dummy text goes here'
    }, {
        id: 12,
        name: 'Reebok Track Jacket',
        price: 160,
        image: image3,
        moreImage: [image1, hat, trouser],
        sizes: ['s', 'xl'],
        color: ['red', 'pink', 'green'],
        Brand:'Active',
        shortDes: 'Half Jacket + Skinny Trouser + Boot lether',
        des: 'lorem ipsum dummy text goes here.lorem ipsum dummy text goes herelorem ipsum dummy text goes herelorem ipsum dummy text goes here'
    },
      {
            id: 13,
            name: 'FULL WINTER KIT',
            price: 130,
            image: image1,
            shortDes: 'Half Jacket + Skinny Trouser + Boot lether',
            moreImage: [image1, hat, trouser],
            sizes: ['s', 'l', 'xl'],
            color: ['red', 'blue', 'green'],
            Brand: 'Reebok',
            des: 'lorem ipsum dummy text goes here.lorem ipsum dummy text goes herelorem ipsum dummy text goes herelorem ipsum dummy text goes here'
        },
        {
            id: 14,
            name: 'One Man Shirt Red',
            price: 140,
            image: image2,
            moreImage: [image2, hat, trouser],
            sizes: ['s', 'm'],
            color: ['red', 'yellow', 'green'],
            Brand: 'Addidas',
            shortDes: 'Jacket + Skinny Pant + lether',
            des: 'lorem ipsum dummy text goes here.lorem ipsum dummy text goes herelorem ipsum dummy text goes herelorem ipsum dummy text goes here'
        },
        {
            id: 15,
            name: 'Jacket Track Reebok',
            price: 150,
            image: image1,
            moreImage: [image1, hat, trouser],
            sizes: ['l', 'xl'],
            color: ['red', 'pink', 'green'],
            Brand: 'Nike',
            shortDes: 'Special Cotton + Export Quality',
            des: 'lorem ipsum dummy text goes here.lorem ipsum dummy text goes herelorem ipsum dummy text goes herelorem ipsum dummy text goes here'
        },
        {
            id: 16,
            name: 'Reebok Track Jacket',
            price: 160,
            image: image4,
            moreImage: [image4, hat, trouser],
            sizes: ['s', 'xl'],
            color: ['red', 'yellow', 'green'],
            Brand: 'Addidas',
            shortDes: 'Half Jacket + Skinny Trouser + Boot lether',
            des: 'lorem ipsum dummy text goes here.lorem ipsum dummy text goes herelorem ipsum dummy text goes herelorem ipsum dummy text goes here'
        },
        {
            id: 17,
            name: 'Reebok Track Jacket',
            price: 170,
            image: image4,
            shortDes: 'Half Jacket + Skinny Trouser + Boot lether',
            moreImage: [image1, hat, trouser],
            sizes: ['s', 'm', 'xl'],
            color: ['red', 'blue', 'green'],
            Brand: 'Nike',
            des: 'lorem ipsum dummy text goes here.lorem ipsum dummy text goes herelorem ipsum dummy text goes herelorem ipsum dummy text goes here'
        },
        {
            id: 18,
            name: 'Reebok Track Jacket',
            price: 180,
            image: image1,
            moreImage: [image2, hat, trouser],
            sizes: ['s'],
            color: ['red', 'yellow', 'green'],
            Brand: 'Reebok',
            shortDes: 'Half Jacket + Skinny Trouser + Boot lether',
            des: 'lorem ipsum dummy text goes here.lorem ipsum dummy text goes herelorem ipsum dummy text goes herelorem ipsum dummy text goes here'
        },
        {
            id: 19,
            name: 'Reebok Track Jacket',
            price: 190,
            image: image2,
            moreImage: [image1, hat, trouser],
            sizes: ['l', 'xl'],
            color: ['red', 'pink', 'green'],
            Brand: 'Nike',
            shortDes: 'Half Jacket + Skinny Trouser + Boot lether',
            des: 'lorem ipsum dummy text goes here.lorem ipsum dummy text goes herelorem ipsum dummy text goes herelorem ipsum dummy text goes here'
        },
        {
            id: 20,
            name: 'Reebok Track Jacket',
            price: 200,
            image: image2,
            moreImage: [image4, hat, trouser],
            sizes: ['xl'],
            color: ['red', 'yellow', 'green'],
            Brand: 'Active',
            shortDes: 'Half Jacket + Skinny Trouser + Boot lether',
            des: 'lorem ipsum dummy text goes here.lorem ipsum dummy text goes herelorem ipsum dummy text goes herelorem ipsum dummy text goes here'
        },
        {
            id: 21,
            name: 'Reebok Track Jacket',
            price: 210,
            image: image1,
            moreImage: [image2, hat, trouser],
            sizes: ['s', 'm', 'xl'],
            color: ['red', 'yellow', 'green'],
            Brand: 'Reebok',
            shortDes: 'Half Jacket + Skinny Trouser + Boot lether',
            des: 'lorem ipsum dummy text goes here.lorem ipsum dummy text goes herelorem ipsum dummy text goes herelorem ipsum dummy text goes here'
        },
        {
            id: 22,
            name: 'Red-brown mans jacket',
            price: 220,
            image: image4,
            shortDes: 'Half Jacket + Skinny Trouser + Boot lether',
            moreImage: [image1, hat, trouser],
            sizes: ['s', 'm', 'l'],
            color: ['red', 'blue', 'green'],
            Brand: 'Active',
            des: 'lorem ipsum dummy text goes here.lorem ipsum dummy text goes herelorem ipsum dummy text goes herelorem ipsum dummy text goes here'
        },
        {
            id: 23,
            name: 'Reebok Track Jacket',
            price: 210,
            image: image2,
            moreImage: [image4, hat, trouser],
            sizes: ['s', 'm', 'l', 'xl'],
            color: ['red', 'yellow', 'green'],
            Brand: 'Addidas',
            shortDes: 'Half Jacket + Skinny Trouser + Boot lether',
            des: 'lorem ipsum dummy text goes here.lorem ipsum dummy text goes herelorem ipsum dummy text goes herelorem ipsum dummy text goes here'
        }, {
            id: 24,
            name: 'Reebok Track Jacket',
            price: 90,
            image: image3,
            moreImage: [image1, hat, trouser],
            sizes: ['s', 'xl'],
            color: ['red', 'pink', 'green'],
            Brand: 'Active',
            shortDes: 'Half Jacket + Skinny Trouser + Boot lether',
            des: 'lorem ipsum dummy text goes here.lorem ipsum dummy text goes herelorem ipsum dummy text goes herelorem ipsum dummy text goes here'
        },
        {
            id: 25,
            name: 'Reebok Track Jacket',
            price: 210,
            image: image2,
            moreImage: [image4, hat, trouser],
            sizes: ['s', 'm', 'l', 'xl'],
            color: ['red', 'yellow', 'green'],
            Brand: 'Addidas',
            shortDes: 'Half Jacket + Skinny Trouser + Boot lether',
            des: 'lorem ipsum dummy text goes here.lorem ipsum dummy text goes herelorem ipsum dummy text goes herelorem ipsum dummy text goes here'
        }, {
            id: 26,
            name: 'Reebok Track Jacket',
            price: 90,
            image: image3,
            moreImage: [image1, hat, trouser],
            sizes: ['s', 'xl'],
            color: ['red', 'pink', 'green'],
            Brand: 'Active',
            shortDes: 'Half Jacket + Skinny Trouser + Boot lether',
            des: 'lorem ipsum dummy text goes here.lorem ipsum dummy text goes herelorem ipsum dummy text goes herelorem ipsum dummy text goes here'
        },
]
export default fakeData