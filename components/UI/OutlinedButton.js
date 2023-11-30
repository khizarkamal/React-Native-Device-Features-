import { Pressable, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../../constants/colors";

const OutlinedButton = ({ icon, onPress, children }) => {
    return <Pressable style={({ pressed }) => [styles.button, pressed ? styles.pressed : null]} onPress={onPress}>
        <Ionicons style={styles.icon} icon={icon} size={18} color={Colors.primary500}></Ionicons>
        <Text style={styles.text} >{children}</Text>
    </Pressable>
}

const styles = StyleSheet.create({
    button: {
        paddingHorizontal: 12,
        paddingVertical: 6,
        margin: 4,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: Colors.primary500,
        flexDirection: 'row'
    },
    pressed: {
        opacity: 0.7
    },
    icon: {
        marginRight: 6
    },
    text: {
        color: Colors.primary500
    }
})

export default OutlinedButton;