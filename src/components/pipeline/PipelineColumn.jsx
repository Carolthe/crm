import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PipelineCard from "./PipelineCard";

export default function PipelineColumn({
    title,
    color,
    data
}){

    return(

        <View style={styles.column}>

            <View
            style={[
                styles.header,
                {backgroundColor:color}
            ]}
            >

                <Text style={styles.title}>
                    {title}
                </Text>

                <Text style={styles.count}>
                    {data.length}
                </Text>

            </View>

            {
                data.map(item=>(

                    <PipelineCard
                    key={item.id}
                    item={item}
                    />

                ))
            }

        </View>

    )

}

const styles=StyleSheet.create({

column:{
width:260
},

header:{
padding:15,
borderRadius:15,
flexDirection:"row",
justifyContent:"space-between",
alignItems:"center"
},

title:{
color:"#FFF",
fontWeight:"700",
fontSize:18
},

count:{
color:"#FFF",
fontWeight:"700"
}

});