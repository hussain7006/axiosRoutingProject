import axios from 'axios';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import ContentLoader, {Facebook} from 'react-content-loader';
import {
  Button,
  Image,
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import backgroundImage from '../assets/images/bg.jpg';

function Home({navigation}) {
  // const goToProductDetails = () => {
  //   navigation.navigate('ProductDetails');
  // };

  const [products, setProducts] = useState([]);

  // const MyLoader = () => (
  //   <ContentLoader viewBox="0 0 380 70">
  //     {/* Only SVG shapes */}
  //     <rect x="0" y="0" rx="5" ry="5" width="70" height="70" />
  //     <rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
  //     <rect x="80" y="40" rx="3" ry="3" width="250" height="10" />
  //   </ContentLoader>
  // );

  // const MyFacebookLoader = () => <Facebook />;

  const showCurrentProductDetails = (productDetails, index) => {
    console.log(productDetails);
    navigation.navigate('ProductDetails', {productDetails: productDetails});
  };

  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products')
      .then(res => {
        // console.log('hussain');
        // console.log(res.data);
        setProducts(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <>
      {/* <Button title="Product Details" onPress={goToProductDetails}></Button> */}
      <View style={styles.main}>
        <ImageBackground
          source={backgroundImage}
          resizeMode="cover"
          style={styles.bgImage}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Products</Text>
          </View>

          <View style={styles.cardDiv}>
            {products.length ? (
              <ScrollView>
                {products.map((e, i) => (
                  <Pressable
                    key={i}
                    style={styles.card}
                    onPress={() => showCurrentProductDetails(e, i)}>
                    <View style={styles.left}>
                      <Image
                        source={{uri: products[i].image}}
                        style={{width: 170, height: 170}}
                      />
                    </View>
                    <View style={styles.right}>
                      <View style={styles.titleDiv}>
                        <Text style={styles.titleText}>
                          {products[i].title}
                        </Text>
                      </View>
                      <View style={styles.descriptionDiv}>
                        <Text
                          style={styles.descText}
                          ellipsizeMode="tail"
                          numberOfLines={3}>
                          {products[i].description}
                        </Text>
                      </View>
                      <View style={styles.categoryDiv}>
                        {/* <Text style={styles.CategoryHeading}>Category:</Text> */}
                        <Text style={styles.CategoryText}>
                          {products[i].category}
                        </Text>
                      </View>
                      <View style={styles.priceDiv}>
                        <Text style={styles.dollarIcon}>
                          <Icon name="attach-money" size={18} color="black" />
                        </Text>
                        <Text style={styles.priceText}>
                          {products[i].price}
                        </Text>
                      </View>
                    </View>
                  </Pressable>
                ))}
              </ScrollView>
            ) : null}
          </View>
        </ImageBackground>
      </View>
    </>
  );
}
export default Home;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    borderWidth: 2,
  },
  bgImage: {
    flex: 1,
  },
  header: {
    flex: 0.1,
    // borderWidth: 1,
    // borderColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    // paddingLeft: 10,
    marginBottom: 10,
  },
  headerText: {
    color: 'orange',
    fontSize: 40,
    fontWeight: 'bold',
  },
  cardDiv: {
    flex: 1,
    // borderWidth: 1,
  },
  card: {
    // borderWidth: 1,
    // borderColor: 'blue',
    borderRadius: 15,
    height: 200,
    backgroundColor: 'white',
    opacity: 1,
    margin: 5,
    flexDirection: 'row',
  },
  left: {
    flex: 1,
    // borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  right: {
    flex: 1,
    flexDirection: 'column',
  },
  titleDiv: {
    // borderWidth: 1,
    marginTop: 5,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.4,
  },
  titleText: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'left',
  },
  descriptionDiv: {
    // borderWidth: 1,
    flex: 0.25,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 5,
    paddingLeft: 3,
    paddingBottom: 3,
  },
  descText: {
    color: 'black',
    fontSize: 10,
  },
  categoryDiv: {
    // borderWidth: 1,
    flex: 0,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 5,
  },
  CategoryHeading: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 10,
  },
  CategoryText: {
    color: 'green',
    fontSize: 12,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  priceDiv: {
    // borderWidth: 2,
    flex: 0.25,
    flexDirection: 'row',
    marginLeft: 5,
    marginRight: 5,
    alignItems: 'center',
  },
  dollarIcon: {
    marginLeft: 5,
  },
  priceText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
