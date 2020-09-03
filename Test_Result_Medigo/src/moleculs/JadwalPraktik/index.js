import React from 'react';
import { View, Text, StyleSheet, ScrollView, Button } from 'react-native';
import { colors } from '../../utils';
import AntDesign from 'react-native-vector-icons/AntDesign';

const JadwalPraktik = () => {
    return(
        <View style={{padding: 30}}>
            <Text style={{color:colors.text.menuInactive, fontSize:20, marginBottom: 10}}>Jadwal Praktik Terdekat</Text>
            <View style={styles.wrapper}>
                <View style={{padding:20}}>
                    <Text style={{color:colors.primary, fontSize:18, marginBottom: 10}}>Rumah Sakit Pusat Pertamina</Text>
                    <Text style={{color:colors.text.menuInactive, fontSize:16, marginBottom: 10}}>Kamis, 10 Juni 2018</Text>
                    <Text style={{color:colors.text.menuInactive, fontSize:16, marginBottom: 10}}>10.00 - 12.00</Text>
                    <Button
                        title='Buat Janji'
                        color='#31B057'
                    />
                </View>
                <View style={{flexDirection:'row', justifyContent:'space-between', padding:20, borderTopWidth:0.3}}>
                    <Text style={{color:'#31B057', fontSize:16}}>Lihat Semua</Text>
                    <AntDesign
                    name='right' 
                    size={25}
                    color={colors.text.secondary}
                />
                </View>
            </View>
        </View>
    )
}

export default JadwalPraktik

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