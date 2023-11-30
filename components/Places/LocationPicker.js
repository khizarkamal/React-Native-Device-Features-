import { StyleSheet, View, Alert } from "react-native";
import { getCurrentPositionAsync, useForegroundPermissions, PermissionStatus } from "expo-location"


import OutlinedButton from "../UI/OutlinedButton";
import { Colors } from "../../constants/colors";

const LocationPicker = () => {
    const [locationPermissionInformation, requestPermission] = useForegroundPermissions();

    const getLocationHandler = async () => {
        const hasPermission = await verifyPermission();
        if (!hasPermission) {
            return
        }

        const location = await getCurrentPositionAsync();
        console.log("Location Handler---------");
        console.log("Location----------", location);
    }

    const verifyPermission = async () => {
        console.log("Location Permission----------", locationPermissionInformation.status);

        if (locationPermissionInformation.status === PermissionStatus.UNDETERMINED) {
            const permission = await requestPermission();
            console.log("Permission of lacation----", permission);
            return permission.granted;
        }
        if (locationPermissionInformation.status === PermissionStatus.DENIED) {
            Alert.alert("Insufficient Permissions", "You need to grand location perission to use this application");
            // const perission = await requestPermission()
            return false;
        }

        return true;
    }

    const pickOnMapHandler = () => {
        console.log("pick on map handler");
    }

    return <View>
        <View style={styles.mapPreview}>

        </View>
        <View style={styles.actions}>
            <OutlinedButton icon="location" onPress={getLocationHandler}> Locate User</OutlinedButton>
            <OutlinedButton icon="map" onPress={pickOnMapHandler}>Pick on Map</OutlinedButton>
        </View>
    </View>
}
const styles = StyleSheet.create({
    mapPreview: {
        width: '100%',
        marginVertical: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.primary100,
        borderRadius: 4,
        height: 200
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    }
})
export default LocationPicker;