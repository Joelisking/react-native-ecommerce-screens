import { useState } from 'react';
import {
  Button,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

const image = require('../assets/home.jpg');

export default function Home({ navigation }) {
  const [bottomFieldVisible, setBottomFieldVisible] = useState(false);

  const toggleBottomField = () => {
    setBottomFieldVisible(!bottomFieldVisible);
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <SafeAreaView>
          <Text style={styles.heroText}>Renovate your interior</Text>
          <View style={styles.button}>
            <Button
              onPress={toggleBottomField}
              title="Go to catalog"
              color="black"
            />
          </View>
        </SafeAreaView>
        {bottomFieldVisible && (
          <View style={styles.bottomField}>
            <View style={styles.bottomFieldHorizontal}>
              <Text style={styles.bottomFieldHeading}>Popular Products</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('Index', { name: 'Index' })}
                style={styles.viewAllButton}>
                <View style={styles.viewAllWrapper}>
                  <Text style={styles.viewAll}>View All</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.imageContainer}>
              <View style={styles.bottomFieldImageWrapper}>
                <Image
                  source={require('../assets/img3-whitebg.jpg')}
                  style={styles.bottomFieldImage}
                />
                <Text style={styles.productName}>Wooden Bar Stool</Text>
                <Text style={styles.productPrice}>$60.00</Text>
              </View>

              <View style={styles.bottomFieldImageWrapper}>
                <Image
                  source={require('../assets/img4-white.jpg')}
                  style={styles.bottomFieldImage}
                />
                <Text style={styles.productName}>Wooden Studio Stool</Text>
                <Text style={styles.productPrice}>$105.00</Text>
              </View>
            </View>
          </View>
        )}
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
  },
  heroText: {
    color: 'black',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 60,
  },
  button: {
    justifyContent: 'center',
    backgroundColor: 'whitesmoke',
    padding: 5,
    borderRadius: 15,
    width: 150,
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop: 60,
  },
  bottomField: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '45%',
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingTop: 20,
    borderRadius: 20,
  },
  bottomFieldHeading: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10,
  },
  viewAllWrapper: {
    borderBottomWidth: 1,
  },
  viewAll: {
    marginTop: -5,
    fontSize: 14,
    paddingBottom: 1.5,
  },
  bottomFieldHorizontal: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  imageContainer: {
    flexDirection: 'row',
    marginRight: 'auto',
    marginLeft: 'auto',
    justifyContent: 'center',
  },
  bottomFieldImageWrapper: {
    alignItems: 'center',
  },
  bottomFieldImage: {
    // objectFit: 'contain',
    // width: '100%',
    width: 180,
    height: 180,
  },
  productName: {
    marginTop: 20,
    fontWeight: '600',
    fontSize: 17,
  },
  productPrice: {
    marginTop: 4,
    fontSize: 16,
  },
});
