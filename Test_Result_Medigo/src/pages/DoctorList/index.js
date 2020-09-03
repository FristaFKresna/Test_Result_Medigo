import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SearchLocation, ListDoctor } from '../../moleculs';
import { colors, fonts } from './../../utils';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { URL_API } from '../../supports/URL_API';
import Axios from 'axios';

const filter = ['Semua', 'Praktik hari ini', 'Booking online']

const DoctorList = (props) => {
    const [filterBtn, setFilterBtn] = useState('')
    const [jadwal, setJadwal] = useState([])

    useEffect(()=>{getJadwal()},[])

    const getJadwal = () => {
        Axios.get(URL_API + 'jadwal/' + props.route.params.id)
        .then((res)=>{
            setJadwal(res.data.data)
            console.log(res.data.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    
    const renderListDoctor = () => {
        return jadwal.map((val)=>{
            return(
                <ListDoctor
                    key = {val.id}
                    Nama = {val.Nama}
                    RumahSakit = {val.RumahSakit}
                    Hari = {val.Hari}
                    BookingOnline = {val.BookingOnline}
                    Jam = {val.Jam}
                    onPress = {()=>props.navigation.navigate('ProfileDokter', {idDokter : val.idDokter})}
                />
            )
        })
    }





    const renderFilterBtn = () => {
        return filter.map((val, index)=>{
            return(
                <View style={styles.filter} key={index}>
                    <TouchableOpacity onPress={()=>setFilterBtn(val)}>
                        <Text style={styles.label}>{val}</Text>
                    </TouchableOpacity>
                </View>
            )
        })
    }

    return(
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <SearchLocation
                    onPress = {()=>props.navigation.goBack()}
                    title = {props.route.params.header + ' di sekitar'}
                    icon = {true}
                    icon_name = 'search1'
                />

                <View style={styles.filterwrap}>
                    {renderFilterBtn()}
                </View>
            </View>

            <ScrollView>
                {
                    jadwal.length === 0 ?
                    <Text>Tidak Ada Jadwal</Text>
                    :
                    renderListDoctor()}
            </ScrollView>

            <View style={{flexDirection: 'row', justifyContent:'center'}}>
                <View style={{flexDirection: 'row', flex: 1, justifyContent:'center', backgroundColor:'white', padding: 15, borderRightWidth:0.3}}>
                    <Ionicons
                        name='filter'
                        size={30}
                    />
                    <Text style={{fontSize:20, color: colors.primary, marginLeft:10}}>Filter</Text>
                </View>
                <View style={{flexDirection: 'row', flex: 1, justifyContent:'center', backgroundColor:'white', padding: 15}}>
                    <Ionicons
                        name='arrow-down'
                        size={30}
                    />
                    <Text style={{fontSize:20, color: colors.primary, marginLeft:10}}>Urutkan</Text>
                </View>
            </View>

        </View>
    )
}


export default DoctorList

const styles = StyleSheet.create({
    container : {
        flex : 1,
        
    },
    wrapper : {
        height : 180,
        shadowColor : colors.black,
        shadowOffset : {
            width : 0,
            heigth : 1
        },
        shadowOpacity : 0.22,
        shadowRadius : 2.22,
        elevation : 3,
        backgroundColor : 'white'
    },
    filter: {
        margin : 15,
        padding: 12,
        backgroundColor: 'white',
        marginRight: 10,
        height: 50,
        borderRadius:20,
        shadowOffset : {
            width : 0,
            heigth : 1
        },
        shadowOpacity : 0.22,
        shadowRadius : 2.22,
        elevation : 3        
    },
    label: {
        textAlign:'center',
        fontSize: 15,
        fontFamily: fonts.primary[300],
        color: colors.text.primary
    },
    filterwrap : {
        flex : 1, 
        flexDirection : 'row',
        marginTop : -20,
        justifyContent : 'space-between'
    }
})