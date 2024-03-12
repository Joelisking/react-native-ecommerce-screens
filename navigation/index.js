import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Catalog from '../screens/Catalog';
import Search from '../screens/Search';
import Favorites from '../screens/Favorites';
import Profile from '../screens/Profile';
import { Ionicons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Index = () => {
  return (
    <Tab.Navigator
      initialRouteName="Catalog"
      screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Catalog"
        component={Catalog}
        options={{
          tabBarIcon: () => <Ionicons name="home" size={24} />,
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: () => <Ionicons name="search" size={24} />,
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarIcon: () => <Ionicons name="heart-outline" size={24} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: () => <Ionicons name="person-outline" size={24} />,
        }}
      />
    </Tab.Navigator>
  );
};
export default Index;
const styles = StyleSheet.create({});
