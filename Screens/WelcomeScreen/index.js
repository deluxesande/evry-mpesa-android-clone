import { Text, View } from "react-native";

import Colors from "@styles/Colors";

export default function WelcomeScreen() {
    return (
        <View
            className="flex flex-1 h-full w-full items-center justify-center"
            style={{ backgroundColor: Colors.light_blue }}
        >
            <Text>Logo</Text>
            <Text>Easy Money Transfer</Text>
        </View>
    );
}
