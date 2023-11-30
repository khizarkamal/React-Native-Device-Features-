import { FlatList, Text, StyleSheet, View } from "react-native"

import PlaceItem from "./PlaceItem"
import { Colors } from "../../constants/colors"

const PlacesList = ({ places }) => {
    if (!places || places.length === 0) {
        return <View style={styles.fallBackContainer}><Text style={styles.fallBackText}>No Place added -- start adding places</Text></View>
    }
    return <FlatList
        data={places}
        keyExtractor={(item) => item.id}
        renderItem={(item) => {
            return <PlaceItem place={item}></PlaceItem>
        }}
    >
    </FlatList>
}

const styles = StyleSheet.create({
    fallBackContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center'
    },
    fallBackText: {
        fontSize: 16,
        color: Colors.primary200
    }
})

export default PlacesList;