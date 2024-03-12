import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
//axios
const categoryInfoData = {
  Sofas: [
    {
      itemName: 'Wooden Sofa',
      imageUri: require('../assets/img1.jpg'),
      imageUri2: require('../assets/imgg.jpg'),
      itemPrice: '$300',
      rating: '4.5',
      num_ratings: '500 reviews',
      desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam feugiat, turpis at pulvinar vulputate, erat libero tristique tellus, nec bibendum odio risus sit amet ante. Aliquam erat volutpat. Nunc auctor. Mauris pretium quam et urna.',
    },
    {
      itemName: 'Leather Sofa',
      imageUri: require('../assets/img2.jpg'),
      imageUri2: require('../assets/imgg.jpg'),
      itemPrice: '$500',
      rating: '4.5',
      num_ratings: '500 reviews',
      desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam feugiat, turpis at pulvinar vulputate, erat libero tristique tellus, nec bibendum odio risus sit amet ante. Aliquam erat volutpat. Nunc auctor. Mauris pretium quam et urna.',
    },
    {
      itemName: 'Wooden Sofa',
      imageUri: require('../assets/img1.jpg'),
      imageUri2: require('../assets/imgg.jpg'),
      itemPrice: '$300',
      rating: '4.5',
      num_ratings: '500 reviews',
      desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam feugiat, turpis at pulvinar vulputate, erat libero tristique tellus, nec bibendum odio risus sit amet ante. Aliquam erat volutpat. Nunc auctor. Mauris pretium quam et urna.',
    },
    {
      itemName: 'Leather Sofa',
      imageUri: require('../assets/img2.jpg'),
      imageUri2: require('../assets/imgg.jpg'),
      itemPrice: '$500',
      rating: '4.5',
      num_ratings: '500 reviews',
      desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam feugiat, turpis at pulvinar vulputate, erat libero tristique tellus, nec bibendum odio risus sit amet ante. Aliquam erat volutpat. Nunc auctor. Mauris pretium quam et urna. ',
    },
    {
      itemName: 'Wooden Sofa',
      imageUri: require('../assets/img1.jpg'),
      imageUri2: require('../assets/imgg.jpg'),
      itemPrice: '$300',
      rating: '4.5',
      num_ratings: '500 reviews',
      desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam feugiat, turpis at pulvinar vulputate, erat libero tristique tellus, nec bibendum odio risus sit amet ante. Aliquam erat volutpat. Nunc auctor. Mauris pretium quam et urna. ',
    },
    {
      itemName: 'Leather Sofa',
      imageUri: require('../assets/img2.jpg'),
      imageUri2: require('../assets/imgg.jpg'),
      itemPrice: '$500',
      rating: '4.5',
      num_ratings: '500 reviews',
      desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam feugiat, turpis at pulvinar vulputate, erat libero tristique tellus, nec bibendum odio risus sit amet ante. Aliquam erat volutpat. Nunc auctor. Mauris pretium quam et urna.',
    },
  ],
  Chairs: [
    {
      itemName: 'Wooden Chair',
      imageUri: require('../assets/img3.jpg'),
      imageUri2: require('../assets/imgg.jpg'),
      itemPrice: '$50',
      rating: '4.9',
      num_ratings: '50 reviews',
      desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam feugiat, turpis at pulvinar vulputate, erat libero tristique tellus, nec bibendum odio risus sit amet ante. Aliquam erat volutpat. Nunc auctor. Mauris pretium quam et urna.',
    },
    {
      itemName: 'Metal Chair',
      imageUri: require('../assets/img4.jpg'),
      imageUri2: require('../assets/imgg.jpg'),
      itemPrice: '$70',
      rating: '4.9',
      num_ratings: '50 reviews',
      desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam feugiat, turpis at pulvinar vulputate, erat libero tristique tellus, nec bibendum odio risus sit amet ante. Aliquam erat volutpat. Nunc auctor. Mauris pretium quam et urna.',
    },
    {
      itemName: 'Wooden Chair',
      imageUri: require('../assets/img3.jpg'),
      imageUri2: require('../assets/imgg.jpg'),
      itemPrice: '$50',
      rating: '4.9',
      num_ratings: '50 reviews',
      desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam feugiat, turpis at pulvinar vulputate, erat libero tristique tellus, nec bibendum odio risus sit amet ante. Aliquam erat volutpat. Nunc auctor. Mauris pretium quam et urna.',
    },
    {
      itemName: 'Metal Chair',
      imageUri: require('../assets/img4.jpg'),
      imageUri2: require('../assets/imgg.jpg'),
      itemPrice: '$70',
      rating: '4.9',
      num_ratings: '50 reviews',
      desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam feugiat, turpis at pulvinar vulputate, erat libero tristique tellus, nec bibendum odio risus sit amet ante. Aliquam erat volutpat. Nunc auctor. Mauris pretium quam et urna.',
    },
    {
      itemName: 'Wooden Chair',
      imageUri: require('../assets/img3.jpg'),
      imageUri2: require('../assets/imgg.jpg'),
      itemPrice: '$50',
      rating: '4.9',
      num_ratings: '50 reviews',
      desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam feugiat, turpis at pulvinar vulputate, erat libero tristique tellus, nec bibendum odio risus sit amet ante. Aliquam erat volutpat. Nunc auctor. Mauris pretium quam et urna.',
    },
    {
      itemName: 'Metal Chair',
      imageUri: require('../assets/img4.jpg'),
      imageUri2: require('../assets/imgg.jpg'),
      itemPrice: '$70',
      rating: '4.9',
      num_ratings: '50 reviews',
      desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam feugiat, turpis at pulvinar vulputate, erat libero tristique tellus, nec bibendum odio risus sit amet ante. Aliquam erat volutpat. Nunc auctor. Mauris pretium quam et urna.',
    },
  ],
  Tables: [
    {
      itemName: 'Wooden Table',
      imageUri: require('../assets/img5.jpg'),
      imageUri2: require('../assets/imgg.jpg'),
      itemPrice: '$150',
      rating: '3,6',
      num_ratings: '200 reviews',
      desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam feugiat, turpis at pulvinar vulputate, erat libero tristique tellus, nec bibendum odio risus sit amet ante. Aliquam erat volutpat. Nunc auctor. Mauris pretium quam et urna.',
    },
    {
      itemName: 'Glass Table',
      imageUri: require('../assets/img6.jpg'),
      imageUri2: require('../assets/imgg.jpg'),
      itemPrice: '$200',
      rating: '3,6',
      num_ratings: '200 reviews',
      desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam feugiat, turpis at pulvinar vulputate, erat libero tristique tellus, nec bibendum odio risus sit amet ante. Aliquam erat volutpat. Nunc auctor. Mauris pretium quam et urna.',
    },
    {
      itemName: 'Wooden Table',
      imageUri: require('../assets/img5.jpg'),
      imageUri2: require('../assets/imgg.jpg'),
      itemPrice: '$150',
      rating: '3,6',
      num_ratings: '200 reviews',
      desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam feugiat, turpis at pulvinar vulputate, erat libero tristique tellus, nec bibendum odio risus sit amet ante. Aliquam erat volutpat. Nunc auctor. Mauris pretium quam et urna.',
    },
    {
      itemName: 'Glass Table',
      imageUri: require('../assets/img6.jpg'),
      imageUri2: require('../assets/imgg.jpg'),
      itemPrice: '$200',
      rating: '3,6',
      num_ratings: '200 reviews',
      desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam feugiat, turpis at pulvinar vulputate, erat libero tristique tellus, nec bibendum odio risus sit amet ante. Aliquam erat volutpat. Nunc auctor. Mauris pretium quam et urna.',
    },
    {
      itemName: 'Wooden Table',
      imageUri: require('../assets/img5.jpg'),
      imageUri2: require('../assets/imgg.jpg'),
      itemPrice: '$150',
      rating: '3,6',
      num_ratings: '200 reviews',
      desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam feugiat, turpis at pulvinar vulputate, erat libero tristique tellus, nec bibendum odio risus sit amet ante. Aliquam erat volutpat. Nunc auctor. Mauris pretium quam et urna.',
    },
    {
      itemName: 'Glass Table',
      imageUri: require('../assets/img6.jpg'),
      imageUri2: require('../assets/imgg.jpg'),
      itemPrice: '$200',
      rating: '3,6',
      num_ratings: '200 reviews',
      desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam feugiat, turpis at pulvinar vulputate, erat libero tristique tellus, nec bibendum odio risus sit amet ante. Aliquam erat volutpat. Nunc auctor. Mauris pretium quam et urna.',
    },
  ],
  Kitchen: [
    {
      itemName: 'Cookware Set',
      imageUri: require('../assets/img7.jpg'),
      imageUri2: require('../assets/imgg.jpg'),
      itemPrice: '$100',
      rating: '5.0',
      num_ratings: '150 reviews',
      desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam feugiat, turpis at pulvinar vulputate, erat libero tristique tellus, nec bibendum odio risus sit amet ante. Aliquam erat volutpat. Nunc auctor. Mauris pretium quam et urna.',
    },
    {
      itemName: 'Cutlery Set',
      imageUri: require('../assets/img8.jpg'),
      imageUri2: require('../assets/imgg.jpg'),
      itemPrice: '$80',
      rating: '5.0',
      num_ratings: '150 reviews',
      desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam feugiat, turpis at pulvinar vulputate, erat libero tristique tellus, nec bibendum odio risus sit amet ante. Aliquam erat volutpat. Nunc auctor. Mauris pretium quam et urna.',
    },
    {
      itemName: 'Cookware Set',
      imageUri: require('../assets/img7.jpg'),

      itemPrice: '$100',
      rating: '5.0',
      num_ratings: '150 reviews',
      desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam feugiat, turpis at pulvinar vulputate, erat libero tristique tellus, nec bibendum odio risus sit amet ante. Aliquam erat volutpat. Nunc auctor. Mauris pretium quam et urna.',
    },
    {
      itemName: 'Cutlery Set',
      imageUri: require('../assets/img8.jpg'),
      imageUri2: require('../assets/imgg.jpg'),
      itemPrice: '$80',
      rating: '5.0',
      num_ratings: '150 reviews',
      desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam feugiat, turpis at pulvinar vulputate, erat libero tristique tellus, nec bibendum odio risus sit amet ante. Aliquam erat volutpat. Nunc auctor. Mauris pretium quam et urna. ',
    },
    {
      itemName: 'Cookware Set',
      imageUri: require('../assets/img7.jpg'),
      imageUri2: require('../assets/imgg.jpg'),
      itemPrice: '$100',
      rating: '5.0',
      num_ratings: '150 reviews',
      desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam feugiat, turpis at pulvinar vulputate, erat libero tristique tellus, nec bibendum odio risus sit amet ante. Aliquam erat volutpat. Nunc auctor. Mauris pretium quam et urna.',
    },
    {
      itemName: 'Cutlery Set',
      imageUri: require('../assets/img8.jpg'),
      imageUri2: require('../assets/imgg.jpg'),
      itemPrice: '$80',
      rating: '5.0',
      num_ratings: '150 reviews',
      desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam feugiat, turpis at pulvinar vulputate, erat libero tristique tellus, nec bibendum odio risus sit amet ante. Aliquam erat volutpat. Nunc auctor. Mauris pretium quam et urna.',
    },
  ],
};

const CategoryInfo = ({ categoryName }) => {
  const products = categoryInfoData[categoryName];

  const navigation = useNavigation();

  const handleProductPress = (product) => {
    // Navigate to product details page
    navigation.navigate('ProductDetails', { product });
  };

  const renderRows = () => {
    const rows = [];
    for (let i = 0; i < products.length; i += 2) {
      rows.push(
        <View key={i} style={styles.itemRow}>
          {/* <TouchableOpacity> */}
          <TouchableOpacity
            style={styles.contentWrapper}
            onPress={() => handleProductPress(products[i])}>
            <Image source={products[i].imageUri} style={styles.image} />
            <Text style={styles.productName}>{products[i].itemName}</Text>
            <Text style={styles.productPrice}>{products[i].itemPrice}</Text>
          </TouchableOpacity>
          {/* </TouchableOpacity> */}
          {i + 1 < products.length && (
            <TouchableOpacity
              style={styles.contentWrapper}
              onPress={() => handleProductPress(products[i + 1])}>
              <Image source={products[i + 1].imageUri} style={styles.image} />
              <Text style={styles.productName}>{products[i + 1].itemName}</Text>
              <Text style={styles.productPrice}>
                {products[i + 1].itemPrice}
              </Text>
            </TouchableOpacity>
          )}
        </View>
      );
    }
    return rows;
  };

  return <View style={styles.container}>{renderRows()}</View>;
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
  itemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  contentWrapper: {
    alignItems: 'center',
    width: '45%',
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 10,
    // resizeMode: 'contain',
    borderRadius: 10,
  },
  productName: {
    fontWeight: '600',
    fontSize: 18,
  },
  productPrice: {
    fontSize: 16,
  },
});

export default CategoryInfo;
