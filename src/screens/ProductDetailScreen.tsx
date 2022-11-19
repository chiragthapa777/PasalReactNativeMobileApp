import {StyleSheet, View, Text, Image, Pressable} from 'react-native';
import {GlobalVariables} from '../Styles/GlobalStyles';
import RootLayout from '../components/layouts/RootLayout';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// @ts-ignore
import Stars from 'react-native-stars';

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

function ProductImage({images}: any) {
  console.log(images);
  return (
    <View
      style={{
        width: '100%',
        height: 320,
        backgroundColor: GlobalVariables.base100,
        padding: 3,
      }}>
      <Image
        style={{
          width: '100%',
          height: '100%',
        }}
        resizeMode="contain"
        source={{
          uri: images[0].url,
        }}
      />
    </View>
  );
}
// eslint-disable-next-line @typescript-eslint/no-shadow
function ProductDetail({product}: any) {
  return (
    <View
      style={{
        // minHeight: 400,
        padding: 10,
        backgroundColor: GlobalVariables.base100,
        borderRadius: 15,
        elevation: 10,
        shadowColor: GlobalVariables.base400,
      }}>
      <Text
        style={{
          color: GlobalVariables.primary,
          fontWeight: 'bold',
          fontSize: GlobalVariables.textXl,
          margin: 5,
          marginVertical: 10,
        }}>
        {product.name}
      </Text>
      {/*STAR starts*/}
      <View
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <Stars
          default={1.5}
          disabled={true}
          spacing={2}
          count={5}
          half={true}
          starSize={50}
          fullStar={
            <Icon name={'star'} size={20} style={[styles.myStarStyle]} />
          }
          emptyStar={
            <Icon
              name={'star-o'}
              size={20}
              style={[styles.myStarStyle, styles.myEmptyStarStyle]}
            />
          }
          halfStar={
            <Icon
              name={'star-half-empty'}
              size={20}
              style={[styles.myStarStyle]}
            />
          }
        />
        <Text
          style={{
            color: GlobalVariables.baseText,
            fontSize: GlobalVariables.textXs,
          }}>
          3 reviews | 4 questions
        </Text>
      </View>
      {/*STAR ends*/}

      {/*Divider*/}
      <View
        style={{
          backgroundColor: GlobalVariables.base200,
          width: '100%',
          height: 1,
          marginVertical: 10,
        }}
      />

      {/*  CAT & VENDOR*/}
      <View>
        <View
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <Text
            style={{
              color: GlobalVariables.baseText,
              fontSize: GlobalVariables.textMd,
            }}>
            Vendor :
          </Text>
          <View
            style={{
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'center',
              flexDirection: 'row',
              flexWrap: 'wrap',
            }}>
            {/*badge*/}
            <Pressable
              style={{
                backgroundColor: GlobalVariables.primary,
                margin: 3,
                padding: 4,
                paddingHorizontal: 7,
                borderRadius: 3,
                shadowColor: GlobalVariables.primaryLight,
                elevation: 5,
                marginLeft: 5,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <MaterialCommunityIcons
                name={'store'}
                size={16}
                style={{
                  color: GlobalVariables.primaryText,
                  marginRight: 3,
                }}
              />
              <Text
                style={{
                  color: GlobalVariables.primaryText,
                  backgroundColor: GlobalVariables.primary,
                  fontSize: GlobalVariables.textSm,
                }}>
                {product.vendor.name}
              </Text>
            </Pressable>
          </View>
        </View>
        {/*Categores*/}
        <View
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            flexDirection: 'row',
            marginTop: 5,
          }}>
          <Text
            style={{
              color: GlobalVariables.baseText,
              fontSize: GlobalVariables.textMd,
            }}>
            Categories :
          </Text>
          <View
            style={{
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'center',
              flexDirection: 'row',
              flexWrap: 'wrap',
            }}>
            {/*badge*/}
            <Pressable
              style={{
                backgroundColor: 'rgba(52, 52, 52, 0)',
                margin: 3,
                padding: 3,
                paddingHorizontal: 7,
                borderRadius: 3,
                marginLeft: 5,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                borderColor: GlobalVariables.primary,
                borderWidth: 1,
              }}>
              <MaterialIcons
                name={'category'}
                size={16}
                style={{
                  color: GlobalVariables.primary,
                  marginRight: 3,
                }}
              />
              <Text
                style={{
                  color: GlobalVariables.primary,
                  fontSize: GlobalVariables.textSm,
                }}>
                {product.vendor.name}
              </Text>
            </Pressable>
          </View>
        </View>
        {/*Divider*/}
        <View
          style={{
            backgroundColor: GlobalVariables.base200,
            width: '100%',
            height: 1,
            marginVertical: 10,
          }}
        />
        {/*  Price quantity Btn*/}
        <Text
          style={{
            color: GlobalVariables.baseText,
            fontSize: GlobalVariables.textXxl,
            fontWeight: 'bold',
            marginBottom: 4,
          }}>
          Rs.{product.price}
        </Text>
      </View>
    </View>
  );
}

function ProductDetailScreen({navigation}: any) {
  return (
    <>
      <RootLayout navigation={navigation}>
        <ProductImage images={product.images} />
        <View
          style={{
            padding: 10,
            paddingHorizontal: 15,
          }}>
          <ProductDetail product={product} />
        </View>
      </RootLayout>
      <Pressable
        style={({pressed}) => [
          {
            backgroundColor: pressed
              ? GlobalVariables.primaryLight
              : GlobalVariables.primary,
          },
          {
            padding: 17,
            position: 'absolute',
            bottom: 30,
            right: 20,
            borderRadius: 50,
            zIndex: 100,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            shadowColor: GlobalVariables.primaryLight,
            elevation: 17,
          },
        ]}>
        <MaterialCommunityIcons
          name={'cart-plus'}
          size={25}
          style={{
            color: GlobalVariables.primaryText,
            marginRight: 3,
          }}
        />
      </Pressable>
    </>
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
  myStarStyle: {
    color: '#FFD700',
    backgroundColor: 'transparent',
    textShadowColor: GlobalVariables.base300,
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 2,
  },
  myEmptyStarStyle: {
    color: '#FFD700',
  },
});

export default ProductDetailScreen;
