import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import IonIcon from "react-native-vector-icons/Ionicons";
import SettingsScreen from "../SettingsScreen";
import ProfileScreen from "../ProfileScreen";
import HomeScreen from "../HomeScreen";

const Tab = createBottomTabNavigator();

function BottomTabScreen() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        activeColor="#e91e63"
        barStyle={{ backgroundColor: "tomato" }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            tabBarLabel: "Updates",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="bell" color={color} size={26} />
            ),
            tabBarBadge: 3,
          }}
        />
        <Tab.Screen
          name="profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: "profile",
            tabBarIcon: ({ color }) => (
              <IonIcon name="person" color={color} size={26} />
            ),
            tabBarBadge: 3,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default BottomTabScreen;
