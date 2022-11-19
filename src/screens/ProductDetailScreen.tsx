import {StyleSheet, View,Text, ScrollView} from 'react-native';
import {GlobalVariables} from '../Styles/GlobalStyles';
import RootLayout from "../components/layouts/RootLayout";

const product: any = {
  id: 15,
  createdAt: '2022-11-06T15:11:54.675Z',
  updatedAt: '2022-11-07T16:03:31.026Z',
  name: 'iphone 13 pro max',
  price: 153000,
  desc: '<ol><li>Iphone 13 pro max</li><li>64 megapixel</li><li>128 gb storage</li><li>8 gb ram</li></ol>',
  groupId: null,
  active: true,
  quantity: 28,
  vendorId: 9,
  userId: 17,
  unit: 'piece',
  productTags: [
    {
      id: 48,
      createdAt: '2022-11-06T15:25:57.643Z',
      updatedAt: '2022-11-06T15:25:57.644Z',
      tagId: 17,
      productId: 15,
      tag: {
        id: 17,
        createdAt: '2022-10-28T06:23:59.957Z',
        updatedAt: '2022-10-28T06:23:59.958Z',
        name: 'Electronic Devices',
        desc: null,
      },
    },
  ],
  vendor: {
    id: 9,
    createdAt: '2022-10-29T13:51:51.825Z',
    updatedAt: '2022-10-29T13:51:51.826Z',
    email: 'chiragthapa777@gmail.com',
    name: "Chirag's Store",
    pan: '23322362',
    desc: 'This is my store. I only sell original stuff.',
    active: true,
    requestAccepted: true,
  },
  questions: [],
  images: [
    {
      id: 17,
      createdAt: '2022-11-06T15:11:54.745Z',
      updatedAt: '2022-11-06T15:11:54.746Z',
      url: 'https://res.cloudinary.com/dnnqnwwsp/image/upload/v1667747410/pasal/odgixicaelsi5vuol6bs.jpg',
      public_url: 'pasal/odgixicaelsi5vuol6bs',
      productId: 15,
      desc: 'iphone 13 pro max',
    },
  ],
  discounts: [],
  reviews: [],
  _count: {
    reviews: 0,
    questions: 0,
  },
  averageRating: 0,
};

function ProductDetailScreen({navigation}:any) {
  return (
    <RootLayout navigation={navigation}>
      <Text>Product</Text>
    </RootLayout>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '48%',
    backgroundColor: GlobalVariables.base100,
    margin: 3,
    borderRadius: 10,
    elevation: 1,
  },
});

export default ProductDetailScreen;
