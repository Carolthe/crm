import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function PipelineCard({ item }){

return(

<View style={styles.card}>

<Ionicons
name="person-circle-outline"
size={42}
color="#2563EB"
/>

<Text style={styles.nome}>
{item.cliente}
</Text>

<Text style={styles.empresa}>
{item.empresa}
</Text>

<View style={styles.footer}>

<Ionicons
name="cash-outline"
size={18}
color="#16A34A"
/>

<Text style={styles.valor}>
{item.valor}
</Text>

</View>

</View>

)

}

const styles=StyleSheet.create({

card:{
backgroundColor:"#FFF",
padding:15,
borderRadius:15,
marginTop:15,
elevation:3
},

nome:{
fontSize:17,
fontWeight:"700",
marginTop:10
},

empresa:{
color:"#666",
marginTop:5
},

footer:{
flexDirection:"row",
alignItems:"center",
marginTop:15
},

valor:{
marginLeft:8,
fontWeight:"700",
color:"#16A34A"
}

});