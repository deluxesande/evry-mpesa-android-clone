import React from "react";
import { View, Text, Button, FlatList } from "react-native";
import { s } from "react-native-wind";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const payments = [
    { id: "1", name: "John Doe", price: "Ksh 200", time: "12:00 PM" },
    { id: "2", name: "Jane Doe", price: "Ksh 300", time: "1:00 PM" },
    { id: "3", name: "Ken Smith", price: "Ksh 400", time: "2:00 PM" },
    { id: "4", name: "John Doe", price: "Ksh 200", time: "12:00 PM" },
    { id: "5", name: "Jane Doe", price: "Ksh 300", time: "1:00 PM" },
    { id: "6", name: "Ken Smith", price: "Ksh 400", time: "2:00 PM" },
    { id: "7", name: "John Doe", price: "Ksh 200", time: "12:00 PM" },
    { id: "8", name: "Jane Doe", price: "Ksh 300", time: "1:00 PM" },
    { id: "9", name: "Ken Smith", price: "Ksh 400", time: "2:00 PM" },
    { id: "10", name: "John Doe", price: "Ksh 200", time: "12:00 PM" },
    { id: "11", name: "Jane Doe", price: "Ksh 300", time: "1:00 PM" },
    { id: "12", name: "Ken Smith", price: "Ksh 400", time: "2:00 PM" },
];

const HomeScreen = ({ navigation }) => {
    return (
        // <View style={s`flex h-full`}>
        //     <Text style={s`text-2xl font-bold text-blue-500`}>
        //         Welcome to the Home Screen!
        //     </Text>
        //     <Button
        //         title="Go to Welcome Screen"
        //         onPress={() => navigation.navigate("Welcome")}
        //     />
        // </View>
        <View
            style={s`flex flex-1 flex-col w-screen h-screen bg-slate-400 overflow-hidden`}
        >
            {/* Account balance details */}
            <View
                style={s`w-full h-1/4 bg-red-100 flex justify-center items-center`}
            >
                <View style={s`flex-row justify-between items-center`}>
                    <View>
                        <Text style={s`text-4xl font-bold`}>Ksh 200</Text>
                    </View>
                    <MaterialIcons
                        name="visibility"
                        size={20}
                        color="#000"
                        style={s`ml-4`}
                    />
                </View>
                <Text style={s`font-light text-sm`}>Available balance</Text>
            </View>

            {/* Recent Payments */}
            <View style={s`px-4 mb-4`}>
                <Text style={[s`text-3xl font-bold mt-6`]}>
                    Recent Payments
                </Text>
                <FlatList
                    style={s`mt-2`}
                    data={payments}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View
                            style={s`flex-row justify-between items-center py-4 px-2 bg-blue-200 rounded-lg mb-2`}
                        >
                            <Text style={s`font-medium text-lg`}>
                                {item.name}
                            </Text>
                            <View style={s`flex justify-end`}>
                                <Text
                                    style={s`text-md font-semibold text-green-500`}
                                >
                                    {item.price}
                                </Text>
                                <Text style={s`text-xs text-gray-400`}>
                                    {item.time}
                                </Text>
                            </View>
                        </View>
                    )}
                />
            </View>
        </View>
    );
};

export default HomeScreen;
