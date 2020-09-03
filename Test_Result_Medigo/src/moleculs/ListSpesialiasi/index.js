import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, fonts } from '../../utils';
import AntDesign from 'react-native-vector-icons/AntDesign';

const ListSpesialiasi = (props) => {
    
    return(
        <View style={styles.wrapper} key={props.id}>
            <View>
                <Text style={styles.menuTitle}>{props.Spesialisasi}</Text>
                <Text style={styles.menuDesc}>{props.Deskripsi}</Text>
            </View>
            <AntDesign
                name='right' 
                size={30} color={colors.text.secondary}
                onPress={props.onPress}   
            />
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper : {
        backgroundColor : 'white',
        height : 100,
        flex : 1,
        flexDirection : 'row',
        justifyContent : 'space-between',
        padding : 20,
        borderBottomWidth : 0.2,
        borderBottomColor : 'gray',
        alignItems : 'center'
    },
    title : {
        color : colors.text.menuInactive,
        fontFamily : fonts.primary[600],
        fontSize : 18,
        padding : 20
    },
    menuTitle : {
        color : colors.text.menuInactive,
        fontFamily : fonts.primary[600],
        fontSize : 20,
        marginBottom : 10
    },
    menuDesc : {
        color : colors.text.secondary,
        fontFamily : fonts.primary.normal,
        fontSize : 18,
    }
});

export default ListSpesialiasi