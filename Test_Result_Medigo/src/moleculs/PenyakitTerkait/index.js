import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Button } from 'react-native';
import { colors } from '../../utils';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Axios from 'axios';
import { URL_API } from '../../supports/URL_API';

const PenyakitTerkait = (props) => {
    const [penyakit, setPenyakit] = useState([])

    useEffect(()=>{getPenyakit()},[])

    const getPenyakit = () => {
        Axios.get(URL_API + 'penyakit/' + props.id)
        .then((res)=>{
            setPenyakit(res.data.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    const render = () => {
        let slicePenyakit = penyakit.slice(0,3)

        return slicePenyakit.map((val, index)=>{
            return(
                <View style={{borderBottomWidth : 0.2, justifyContent:'center',alignContent:'center'}} key={index}>
                    <View style={{padding:20}}>
                        <Text style={{color:colors.text.menuInactive, fontSize:18, marginBottom: 10}}>{val.Penyakit}</Text>
                    </View>
                </View>
            )
        })
    }

    if(penyakit.length === 0){
        return(
            <View/>
        )
    }

    return(
        <View style={{padding: 30}}>
            <Text style={{color:colors.text.menuInactive, fontSize:20, marginBottom: 10}}>Penyakit Terkait</Text>
            <View style={styles.wrapper}>
                
                {render()}

                {
                    penyakit.length > 3 
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

export default PenyakitTerkait

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