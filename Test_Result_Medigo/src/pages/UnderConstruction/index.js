import React from 'react';
import {View, Text, Button} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';



const UnderConstruction = (props) => {
    return(
        <View style={{flex : 1, justifyContent:"center", alignItems:"center", backgroundColor:'#E1F7E8'}}>
            <Text style={{fontSize:30, marginBottom: 20}}>Under Construction</Text>
            <Ionicons name='construct' size={80} style={{marginBottom: 20}}/>
            <Button
                onPress={()=>props.navigation.goBack()}
                title="Go Back"
                
            />
        </View>
    )
}

export default UnderConstruction