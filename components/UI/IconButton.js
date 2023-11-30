import { Pressable, StyleSheet } from "react-native"
import { Ionicons } from '@expo/vector-icons';

const IconButton = ({ size, icon, color, onPress }) => {
    return <Pressable style={(pressed) => [styles.button, pressed ? pressed.pressed : null]} onPress={onPress}>
        <Ionicons size={size} color={color} icon={icon}></Ionicons>
    </Pressable>
}
const styles = StyleSheet.create({
    button: {
        padding: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    pressed: {
        opacity: 0.25
    }
});

export default IconButton;