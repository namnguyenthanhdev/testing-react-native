import React, {useState} from 'react';
import {FlatList, Image, ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
});

const logo = {
    uri: 'https://reactnative.dev/img/tiny_logo.png',
    width: 64,
    height: 64
};

const PizzaTranslator = () => {
    const [text, setText] = useState('');
    return (
        <View style={styles.container}>
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
            <FlatList
                data={[
                    {key: 'Devin'},
                    {key: 'Dan'},
                    {key: 'Dominic'},
                    {key: 'Jackson'},
                    {key: 'James'},
                    {key: 'Joel'},
                    {key: 'John'},
                    {key: 'Jillian'},
                    {key: 'Jimmy'},
                    {key: 'Julie'},
                ]}
                renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
            />
            <ScrollView>
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
                <Text style={{fontSize: 46}}>Scrolling down</Text>
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
                <Text style={{fontSize: 46}}>Framework around?</Text>
                <Image source={logo}/>
                <Image source={logo}/>
                <Image source={logo}/>
                <Image source={logo}/>
                <Image source={logo}/>
                <Text style={{fontSize: 40}}>React Native</Text>
            </ScrollView>
        </View>
    );

}

export default PizzaTranslator;

