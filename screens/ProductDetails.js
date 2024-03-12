import { useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  Button,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const ProductDetails = ({ route }) => {
  const { product } = route.params;
  const navigation = useNavigation();
  const handleBack = () => {
    navigation.goBack();
  };

  const [isFavorite, setIsFavorite] = useState(false);

  const handleToggleFavorite = () => {
    setIsFavorite((prev) => !prev);
  };

  const [selectedImage, setSelectedImage] = useState(product.imageUri);

  const handleImageChange = (imageUri) => {
    setSelectedImage(imageUri);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBack}>
          <Ionicons name="arrow-back-outline" size={30} />
        </TouchableOpacity>
        <Ionicons
          name={isFavorite ? 'heart' : 'heart-outline'}
          size={30}
          color={isFavorite ? 'red' : 'black'}
          onPress={handleToggleFavorite}
        />
      </View>

      <View>
        <Image source={selectedImage} style={styles.image} />
        <View style={styles.imageOptionsWrapper}>
          <TouchableOpacity onPress={() => handleImageChange(product.imageUri)}>
            <Image source={product.imageUri} style={styles.imageOptions} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleImageChange(product.imageUri2)}>
            <Image source={product.imageUri2} style={styles.imageOptions} />
          </TouchableOpacity>
        </View>

        <View style={{ paddingHorizontal: 20 }}>
          <View style={styles.ratingWrapper}>
            <Ionicons name="star" size={20} color="coral" />
            <Text style={styles.rating}>{product.rating}</Text>

            <View style={styles.num_ratings}>
              <Text style={styles.num_ratings_text}>{product.num_ratings}</Text>
            </View>
          </View>
          <Text style={styles.productName}>{product.itemName}</Text>
          <Text style={styles.productDesc}>{product.desc}</Text>
        </View>
      </View>
      <View style={styles.bottomRow}>
        <Text style={styles.productName}>{product.itemPrice}</Text>
        <View style={styles.button}>
          <Button title="Add to Cart" color="white" />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  image: {
    width: '100%',
    height: 300,
    marginTop: 5,
    marginBottom: 10,
  },
  imageOptionsWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  imageOptions: {
    width: 100,
    height: 100,
    // resizeMode: 'contain',
    marginHorizontal: 10,
    borderRadius: 10,
  },
  ratingWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  rating: {
    fontSize: 20,
    color: 'coral',
    fontWeight: '500',
    marginLeft: 5,
  },
  num_ratings: {
    marginLeft: 25,
    paddingVertical: 7,
    paddingHorizontal: 15,
    backgroundColor: '#ddd',
    borderRadius: 20,
  },
  num_ratings_text: {
    fontSize: 15,
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 18,
    marginBottom: 10,
  },
  productDesc: {
    fontSize: 16,
    textAlign: 'left',
  },
  bottomRow: {
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  button: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: 'black',
    width: 250,
    borderRadius: 15,
    marginLeft: 40,
  },
});

export default ProductDetails;
