import { View, Image, Text, StyleSheet } from "react-native";

const PlaceItem = ({ place }) => {
    const { imageUrl, title, address } = place;
    return <View>
        <Image source={{ uri: imageUrl }}></Image>
        <View>
            <Text>{title}</Text>
            <Text>{address}</Text>
        </View>
    </View>
}

const styles = StyleSheet.create({

})
export default PlaceItem;