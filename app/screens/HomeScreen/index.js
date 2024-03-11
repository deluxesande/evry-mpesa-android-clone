import React from "react";
import { View, Text, Button } from "react-native";
import { s } from "react-native-wind";

const HomeScreen = ({ navigation }) => {
    return (
        <View style={s`flex h-full`}>
            <Text style={s`text-2xl font-bold text-blue-500`}>
                Welcome to the Home Screen!
            </Text>
            <Button
                title="Go to Welcome Screen"
                onPress={() => navigation.navigate("Welcome")}
            />
        </View>
    );
};

export default HomeScreen;
