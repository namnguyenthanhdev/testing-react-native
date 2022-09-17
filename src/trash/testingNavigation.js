import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {Text, View, StyleSheet, Button, TextInput, Image} from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {useEffect, useState} from "react";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator ();


const HomeScreenTest = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>Home Screen</Text>
            <Button
                title="Go to details"
                onPress={() => navigation.navigate('Details',
                    {
                        itemId: 86,
                        otherParam: 'anything you want here',
                    }
                    )}
            />
        </View>
    )
}

const TabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="PlayMode" component={PlayModeScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    )
}
// const DetailsScreen = ({navigation, route}) => {
//     const {itemId, otherParam} = route.params;
//     return (
//         <View style={styles.container}>
//             <Text>Details Screen</Text>
//             <Text>itemId: {JSON.stringify(itemId)}</Text>
//             <Text>otherParam: {JSON.stringify(otherParam)}</Text>
//             <Button
//                 title="Go to Details... again"
//                 onPress={() => navigation.navigate('Details')}
//             />
//             <Button
//                 title="Go to Details multiple times"
//                 onPress={() => navigation.push('Details',
//                     {
//                         itemId: Math.floor(Math.random()*100)
//                     }
//                 )}
//             />
//             <Button
//                 title="Go Back"
//                 onPress={() => navigation.goBack()}
//             />
//             <Button
//                 title="Go back to first screen in stack"
//                 onPress={() => navigation.popToTop()}
//             />
//         </View>
//     );
// }


///////////////     PASS PROPS TO PREVIOUS SCREEN //////////

const MenuScreen = ({navigation, route}) => {
    const props = route.params;
    useEffect(() => {
        if(props?.namePlayer) {
            //create in server
        }
    }, [props?.namePlayer])
    return (
        <View style={styles.container}>
            <Button
                title="Add players"
                onPress={() => navigation.navigate('Profile')}
            />
            <Text>Random: {props?.namePlayer}</Text>
        </View>
    )
}

const PlayModeScreen = ({navigation, route}) => {
    const [namePlayer, setNamePlayer] = useState('');
    return (
        <>
            <TextInput
                placeholder={"Enter name.."}
                style={styles.inputText}
                value={namePlayer}
                onChangeText={setNamePlayer}
            />
            <Button
                title={"Done"}
                onPress={() => {
                    navigation.navigate({
                        name: 'Menu',
                        params: {namePlayer: namePlayer},
                        merge: true,
                    })
                }}
            />
        </>

    )
}

const ProfileScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Profile screen</Text>
            <Button title="Go back" onPress={() => navigation.goBack()} />
            <Button title="Update title" onPress={() => navigation.setOptions({title: "Updated!"})} />
        </View>
    );
}

const LogoTitle = () => {
    return (
        <Image
            style={{ width: 50, height: 50 }}
            source={{uri: 'https://image.shutterstock.com/image-vector/link-icon-trendy-flat-style-600w-391664647.jpg'}}
        />
    );
}

const App = (props) => {
    // const {logoImg} = props;
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {/*<Stack.Group*/}
                {/*    screenOptions={{ headerStyle: { backgroundColor: 'papayawhip' } }}*/}
                {/*>*/}
                {/*    <Stack.Screen name="Home" component={HomeScreenTest} />*/}
                {/*    <Stack.Screen name="Details" component={DetailsScreen} />*/}
                {/*</Stack.Group>*/}
                {/*<Stack.Group*/}
                {/*    screenOptions={{ headerStyle: { backgroundColor: 'papayawhip' } }}*/}
                {/*>*/}
                {/*    <Stack.Screen*/}
                {/*        name="Menu"*/}
                {/*        component={MenuScreen}*/}
                {/*        options={{*/}
                {/*            headerTitle: (props) => (<LogoTitle {...props}/>),*/}
                {/*            headerRight: () => (*/}
                {/*                <Button*/}
                {/*                    onPress={() => {*/}
                {/*                        alert('This is a button!');*/}
                {/*                    }}*/}
                {/*                    title="Info"*/}
                {/*                    color="black"*/}
                {/*                />*/}
                {/*            )*/}
                {/*        }}*/}
                {/*    />*/}
                {/*    <Stack.Screen*/}
                {/*        name="PlayMode"*/}
                {/*        component={PlayModeScreen}*/}
                {/*    />*/}
                {/*</Stack.Group>*/}
                <Stack.Screen name="Tab" component={TabNavigator} />

            </Stack.Navigator>



        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        margin: 10
    },
    inputText: {
        height: 200,
        padding: 10,
        backgroundColor: 'white'
    }
})


export default App;


