import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    addTask: {
        bottom: 30,
        paddingHorizontal: 20,
        width: '100%',
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
    },
    input: {
        height: 44,
        width: '80%',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#21a3d0',
        borderRadius: 20,
        paddingHorizontal: 20,
    },
    icon: {
        width: 44,
        height: 44,
        backgroundColor: '#21a3d0',
        borderRadius: 44,
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconAdd: {
        color: '#fff',
        fontSize: 24,
    }
});

export default styles;
