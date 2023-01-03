import {
  MdOutlineApartment,
  MdHouseSiding,
  MdOutlineWater,
  MdCabin,
} from 'react-icons/md';
import { BsSnow } from 'react-icons/bs';
import { BiHomeAlt } from 'react-icons/bi';
import {
  GiKidSlide,
  GiSpaceNeedle,
  GiCampingTent,
  GiLightningDome,
  GiEvilTree,
  GiWaveSurfer,
  GiMountainCave,
  GiCaveEntrance,
  GiGolfFlag,
} from 'react-icons/gi';
import { AiOutlineCoffee } from 'react-icons/ai';
import { FaCampground, FaUmbrellaBeach, FaSwimmingPool } from 'react-icons/fa';
import { RiEarthquakeFill } from 'react-icons/ri';

export const locationsTab = [
  { id: 1, label: 'Design', icon: <MdOutlineApartment size={24} /> },
  { id: 2, label: 'Arctic', icon: <BsSnow size={24} /> },
  { id: 3, label: 'Shared Homes', icon: <MdHouseSiding size={24} /> },
  { id: 4, label: 'LakeFront', icon: <MdOutlineWater size={24} /> },
  { id: 5, label: 'National Parks', icon: <GiKidSlide size={24} /> },
  { id: 6, label: 'Bed & Breakfast ', icon: <AiOutlineCoffee size={24} /> },
  { id: 7, label: 'OMG!', icon: <GiSpaceNeedle size={24} /> },
  { id: 8, label: 'Camping', icon: <FaCampground size={24} /> },
  { id: 9, label: 'A-frames', icon: <GiCampingTent size={24} /> },
  { id: 10, label: 'Domes', icon: <GiLightningDome size={24} /> },
  { id: 11, label: 'Tiny Homes', icon: <BiHomeAlt size={24} /> },
  { id: 12, label: 'Treehouses', icon: <GiEvilTree size={24} /> },
  { id: 13, label: 'Surfing', icon: <GiWaveSurfer size={24} /> },
  { id: 14, label: 'CountrySide', icon: <GiMountainCave size={24} /> },
  { id: 15, label: 'Caves', icon: <GiCaveEntrance size={24} /> },
  { id: 16, label: 'Golfing', icon: <GiGolfFlag size={24} /> },
  { id: 17, label: 'Cabins', icon: <MdCabin size={24} /> },
  { id: 18, label: 'Earth Homes', icon: <RiEarthquakeFill size={24} /> },
  { id: 19, label: 'Tropical', icon: <FaUmbrellaBeach size={24} /> },
  { id: 20, label: 'Amazing Pools', icon: <FaSwimmingPool size={24} /> },
];

export const towns = [
  {
    id: 1,
    locationImages: [
      {
        id: 1,
        url: 'https://images.unsplash.com/photo-1661332626584-2ef99ddd6794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80',
      },
      {
        id: 2,
        url: 'https://images.unsplash.com/photo-1653408400816-af6dba0c9432?auto=format&fit=crop&w=400&h=250&q=60',
      },
      {
        id: 3,
        url: 'https://images.unsplash.com/photo-1653312727964-736f11663ef6?auto=format&fit=crop&w=400&h=250&q=80',
      },
      {
        id: 4,
        url: 'https://images.unsplash.com/photo-1629447236132-22c57cd0f0bf?auto=format&fit=crop&w=400&h=250&q=60',
      },
    ],
    location: 'Abeokuta, Nigeria',
    days: 'Oct 2-9',
    price: '₦14,999',
    isNew: true,
    rating: 3.0,
    cord: {lat:7.1475, lng:3.3619}
  },
  {
    id: 2,
    locationImages: [
      {
        id: 1,
        url: 'https://images.unsplash.com/photo-1633605962190-b2ee3986097c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      },
      {
        id: 2,
        url: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=400&h=250&q=60',
      },
      {
        id: 3,
        url: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=400&h=250&q=80',
      },
      {
        id: 4,
        url: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=400&h=250&q=60',
      },
    ],
    location: 'Yaba Catheral Lagos',
    days: 'Sep 2-11',
    price: '₦3000',
    isNew: false,
    rating: 4.99,
    cord: {lat:6.5040, lng:3.3771}
  },
  {
    id: 3,
    locationImages: [
      {
        id: 1,
        url: 'https://mauro.imgix.net/https%3A%2F%2Fimages.unsplash.com%2Fphoto-1639774275026-5e6b08e48a45%3Fixlib%3Drb-4.0.3%26ixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26auto%3Dformat%26fit%3Dcrop%26w%3D2940%26q%3D80?s=04e0d07e03a34c1510a60a2ce1eb1180',
      },
      {
        id: 2,
        url: 'https://images.unsplash.com/photo-1586348943529-beaae6c28db9?auto=format&fit=crop&w=400&h=250&q=60',
      },
      {
        id: 3,
        url: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=400&h=250&q=80',
      },
      {
        id: 4,
        url: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=400&h=250&q=60',
      },
    ],
    location: 'Okene, Kogi, Nigeria',
    days: 'Nov 19-22',
    price: '₦1,129',
    isNew: true,
    rating: 4.6,
    cord: {lat:7.5614, lng:6.2429}
  },
  {
    id: 4,
    locationImages: [
      {
        id: 1,
        url: 'https://mauro.imgix.net/https%3A%2F%2Fimages.unsplash.com%2Fphoto-1643297550622-f800a238d348%3Fixlib%3Drb-4.0.3%26ixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26auto%3Dformat%26fit%3Dcrop%26w%3D2198%26q%3D80?s=fdbb8283052976292e85b06fd85fe324',
      },
      {
        id: 2,
        url: 'https://images.unsplash.com/photo-1475113548554-5a36f1f523d6?auto=format&fit=crop&w=400&h=250&q=60',
      },
      {
        id: 3,
        url: 'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=400&h=250&q=80',
      },
      {
        id: 4,
        url: 'https://images.unsplash.com/photo-1505144808419-1957a94ca61e?auto=format&fit=crop&w=400&h=250&q=60',
      },
    ],
    location: 'Akure South, Nigeria',
    days: 'Sep 13-18',
    price: '₦208',
    isNew: false,
    rating: 4.2,
    cord: {lat:7.2146, lng:5.1641}
  },
  {
    id: 5,
    locationImages: [
      {
        id: 1,
        url: 'https://images.unsplash.com/photo-1643297550841-1386b3a10612?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1906&q=80',
      },
      {
        id: 2,
        url: 'https://images.unsplash.com/photo-1604537529428-15bcbeecfe4d?auto=format&fit=crop&w=400&h=250&q=60',
      },
      {
        id: 3,
        url: 'https://images.unsplash.com/photo-1587502537104-aac10f5fb6f7?auto=format&fit=crop&w=400&h=250&q=80',
      },
      {
        id: 4,
        url: 'https://images.unsplash.com/photo-1587502537815-0c8b5c9ba39a?auto=format&fit=crop&w=400&h=250&q=60',
      },
    ],
    location: 'Akure, Nigeria',
    days: 'Aug 1-6',
    price: '₦243',
    isNew: true,
    rating: 4.1,
    cord: {lat:7.2571, lng:5.2058}
  },
  {
    id: 6,
    locationImages: [
      {
        id: 1,
        url: 'https://images.unsplash.com/photo-1585011191285-8b443579631c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2910&q=80',
      },
      {
        id: 2,
        url: 'https://images.unsplash.com/photo-1470770903676-69b98201ea1c?auto=format&fit=crop&w=400&h=250&q=60',
      },
      {
        id: 3,
        url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=400&h=250&q=80',
      },
      {
        id: 4,
        url: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=400&h=250&q=60',
      },
    ],
    location: 'Lagos, Nigeria',
    days: 'Oct 9-15',
    price: '₦698',
    isNew: false,
    rating: 4.6,
    cord: {lat:6.5244, lng:3.3792}
  },
  {
    id: 7,
    locationImages: [
      {
        id: 1,
        url: 'https://images.unsplash.com/photo-1639589242688-4d1c3e9ec713?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      },
      {
        id: 2,
        url: 'https://images.unsplash.com/photo-1499002238440-d264edd596ec?auto=format&fit=crop&w=400&h=250&q=60',
      },
      {
        id: 3,
        url: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=400&h=250&q=80',
      },
      {
        id: 4,
        url: 'https://images.unsplash.com/photo-1462216589242-9e3e00a47a48?auto=format&fit=crop&w=400&h=250&q=60',
      },
    ],
    location: 'Ibadan, Nigeria',
    days: 'June 7-12',
    price: '₦467',
    isNew: true,
    rating: 4.7,
    cord: {lat:7.3775, lng:3.9470}
  },
  {
    id: 8,
    locationImages: [
      {
        id: 1,
        url: 'https://images.unsplash.com/photo-1531300365552-da5abe58a725?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2198&q=80',
      },
      {
        id: 2,
        url: 'https://images.unsplash.com/photo-1516205651411-aef33a44f7c2?auto=format&fit=crop&w=400&h=250&q=60',
      },
      {
        id: 3,
        url: 'https://images.unsplash.com/photo-1496256654245-8f3d0ef3bebe?auto=format&fit=crop&w=400&h=250&q=80',
      },
      {
        id: 4,
        url: 'https://images.unsplash.com/photo-1504392022767-a8fc0771f239?auto=format&fit=crop&w=400&h=250&q=60',
      },
    ],
    location: 'Akiogun Road, Maroko, Lagos, Nigeria',
    days: 'Jun 11-16',
    price: '₦1,767',
    isNew: false,
    rating: 4.8,
    cord: {lat:6.4302, lng:3.4502}
  },
  {
    id: 9,
    locationImages: [
      {
        id: 1,
        url: 'https://images.unsplash.com/photo-1640475168872-4d8635675fc1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80',
      },
      {
        id: 2,
        url: 'https://images.unsplash.com/photo-1600240644455-3edc55c375fe?auto=format&fit=crop&w=400&h=250&q=60',
      },
      {
        id: 3,
        url: 'https://images.unsplash.com/reserve/bOvf94dPRxWu0u3QsPjF_tree.jpg?auto=format&fit=crop&w=400&h=250&q=80',
      },
      {
        id: 4,
        url: 'https://images.unsplash.com/photo-1486912500284-6f2462ba07ea?auto=format&fit=crop&w=400&h=250&q=60',
      },
    ],
    location: 'Lagos, Nigeria',
    days: 'Jul 1-6',
    price: '₦910',
    isNew: true,
    rating: 4.3,
    cord: {lat:6.6018, lng:3.3515}
  },
  {
    id: 10,
    locationImages: [
      {
        id: 1,
        url: 'https://images.unsplash.com/photo-1633019485790-622e70a35be0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80',
      },
      {
        id: 2,
        url: 'https://images.unsplash.com/photo-1444464666168-49d633b86797?auto=format&fit=crop&w=400&h=250&q=60',
      },
      {
        id: 3,
        url: 'https://images.unsplash.com/photo-1526137844794-45f1041f397a?auto=format&fit=crop&w=400&h=250&q=80',
      },
      {
        id: 4,
        url: 'https://images.unsplash.com/photo-1476209446441-5ad72f223207?auto=format&fit=crop&w=400&h=250&q=60',
      },
    ],
    location: 'Lagos, Nigeria',
    days: 'Jun 12-18',
    price: '₦629',
    isNew: false,
    rating: 4.6,
    cord: {lat:6.4926, lng:3.3490}
  },
  {
    id: 11,
    locationImages: [
      {
        id: 1,
        url: 'https://images.unsplash.com/photo-1640475168644-523750a1dda9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80',
      },
      {
        id: 2,
        url: 'https://images.unsplash.com/photo-1531756716853-09a60d38d820?auto=format&fit=crop&w=400&h=250&q=60',
      },
      {
        id: 3,
        url: 'https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=400&h=250&q=80',
      },
      {
        id: 4,
        url: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=400&h=250&q=60',
      },
    ],
    location: 'Lagos, Nigeria',
    days: 'Nov 2-7',
    price: '₦2,595',
    isNew: false,
    rating: 4.1,
    cord: {lat:6.6194, lng:3.5105}
  },
  {
    id: 12,
    locationImages: [
      {
        id: 1,
        url: 'https://images.unsplash.com/photo-1661332628354-3ec604f4411d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      },
      {
        id: 2,
        url: 'https://images.unsplash.com/photo-1477511801984-4ad318ed9846?auto=format&fit=crop&w=400&h=250&q=60',
      },
      {
        id: 3,
        url: 'https://images.unsplash.com/photo-1564574662330-73fb2940ff5d?auto=format&fit=crop&w=400&h=250&q=80',
      },
      {
        id: 4,
        url: 'https://images.unsplash.com/photo-1564415637254-92c66292cd64?auto=format&fit=crop&w=400&h=250&q=60',
      },
    ],
    location: 'Lagos, Nigeria',
    days: 'Jun 3-4',
    price: '₦4,467',
    isNew: false,
    rating: 4.2,
    cord: {lat:6.5355, lng:3.3087}
  },
  {
    id: 13,
    locationImages: [
      {
        id: 1,
        url: 'https://images.unsplash.com/photo-1640475167310-9112316627fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80',
      },
      {
        id: 2,
        url: 'https://images.unsplash.com/photo-1517639493569-5666a7b2f494?auto=format&fit=crop&w=400&h=250&q=60',
      },
      {
        id: 3,
        url: 'https://images.unsplash.com/photo-1605708896118-957f660c1555?auto=format&fit=crop&w=400&h=250&q=80',
      },
      {
        id: 4,
        url: 'https://images.unsplash.com/photo-1497449493050-aad1e7cad165?auto=format&fit=crop&w=400&h=250&q=60',
      },
    ],
    location: 'Lagos, Nigeria',
    days: 'Sep 22-25',
    price: '₦358',
    isNew: true,
    rating: 4.5,
    cord: {lat:6.5352, lng:3.3490}
  },
  {
    id: 14,
    locationImages: [
      {
        id: 1,
        url: 'https://images.unsplash.com/photo-1593717191400-84f38ee95485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2256&q=80',
      },
      {
        id: 2,
        url: 'https://images.unsplash.com/photo-1494548162494-384bba4ab999?auto=format&fit=crop&w=400&h=250&q=60',
      },
      {
        id: 3,
        url: 'https://images.unsplash.com/photo-1445262102387-5fbb30a5e59d?auto=format&fit=crop&w=400&h=250&q=80',
      },
      {
        id: 4,
        url: 'https://images.unsplash.com/photo-1533387520709-752d83de3630?auto=format&fit=crop&w=400&h=250&q=60',
      },
    ],
    location: 'Victoria Island, Lagos, Nigeria',
    days: 'Nov 4-10',
    price: '₦777',
    isNew: true,
    rating: 4.8,
    cord: {lat:6.5631, lng:3.2506}
  },
  {
    id: 15,
    locationImages: [
      {
        id: 1,
        url: 'https://images.unsplash.com/photo-1661332629275-c452edf89928?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',
      },
      {
        id: 2,
        url: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&h=250&q=60',
      },
      {
        id: 3,
        url: 'https://images.unsplash.com/photo-1544892504-5a42d285ab6f?auto=format&fit=crop&w=400&h=250&q=80',
      },
      {
        id: 4,
        url: 'https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?auto=format&fit=crop&w=400&h=250&q=60',
      },
    ],
    location: 'Oyo, Nigeria, Oyo, Nigeria',
    days: 'Sep 25-Oct 2',
    price: '₦2,999',
    isNew: true,
    rating: 4.88,
    cord: {lat:6.5790, lng:3.3495}
  },
  {
    id: 16,
    locationImages: [
      {
        id: 1,
        url: 'https://images.unsplash.com/photo-1628353100859-d2fb3c142234?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      },
      {
        id: 2,
        url: 'https://images.unsplash.com/photo-1502472584811-0a2f2feb8968?auto=format&fit=crop&w=400&h=250&q=60',
      },
      {
        id: 3,
        url: 'https://images.unsplash.com/photo-1535463731090-e34f4b5098c5?auto=format&fit=crop&w=400&h=250&q=80',
      },
      {
        id: 4,
        url: 'https://images.unsplash.com/photo-1495571758719-6ec1e876d6ae?auto=format&fit=crop&w=400&h=250&q=60',
      },
    ],
    location: 'Maryland, Lagos, Nigeria',
    days: 'Oct 4-9',
    price: '₦500',
    isNew: false,
    rating: 4.2,
    cord: {lat:6.4926, lng:3.3490}
  },
  {
    id: 17,
    locationImages: [
      {
        id: 1,
        url: 'https://images.unsplash.com/photo-1562793631-9e5606438520?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',
      },
      {
        id: 2,
        url: 'https://images.unsplash.com/photo-1446034295857-c39f8844fad4?auto=format&fit=crop&w=400&h=250&q=60',
      },
      {
        id: 3,
        url: 'https://images.unsplash.com/photo-1504803900752-c2051699d0e8?auto=format&fit=crop&w=400&h=250&q=80',
      },
      {
        id: 4,
        url: 'https://images.unsplash.com/photo-1528184039930-bd03972bd974?auto=format&fit=crop&w=400&h=250&q=60',
      },
    ],
    location: '741 Adeola Hopewell St, Victoria Island, Lagos, Nigeria',
    days: 'March 2-9',
    price: '₦3,369',
    isNew: false,
    rating: 4.1,
    cord: {lat:6.4281, lng:3.4219}
  },
  {
    id: 18,
    locationImages: [
      {
        id: 1,
        url: 'https://images.unsplash.com/photo-1606002878071-ecfc09a979e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',
      },
      {
        id: 2,
        url: 'https://images.unsplash.com/photo-1519821172144-4f87d85de2a1?auto=format&fit=crop&w=400&h=250&q=60',
      },
      {
        id: 3,
        url: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=400&h=250&q=80',
      },
      {
        id: 4,
        url: 'https://images.unsplash.com/photo-1562095241-8c6714fd4178?auto=format&fit=crop&w=400&h=250&q=60',
      },
    ],
    location: 'Abuja, Abuja, Nigeria',
    days: 'Oct 28-Nov 4',
    price: '₦2511',
    isNew: true,
    rating: 4.5,
    cord: {lat:9.0765, lng:7.3986}
  },
  {
    id: 19,
    locationImages: [
      {
        id: 1,
        url: 'https://images.unsplash.com/photo-1536467638680-868f39ec91d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',
      },
      {
        id: 2,
        url: 'https://images.unsplash.com/photo-1510525009512-ad7fc13eefab?auto=format&fit=crop&w=400&h=250&q=60',
      },
      {
        id: 3,
        url: 'https://images.unsplash.com/photo-1485067801970-70573e3f77d0?auto=format&fit=crop&w=400&h=250&q=80',
      },
      {
        id: 4,
        url: 'https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?auto=format&fit=crop&w=400&h=250&q=60',
      },
    ],
    location: 'Unnamed Road, Awo-Omamma, Nigeria',
    days: 'Jun 11-16',
    price: '₦3200',
    isNew: true,
    rating: 4.7,
    cord: {lat:5.5720, lng:7.0588}
  },
  {
    id: 20,
    locationImages: [
      {
        id: 1,
        url: 'https://images.unsplash.com/photo-1521111998-ef042c1931fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
      },
      {
        id: 2,
        url: 'https://images.unsplash.com/photo-1524338198850-8a2ff63aaceb?auto=format&fit=crop&w=400&h=250&q=60',
      },
      {
        id: 3,
        url: 'https://images.unsplash.com/photo-1494280986787-c49b328829dd?auto=format&fit=crop&w=400&h=250&q=80',
      },
      {
        id: 4,
        url: 'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&w=400&h=250&q=60',
      },
    ],
    location: 'Lagos, Nigeria',
    days: 'Oct 2-9',
    price: '₦14,999',
    isNew: false,
    rating: 4.5,
    cord: {lat:6.4646, lng:3.5725}

  },
];
