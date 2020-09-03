import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { colors, fonts } from '../../utils';
import { Picker } from '@react-native-community/picker'



const SearchLocation = (props) => {
    const [location, setLocation] = useState('')

    return (
        <View style={styles.location}>
            <AntDesign 
                name='arrowleft' 
                size={30} color={colors.text.secondary}
                onPress={props.onPress}    
            />

            {props.picker === 'none' ?
                <View/>
            
            :
                <View style={styles.itemslocation}>
                    <Text style={styles.titlelocation}>{props.title}</Text>
                    <Picker 
                        selectedValue={location}
                        onValueChange={(value)=>setLocation(value)}
                        style={styles.picker}
                        
                        >
                        <Picker.Item color={colors.primary} label = 'Pilih Lokasi' value = ''/>
                        <Picker.Item color={colors.primary} label = 'jakarta' value = 'jakarta'/>
                        <Picker.Item color={colors.primary} label = 'jakarta' value = 'jakarta'/>
                        <Picker.Item color={colors.primary} label = 'jakarta barat' value = 'jakarta barat'/>
                    </Picker>
                </View>
            
            }

            {
                props.icon ? 
                <AntDesign 
                    name={props.icon_name}
                    size={30} color={colors.primary} 
                />
                :
                <Text/>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    location : {
        backgroundColor : 'white',
        flex : 1,
        flexDirection : 'row',
        alignItems : 'center',
        paddingHorizontal : 20,
        paddingVertical : 20
    },
    titlelocation : {
        color : colors.text.secondary,
        fontFamily : fonts.primary[600],
        fontSize : 15,
        marginTop : 10
    },
    itemslocation : {
        flex : 1,
        marginLeft : 20
    },
    picker : {
        marginLeft : 32,
        width : 170,
        transform : [
            { scaleX: 1.5 }, 
            { scaleY: 1.5 },
         ]
    },
});

export default SearchLocation