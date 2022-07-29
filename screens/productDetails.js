import React, {useEffect, useState} from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import backgroundImage from '../assets/images/bg.jpg';

function ProductDetails({navigation, route}) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (route.params && route.params.productDetails) {
      setProducts([route.params.productDetails]);
    } else {
      navigation.navigate('Home');
    }
  }, []);
  return (
    <>
      <View style={styles.main}>
        <ImageBackground
          source={backgroundImage}
          resizeMode="cover"
          style={styles.bgImage}>
          {products.length ? (
            <>
              <View style={styles.header}>
                <Text style={styles.headerText}>Product Details</Text>
              </View>

              <View style={styles.cardDiv}>
                <View style={styles.card}>
                  <View style={styles.titleDiv}>
                    <Text style={styles.titleText}>{products[0].title}</Text>
                  </View>
                  <View style={styles.imageDiv}>
                    <Image
                      source={{uri: products[0].image}}
                      style={styles.img}
                    />
                  </View>
                  <View style={styles.descriptionDiv}>
                    <ScrollView>
                      <Text style={styles.descText}>
                        {products[0].description}
                      </Text>
                    </ScrollView>
                  </View>
                  <View style={styles.priceDiv}>
                    <Text style={styles.dollarIcon}>
                      <MaterialIcons
                        name="attach-money"
                        size={28}
                        color="red"
                      />
                    </Text>
                    <Text style={styles.priceText}>{products[0].price}</Text>
                  </View>
                </View>
              </View>
            </>
          ) : null}
        </ImageBackground>
      </View>
    </>
  );
}

export default ProductDetails;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    // borderWidth: 2,
  },
  bgImage: {
    flex: 1,
  },
  header: {
    flex: 0.1,
    // borderWidth: 1,
    // borderColor: 'red',
    justifyContent: 'center',
    paddingLeft: 10,
  },
  headerText: {
    color: 'orange',
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  cardDiv: {
    flex: 1,
    // borderWidth: 1,
    // borderColor: 'yellow',
  },
  card: {
    flex: 1,
    // borderWidth: 2,
    // borderColor: 'blue',
    borderRadius: 15,
    // height: 200,
    // backgroundColor: 'white',
    opacity: 1,
    margin: 8,
    // flexDirection: 'row',
  },
  titleDiv: {
    // borderWidth: 1,
    marginTop: 5,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.17,
  },
  titleText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  imageDiv: {
    // borderWidth: 2,
    flex: 0.45,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  img: {
    width: 180,
    height: 180,
  },
  descriptionDiv: {
    // borderWidth: 1,
    flex: 0.2,
    // marginTop: 5,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 5,
    paddingTop: 5,
    paddingLeft: 3,
    // paddingBottom: 3,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  descText: {
    // borderWidth: 2,
    color: 'white',
    fontSize: 13,
    textAlign: 'justify',
    lineHeight: 18,
    // alignSelf: 'center',
  },
  priceDiv: {
    // borderWidth: 2,
    flex: 0.15,
    flexDirection: 'row',
    marginLeft: 5,
    marginRight: 5,
    alignItems: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dollarIcon: {
    marginLeft: 5,
    color: 'white',
  },
  priceText: {
    color: 'yellow',
    fontWeight: 'bold',
    fontSize: 28,
  },
});
