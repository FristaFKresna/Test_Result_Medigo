import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, ScrollView, View } from 'react-native';
import { SearchLocation, HeaderSearch, ListSpesialisasi } from '../../moleculs';
import { colors, fonts } from '../../utils';
import Axios from 'axios';
import { URL_API } from '../../supports/URL_API';


const DoctorCategory = (props) => {
    const [search, setSearch] = useState('')
    const [spesialisasi, setSpesialisasi] = useState(null)

    useEffect(()=>{getSpesialisasi()},[])

    const getSpesialisasi = () => {
        Axios.get(URL_API + 'spesialisasi')
        .then((res)=>{
            setSpesialisasi(res.data.data)
            console.log(res.data.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    const render = () => {
        return spesialisasi.map((val)=>{
            return(
                <ListSpesialisasi
                    id = {val.id}
                    Spesialisasi = {val.Spesialisasi}
                    Deskripsi = {val.Deskripsi}
                    onPress={()=>props.navigation.navigate('ListDokter', {header : val.Spesialisasi, id : val.id})}
                />
            
            )
        })
    }



    if(spesialisasi === null){
        return(
            <View></View>
        )
    }

    return(
        <ScrollView>
            <SearchLocation
                onPress = {()=>props.navigation.goBack()}
                title = 'Dokter di sekitar'
            />

            <HeaderSearch
                title = 'Cari nama dokter...'
            />       

            <Text style={styles.title}>Spesialisasi Dokter</Text>
            
            {render()}

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    title : {
        color : colors.text.menuInactive,
        fontFamily : fonts.primary[600],
        fontSize : 18,
        padding : 20
    }
});

export default DoctorCategory