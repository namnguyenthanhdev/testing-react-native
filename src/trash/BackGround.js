import {ImageBackground, StyleSheet, Text, View} from "react-native";
import NamePlayers from "./NamePlayers";
import NameList from "./NameList";

const image = {uri: "https://reactjs.org/logo-og.png"};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
            flex: 1,
            justifyContent: "center"
        },
    text: {
            color: "white",
            fontSize: 42,
            lineHeight: 84,
            fontWeight: "bold",
            textAlign: "center",
            backgroundColor: "#000000c0",
        }

});

const BackGround = () => {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={image} resizeMode="cover" style={styles.image}
            >
               <Text style={styles.text}>Inside</Text>
            </ImageBackground>
        </View>
    )
}

export default BackGround;
