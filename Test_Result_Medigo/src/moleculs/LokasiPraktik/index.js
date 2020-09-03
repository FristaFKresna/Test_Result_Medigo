import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../../utils';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Axios from 'axios';
import { URL_API } from '../../supports/URL_API';

const LokasiPraktik = (props) => {
    const [jadwal, setJadwal] = useState([])

    useEffect(()=>{getJadwal()},[])

    const getJadwal = () => {
        Axios.get(URL_API + 'jadwal/dokter/' + props.id)
        .then((res)=>{
            setJadwal(res.data.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    const renderJadwal = () => {
        var sliceJadwal = jadwal.slice(0,2)

        return sliceJadwal.map((val, index)=>{
            return(
                <View style={{padding:20, borderBottomWidth : 0.2}} key={index}>
                    <Text style={{color:colors.primary, fontSize:18, marginBottom: 10}}>{val.RumahSakit}</Text>
                    <View style={{flexDirection:'row', alignItems: 'center', justifyContent:'space-around'}}>
                        <AntDesign
                        name='enviromento' 
                        size={25}
                        color={colors.text.secondary}
                        />
                        <Text style={{color:colors.text.menuInactive, fontSize:16, marginBottom: 10, marginLeft:40}}>{val.AlamatRS}</Text>
                        <AntDesign
                            name='right' 
                            size={25}
                            color={colors.text.secondary}
                        />
                    </View>
                </View>
            )
        })
    }

    if(jadwal.length === 0){
        return(
            <View></View>
        )
    }

    return(
        <View style={{padding: 30}}>
            <Text style={{color:colors.text.menuInactive, fontSize:20, marginBottom: 10}}>Lokasi Praktik</Text>
            <View style={styles.wrapper}>

                {renderJadwal()}

                {
                    jadwal.length > 2 
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

export default LokasiPraktik

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