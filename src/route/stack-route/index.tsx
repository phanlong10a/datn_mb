import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "../../screen/welcome";
// import { useAuthenStateValue } from '@src/atom/authen';
import { StatusBar, Text, View } from "react-native";
import Level from "../../screen/level";

const RootStack = createStackNavigator();


const RootStackRoute = () => {
    return (
        <>
            <RootStack.Navigator
                initialRouteName="Welcome"
            >
                <RootStack.Screen name={"Welcome"} component={Welcome} options={{ headerShown: false }} />
                <RootStack.Screen name={"Level"} component={Level} options={{ headerShown: false }} />
            </RootStack.Navigator>
        </>
    );
};

export default RootStackRoute;
