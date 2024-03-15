import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StatusBar } from "react-native";

import HomeScreen from "@screens/HomeScreen";
import WelcomeScreen from "@screens/WelcomeScreen";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import colors from "@styles/colors";

const Tab = createBottomTabNavigator();

function App() {
    return (
        <>
            <StatusBar
                barStyle="dark-content"
                backgroundColor={colors.light_blue}
            />
            <NavigationContainer>
                <Tab.Navigator
                    screenOptions={({ route }) => ({
                        tabBarIcon: ({ focused, color, size }) => {
                            let iconName;

                            if (route.name === "Home") {
                                iconName = focused ? "home" : "home";
                            } else if (route.name === "Pay") {
                                iconName = focused ? "payments" : "payments";
                            }

                            // You can return any component that you like here!
                            return (
                                <MaterialIcons
                                    name={iconName}
                                    size={size}
                                    color={color}
                                />
                            );
                        },
                        headerShown: false, // This line hides the header
                    })}
                    tabBarOptions={{
                        activeTintColor: "tomato",
                        inactiveTintColor: "gray",
                    }}
                >
                    <Tab.Screen name="Home" component={HomeScreen} />
                    <Tab.Screen name="Pay" component={WelcomeScreen} />
                </Tab.Navigator>
            </NavigationContainer>
        </>
    );
}

export default App;
