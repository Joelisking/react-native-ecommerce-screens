import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Categories from '../components/Categories';
import { useState } from 'react';
import CategoryInfo from '../components/CategoryInfo';

const Catalog = ({ navigation }) => {
  const [selectedCategory, setSelectedCategory] = useState('Sofas');
  const categoryNames = ['Sofas', 'Chairs', 'Tables', 'Kitchen'];
  const renderCategory = ({ item }) => (
    <Categories
      categoryName={item}
      onPress={() => setSelectedCategory(item)}
      isSelected={selectedCategory === item}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Ionicons name="menu" size={30} />
            <View style={styles.headerRight}>
              <Ionicons
                name="cart-outline"
                size={30}
                style={{ paddingRight: 15 }}
              />
              <Ionicons name="person-outline" size={30} />
            </View>
          </View>
          <View style={styles.headingWrapper}>
            <Text style={styles.heading}>Popular Products</Text>
            <Ionicons name="options-outline" size={30} />
          </View>
          <View>
            <FlatList
              style={styles.categoryName}
              data={categoryNames}
              renderItem={renderCategory}
              keyExtractor={(item, index) => index.toString()}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          </View>
          <View>
            {selectedCategory && (
              <CategoryInfo categoryName={selectedCategory} />
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Catalog;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  headerRight: {
    flexDirection: 'row',
  },
  heading: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
  },
  headingWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 25,
  },
});
