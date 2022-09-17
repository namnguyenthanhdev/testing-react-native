import {Image, ScrollView, Text, View} from "react-native";
import React from "react";
import FlatList from "./NameList";

const logo = {
    uri: 'https://reactnative.dev/img/tiny_logo.png',
    width: 64,
    height: 64
};


const MainView = () => {
    return (
        <View>
            <Text style={{fontSize: 46}}>Scroll me plz</Text>
            <Image source={logo}/>
            <Image source={logo}/>
            <Image source={logo}/>
            <Image source={logo}/>
            <Image source={logo}/>
            <Text style={{fontSize: 46}}>If you like</Text>
            <Image source={logo}/>
            <Image source={logo}/>
            <Image source={logo}/>
            <Image source={logo}/>
            <Image source={logo}/>
            <Text style={{fontSize: 46}}>What's the best</Text>
            <Image source={logo}/>
            <Image source={logo}/>
            <Image source={logo}/>
            <Image source={logo}/>
            <Image source={logo}/>
        </View>

    )
}

export default MainView;

