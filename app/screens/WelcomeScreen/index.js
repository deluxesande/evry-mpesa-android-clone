import { Text, View } from "react-native";
import { s } from "react-native-wind";

import Colors from "@styles/colors";
import { useEffect } from "react";

export default function WelcomeScreen({ navigation }) {
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.replace("Main");
        }, 3000); // 3000ms = 3s

        // Clear timeout if the component is unmounted
        return () => clearTimeout(timer);
    }, []);

    return (
        <View
            style={[
                s`flex flex-1 h-full w-full items-center justify-center`,
                { backgroundColor: Colors.light_blue },
            ]}
        >
            <Text>Logo</Text>
            <Text style={s`font-medium text-lg`}>Easy Money Transfer</Text>
        </View>
    );
}
