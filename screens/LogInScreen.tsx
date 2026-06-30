import {View, Text, TextInput} from 'react-native'
import { StyleSheet } from 'react-native'


export default function LogInScreen(){
    return(<>
        <View style={styles.container}>
            <Text style={styles.text}>My To-do List App</Text>
            <TextInput style={styles.input} placeholder='Enter username'></TextInput>
            <TextInput style={styles.input} placeholder='Enter password' secureTextEntry></TextInput>
           
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
    },

    input:{
        borderColor: "black",
        borderWidth: 1,
        width: "70%"
    }
})

