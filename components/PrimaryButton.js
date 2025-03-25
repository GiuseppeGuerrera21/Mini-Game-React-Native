import { StyleSheet, View, Text, Pressable } from "react-native";

function PrimaryButton({ children }) {
    function pressHandler() {
        console.log('Pressed!')
    }

    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable
                style={({ pressed }) => pressed ? [styles.borderInsideContainer, styles.pressed] : styles.borderInsideContainer}
                android_ripple={{ color: '#640233' }}
                onPress={pressHandler}
            >
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    )
}

export default PrimaryButton

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden'
    },
    borderInsideContainer: {
        backgroundColor: '#8c0547',
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25
    },
    buttonText: {
        color: 'white',
        textAlign: 'center'
    },
    pressed: {
        opacity: 0.75
    }
})