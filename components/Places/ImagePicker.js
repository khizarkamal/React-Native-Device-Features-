import { View, Image, Text, StyleSheet, Alert } from "react-native";
import { launchCameraAsync, useCameraPermissions, PermissionStatus } from "expo-image-picker"
import { useState } from "react";
import { Colors } from "../../constants/colors";
import OutlinedButton from "../UI/OutlinedButton";

const ImagePicker = () => {
    const [previewImage, setPreviewImage] = useState('');
    const [cameraPermissionInformation, requestPermission] = useCameraPermissions();


    const verifyPermission = async () => {
        if (cameraPermissionInformation.status === PermissionStatus.UNDETERMINED) {
            const permission = await requestPermission();
            return permission.granted;
        }
        if (cameraPermissionInformation.status === PermissionStatus.DENIED) {
            Alert.alert("Insufficient Permissions", "You need to grand camera perission to use this application");
            // const perission = await requestPermission()
            return false;
        }

        return true;
    }

    const imageHandler = async () => {

        const hasPermission = await verifyPermission();
        console.log("Has Permission--------", hasPermission);

        if (!hasPermission) {
            return;
        }

        try {
            const response = await launchCameraAsync({
                allowsEditing: true,
                aspect: [16, 9],
                quality: 0.5
            });
            console.log("Response Image---", response);
            setPreviewImage(response.uri);
        }
        catch (e) {
            console.log("error--", e);
        }
    }
    let imagePreview;
    if (!previewImage) {
        imagePreview = <Text>
            No Image to show yet
        </Text>
    } else {
        console.log("Preview Image-----", previewImage);
        imagePreview = <Image style={styles.image} src={previewImage}></Image>
    }


    return <View >
        <View style={styles.imagePreview}>
            {imagePreview}
        </View>
        <OutlinedButton icon="camera" onPress={imageHandler} >Take Image</OutlinedButton>
        {/* <Button title="Take Image" onPress={imageHandler}></Button> */}
    </View>
}

const styles = StyleSheet.create({
    imagePreview: {
        width: '100%',
        marginVertical: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.primary100,
        borderRadius: 4,
        height: 200
    },
    image: {
        width: '100%',
        height: '100%'

    }
})

export default ImagePicker;