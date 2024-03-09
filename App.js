import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";

import LoadingScreen from "@screens/LoadingScreen";
import HomeScreen from "@screens/HomeScreen";

export default function App() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1800); // Change to the number of milliseconds you want

        return () => clearTimeout(timer); // This will clear the timer when the component unmounts
    }, []);

    return (
        <SafeAreaView className="flex flex-1 bg-white items-center justify-center">
            {isLoading ? <LoadingScreen /> : <HomeScreen />}
            <StatusBar
                animated={true}
                backgroundColor="#61dafb"
                barStyle="dark-content"
                showHideTransition="fade"
                hidden={false}
            />
        </SafeAreaView>
    );
}
