import { useLayoutEffect } from "react";
import PlacesList from "../components/Places/PlacesList";
import IconButton from "../components/UI/IconButton";

const AllPlaces = ({ navigation }) => {
    const pressHandler = () => {
        console.log("Pressed Button");
        navigation.navigate('AddPlace');
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Your Favourite Places',
            headerRight: ({ tintColor, }) => {
                return <IconButton icon="md-add" color={tintColor} size={24} onPress={pressHandler}></IconButton>
            },

        })
    })
    return <PlacesList></PlacesList>
}

export default AllPlaces;