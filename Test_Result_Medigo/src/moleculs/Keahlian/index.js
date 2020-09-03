import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Button } from 'react-native';
import { colors } from '../../utils';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Axios from 'axios';
import { URL_API } from '../../supports/URL_API';

const Keahlian = (props) => {
    const [keahlian, setKeahlian] = useState([])

    useEffect(()=>{getKeahlian()},[])

    const getKeahlian = () => {
        Axios.get(URL_API + 'keahlian/' + props.id)
        .then((res)=>{
            setKeahlian(res.data.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    const render = () => {
        let sliceKeahlian = keahlian.slice(0,3)

        return sliceKeahlian.map((val, index) => {
            return(
                <View style={{borderBottomWidth : 0.2, justifyContent:'center',alignContent:'center'}} key={index}>
                    <View style={{padding:20}}>
                        <Text style={{color:colors.text.menuInactive, fontSize:18, marginBottom: 10}}>{val.Keahlian}</Text>
                    </View>
                </View>
            )
        })
    }
    


    if(keahlian.length === 0){
        return(
            <View/>
        )
    }

    return(
        <View style={{padding: 30}}>
            <Text style={{color:colors.text.menuInactive, fontSize:20, marginBottom: 10}}>Keahlian</Text>
            <View style={styles.wrapper}>

                {render()}

                {
                    keahlian.length > 3 
                    ?
                    <View style={{flexDirection:'row', justifyContent:'space-between', padding:20}}>
                        <Text style={{color:'#31B057', fontSize:16}}>Lihat Semua</Text>
                        <AntDesign
                        name='right' 
                        size={25}
                        color={colors.text.secondary}
                    />
                    </View>

                    :
                    <View/>
                }

            </View>
        </View>
    )
}

export default Keahlian

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: 'white',
        borderRadius: 5,
        shadowColor : colors.black,
        shadowOffset : {
            width : 0,
            heigth : 1
        },
        shadowOpacity : 0.22,
        shadowRadius : 2.22,
        elevation : 3,
    }
})