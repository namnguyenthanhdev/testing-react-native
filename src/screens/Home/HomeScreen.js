import {FlatList, Image, ScrollView, Text, View} from "react-native";

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
        tag: '18+',
        img: require('../assets/image/package1.jpg')
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
        tag: '',
        img: require('../assets/image/package1.jpg')
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
        tag: '',
        img: require('../assets/image/package1.jpg')
    },
];

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    image: {
        width: 66,
        height: 58,
    },
    title: {
        fontSize: 32,
    },
})
const ChallengePackageItem = (props) => {
    const {
        title: title,
        tag: tag,
        img: img,
        style
    } = props;
    return (
        <View style={styles.container}>
            <Image style={style.image} source={img}/>
            <View>
                <Text style={style.title}>{title}</Text>
                <Text style={style.title}>{tag}</Text>
            </View>
        </View>
    )
}

const ChallengePackageList = ({item}) => (
    <ChallengePackageItem title={item.title} tag={item.tag}/>
)

const HomeScreen = (props) => {
    const {item} = props;
    return (
        <View>
            <View>
                <Text>WIN WINE</Text>
            </View>
            <View>
                <Text>Gần đây</Text>
                <FlatList
                    data={DATA}
                    renderItem={ChallengePackageList}
                    keyExtractor={item => item.id}
                />
            </View>
        </View>
    )
}

export default HomeScreen;
