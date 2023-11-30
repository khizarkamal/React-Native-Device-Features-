import { useState } from "react";
import { ScrollView, Text, TextInput, StyleSheet, View } from "react-native";

import ImagePicker from "./ImagePicker";
import { Colors } from "../../constants/colors";
import LocationPicker from "./LocationPicker";
const PlaceForm = () => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const changeTitleHandler = (value) => {
        setEnteredTitle(value);
    }
    return <ScrollView style={styles.form}>
        <View>
            <Text style={styles.label}>
                Title
            </Text>
            <TextInput style={styles.input} value={enteredTitle} onChangeText={changeTitleHandler}></TextInput>
        </View>
        <ImagePicker></ImagePicker>
        <LocationPicker></LocationPicker>
    </ScrollView>
}

const styles = StyleSheet.create({
    form: {
        flex: 1,
        padding: 24
    },
    label: {
        fontWeight: 'bold',
        color: Colors.primary500,
        marginBottom: 4
    },
    input: {
        marginVertical: 8,
        marginHorizontal: 4,
        paddingVertical: 8,
        paddingHorizontal: 4,
        fontSize: 16,
        borderBottomWidth: 2,
        borderBottomColor: Colors.primary700,
        backgroundColor: Colors.primary100
    }
})

export default PlaceForm;