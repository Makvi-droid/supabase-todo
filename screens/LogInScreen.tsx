import {View, Text} from 'react-native'
import { StyleSheet } from 'react-native'


export default function LogInScreen(){
    return(<>
        <View style={styles.container}>
            <Text style={styles.text}>My To-do List App</Text>
        </View>
    </>)
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center",
        marginTop: "25%"
    },

    text:{
        fontSize: 20,
    }
})

