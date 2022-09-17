import {Text, TextInput, View} from "react-native";
import {useState} from "react";

const NamePlayers = () => {
    const [text, setText] = useState("");
    return (
        <View>
            <Text>TEXT INPUT</Text>
            <TextInput
                style={{height: 40, backgroundColor: "green"}}
                placeholder="Type here to translate!"
                onChangeText={newText => setText(newText)}
                defaultValue={text}
            />
            <Text style={{padding: 10, fontSize: 42}}>
                {text.split(' ').map((word) => word && '🍕').join(' ')}
            </Text>
        </View>
    )
}

export default NamePlayers;
