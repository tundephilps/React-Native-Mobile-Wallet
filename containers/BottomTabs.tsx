import CustomBottomTab from "../components/BottomTabs/CustomBottomTab";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Cart from "../screens/Cart";
import Favourites from "../screens/Favourites";
import Homepage from "../screens/Homepage";
import Profile from "../screens/Profile";
import Transactions from "../screens/Transactions";
const Tab = createBottomTabNavigator();

const BottomTabs = () => {
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
          options={{ tabBarLabel: "Favourites" }}
          name="Favourites"
          component={Favourites}
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
