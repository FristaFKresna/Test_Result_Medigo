import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-elements';
import { colors } from '../../utils';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const ListDoctor = (props) => {

    const getThisDay = () => {
        var Days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu']
        var date = new Date().getDay()
        return Days[date]
    }


    return(
        <TouchableOpacity onPress={props.onPress}>
            <View style={styles.wrapper} key={props.key}>
                <View style={{flexDirection : 'row', justifyContent : 'space-between', alignItems : 'center'}}>
                    <View>
                        <Text style={{color: colors.primary, fontSize : 20}}>{props.Nama}</Text>
                        <View style={{flexDirection : 'row', alignItems:'center'}}>
                            <FontAwesome5 
                                name='hospital-alt'
                                style={{alignSelf:'center', marginRight: 10, marginTop: 10}}
                            />
                            <Text style={{color: colors.text.primary, fontSize : 16, marginTop : 10}}>{props.RumahSakit}</Text>
                        </View>
                        <View style={{flexDirection : 'row'}}>
                            <FontAwesome5 
                                name='clock'
                                style={{alignSelf:'center', marginRight: 10, marginTop: 10}}
                            />
                            <Text style={{color: '#0F752E', fontSize : 16, marginTop : 5}}>{`"Praktik hari ${props.Hari === getThisDay() ? 'hari ini' : props.Hari} (${props.Jam})`}</Text>
                        </View>
                    </View>
                    
                    <Avatar size='medium' rounded title='MD' activeOpacity={0.7} avatarStyle={{backgroundColor:colors.text.secondary}}/>
                </View>


                {
                    props.BookingOnline === 1 ?

                    <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center', marginTop : 20, backgroundColor : '#E8E8E8', height : 50}}>
                        <FontAwesome5 
                            name='check-circle'
                            size={30}
                        />
                        <Text style={{color: colors.primary, fontSize : 18, marginLeft : 15}}>Bisa buat janji online</Text>
                    </View>

                    :
                    <View/>
                }
            </View>
        </TouchableOpacity>
    )
}

export default ListDoctor

const styles = StyleSheet.create({
    wrapper : {
        backgroundColor : 'white',
        padding : 20,
        margin : 20,
        borderRadius : 5,
        shadowOffset : {
            width : 0,
            heigth : 1
        },
        shadowOpacity : 0.22,
        shadowRadius : 2.22,
        elevation : 3,
    }
})