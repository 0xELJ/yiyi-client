import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Root from "./src/components/Root";
import ChatMenu from "./src/components/chat/ChatMenu";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";
import { rootReducer } from "./src/reducers";
import { socketMiddleware } from "./src/middlewares/socketMiddleware";
import { SocketClient } from "./src/types/entities/SocketClient";
import Moment from "react-moment";
import 'moment-timezone';
import { useFonts, FiraSans_400Regular, FiraSans_600SemiBold } from '@expo-google-fonts/fira-sans';
import { AppLoading } from 'expo';

Moment.globalTimezone = 'America/Mexico_City';
const socket = new SocketClient();
const store = createStore(rootReducer, {}, applyMiddleware(ReduxThunk, socketMiddleware(socket)));
const { Navigator, Screen } = createDrawerNavigator();

export default function App() {
    const [fontsLoaded] = useFonts({
        FiraSansRegular: FiraSans_400Regular,
        FiraSansSemiBold: FiraSans_600SemiBold
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    return (
        <Provider store={store}>
            <NavigationContainer>
                <Navigator initialRouteName="Root" drawerContent={props => <ChatMenu {...props} /> }>
                    <Screen name="Root" component={Root} options={{ swipeEnabled: false }}/>
                </Navigator>
            </NavigationContainer>
        </Provider>
    );
}
