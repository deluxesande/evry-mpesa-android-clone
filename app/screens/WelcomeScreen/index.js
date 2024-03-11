import { Text, View } from "react-native";
import { s } from "react-native-wind";

import Colors from "@styles/colors";

export default function WelcomeScreen() {
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
