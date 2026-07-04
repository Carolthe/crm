import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function PipelineHeader(){

    return(

        <View style={styles.container}>

            <Text style={styles.title}>
                Pipeline de Vendas
            </Text>

            <Text style={styles.subtitle}>
                Acompanhe cada oportunidade em tempo real.
            </Text>

        </View>

    )

}

const styles = StyleSheet.create({

container:{
paddingHorizontal:20,
paddingTop:20,
paddingBottom:10
},

title:{
fontSize:28,
fontWeight:"700"
},

subtitle:{
marginTop:6,
color:"#666"
}

});