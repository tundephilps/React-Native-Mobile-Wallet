import CustomBottomTab from "../components/BottomTabs/CustomBottomTab";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Homepage from "../screens/Homepage";
import Profile from "../screens/Profile";
import Transactions from "../screens/Transactions";
import CustomerCare from "../screens/CustomerCare";
import ChatScreen from "../screens/ChatScreen";
import {
  getFocusedRouteNameFromRoute,
  useNavigation,
} from "@react-navigation/native";
const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  const navigation = useNavigation();

  navigation.getParent()?.setOptions({ tabBarStyle: { display: "none" } });

  return (
    <Tab.Navigator tabBar={(props) => <CustomBottomTab {...props} />}>
      <Tab.Group
        screenOptions={{
          headerShown: false,
        }}
      >
        <Tab.Screen
          options={{ tabBarLabel: "Home" }}
          name="Homepage"
          component={Homepage}
        />
        <Tab.Screen
          options={{ tabBarLabel: "History" }}
          name="Cart"
          component={Transactions}
        />

        <Tab.Screen
          options={({ route }) => ({
            tabBarLabel: "Call Care",
            tabBarVisible: false,
            tabBarStyle: {
              visibility: "hidden",
              zIndex: 0.1,
              display: "none",
            }, // Hide the tab bar for this screen
            tabBarButton: (props) => null,
            href: null,
          })}
          name="Favourites"
          component={ChatScreen}
        />
        <Tab.Screen
          options={{ tabBarLabel: "Profile" }}
          name="Profile"
          component={Profile}
        />
      </Tab.Group>
    </Tab.Navigator>
  );
};
export default BottomTabs;
