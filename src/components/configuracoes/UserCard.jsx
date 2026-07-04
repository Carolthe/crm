import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function UserCard(){

return(

<View style={styles.card}>

<Ionicons
name="person-circle"
size={75}
color="#2563EB"
/>

<Text style={styles.nome}>
João Silva
</Text>

<Text style={styles.email}>
joao@email.com
</Text>

<Text style={styles.cargo}>
Administrador
</Text>

</View>

)

}

const styles=StyleSheet.create({

card:{
backgroundColor:"#FFF",
borderRadius:20,
padding:20,
alignItems:"center",
marginBottom:20,
elevation:3
},

nome:{
fontSize:22,
fontWeight:"700",
marginTop:10
},

email:{
marginTop:5,
color:"#666"
},

cargo:{
marginTop:10,
color:"#2563EB",
fontWeight:"600"
}

});