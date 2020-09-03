import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Avatar } from 'react-native-elements';
import { colors } from '../../utils';
import { JadwalPraktik, LokasiPraktik, Keahlian, PenyakitTerkait } from '../../moleculs';
import { URL_API } from '../../supports/URL_API';
import Axios from 'axios';


const DoctorProfile = (props) =>{
    const [dokter, setDokter] = useState(null)
    
    useEffect(()=>{getDokter()},[])

    const getDokter = () => {
        Axios.get(URL_API + 'dokter/' + props.route.params.idDokter)
        .then((res)=>{
            setDokter(res.data.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    }



    if(dokter === null){
        return(
            <View></View>
        )
    }


    return(
        <View style={styles.wrapper}>
            <View style={{backgroundColor: 'white', padding: 10}}>
                <View style={{flexDirection : 'row', justifyContent:'space-between', padding : 20}}>
                    <AntDesign
                        name = 'arrowleft'
                        size = {30}
                        color = {colors.text.secondary}
                        onPress = {()=>props.navigation.goBack()}
                    />
                     <AntDesign
                        name = 'sharealt'
                        size = {30}
                        color = {colors.text.secondary}
                    />
                </View>

                <View style={{flexDirection : 'row', justifyContent:'space-between', padding : 20, alignItems:'center'}}>
                    <View>
                        <Text style={{color:colors.primary, fontSize: 25, marginBottom:10}}>{dokter[0].Nama}</Text>
                        <Text style={{color:colors.text.secondary, fontSize: 18}}>{dokter[0].Gender}</Text>
                    </View>
                    <Avatar size='large' rounded title='MD' activeOpacity={0.7} avatarStyle={{backgroundColor:colors.text.secondary}}/>
                </View>
            </View>
            
            <ScrollView>
                <JadwalPraktik/>
                <LokasiPraktik
                    id = {props.route.params.idDokter}
                />
                <Keahlian
                    id = {props.route.params.idDokter}
                />
                <PenyakitTerkait
                    id = {props.route.params.idDokter}
                />
            </ScrollView>
        </View>
    )
}

export default DoctorProfile

const styles = StyleSheet.create({
    wrapper: {
        flex: 1
    }
})