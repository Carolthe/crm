import React, { useState } from "react";
import {
View,
Text,
StyleSheet,
Switch,
Pressable
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

export default function ConfigItem({
icon,
title,
switchEnabled=false,
danger=false
}){

const [enabled,setEnabled]=useState(false);

return(

<Pressable style={styles.item}>

<View style={styles.left}>

<Ionicons
name={icon}
size={24}
color={danger ? "#EF4444" : "#2563EB"}
/>

<Text
style={[
styles.text,
danger && {color:"#EF4444"}
]}
>
{title}
</Text>

</View>

{
switchEnabled ? (

<Switch
value={enabled}
onValueChange={setEnabled}
/>

):(

<Ionicons
name="chevron-forward"
size={20}
color="#999"
/>

)

}

</Pressable>

)

}

const styles=StyleSheet.create({

item:{
backgroundColor:"#FFF",
padding:18,
borderRadius:16,
marginBottom:10,
flexDirection:"row",
justifyContent:"space-between",
alignItems:"center",
elevation:2
},

left:{
flexDirection:"row",
alignItems:"center"
},

text:{
marginLeft:15,
fontSize:16,
fontWeight:"500"
}

});