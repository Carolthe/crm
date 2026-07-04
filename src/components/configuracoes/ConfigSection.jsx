import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function ConfigSection({
title,
children
}){

return(

<View style={styles.container}>

<Text style={styles.title}>
{title}
</Text>

{children}

</View>

)

}

const styles=StyleSheet.create({

container:{
marginBottom:20
},

title:{
fontSize:18,
fontWeight:"700",
marginBottom:10
}

});