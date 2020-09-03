import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import { colors } from './../../utils'
import AntDesign from 'react-native-vector-icons/AntDesign';


const HeaderSearch = ({title, search, onChangeText, value, onPressFavorit}) => {
    return (
        <View style={styles.container}>
            <AntDesign 
                name='search1' 
                size={30} color={colors.primary} 
            />

            <TextInput style={styles.input} placeholder={title} onChangeText={onChangeText} value={value} />
            <View style={{flexDirection:"row",flex:1,justifyContent:'flex-end', alignItems:'center'}}>
            </View>
      </View>
    )
}

export default HeaderSearch

const styles = StyleSheet.create({
    container: {
        backgroundColor : 'white',
        paddingHorizontal : 20,
        paddingVertical : 10,
        flexDirection:"row",
        alignItems : 'center',
        shadowColor : colors.black,
        shadowOffset : {
            width : 0,
            heigth : 1
        },
        shadowOpacity : 0.22,
        shadowRadius : 2.22,
        elevation : 3,
    },
    input:{
        backgroundColor: colors.white,
        borderRadius: 10,
        padding: 10,
        fontSize: 18
    }
})