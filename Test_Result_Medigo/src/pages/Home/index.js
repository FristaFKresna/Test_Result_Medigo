import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';
import Logo from './../../assets/logo.png';
import Logo1 from './../../assets/logo1.png';
import Logo2 from './../../assets/logo2.png';
import Logo3 from './../../assets/logo3.png';
import { colors, fonts} from './../../utils';
import AntDesign from 'react-native-vector-icons/AntDesign';


const Home = (props) => {
  return (
    <View style={styles.container} >
        <View style={styles.content}>
            <Image source={Logo} style={styles.wrapper}  />
            <Text style={styles.title}>
                Selamat Datang di IHC Mobile
            </Text>
            <Text style={styles.quote}>
                Kami Memberikan pelayanan komprehensif dan terpadu dengan standar pelayanan terakreditasi.
            </Text>

            <View style={styles.menu}>
                <Image source={Logo1} style={styles.menuLogo}/>
                <View style={styles.menuText}>
                    <Text style={styles.menuTextTitle}>Booking Cepat</Text>
                    <Text style={styles.menuTextDesc}>Pesan dokter langganan</Text>
                </View>
                <AntDesign
                    name='right' 
                    size={25}
                    onPress={()=>props.navigation.navigate('UnderConstruction')}
                />
            </View>

            <View style={styles.menu}>
                <Image source={Logo2} style={styles.menuLogo}/>
                <View style={styles.menuText}>
                    <Text style={styles.menuTextTitle}>Cari Faskes</Text>
                    <Text style={styles.menuTextDesc}>Rumah sakit dan klinik</Text>
                </View>
                <AntDesign
                    name='right' 
                    size={25}
                    onPress={()=>props.navigation.navigate('UnderConstruction')}
                />
            </View>

            <View style={styles.menu}>
                <Image source={Logo3} style={styles.menuLogo}/>
                <View style={styles.menuText}>
                    <Text style={styles.menuTextTitle}>Cari Dokter</Text>
                    <Text style={styles.menuTextDesc}>Umum dan spesialis</Text>
                </View>
                <AntDesign
                    name='right' 
                    size={25}
                    onPress={()=>props.navigation.navigate('CariDokter')}
                />
            </View>

        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container : {
        backgroundColor : '#E1F7E8',
        flex : 1
    },
    content: {
        padding: 20,
        flex: 1
    },
    wrapper : {
        width : 150,
        height : 50,
        marginBottom : 40
    },
    title : {
        color : colors.primary,
        fontFamily : fonts.primary[600],
        fontSize : 25,
    },
    quote : {
        fontFamily : fonts.primary[900],
        fontSize : 17,
        color : colors.text.secondary,
        marginVertical : 10
    },
    menu : {
        backgroundColor : 'white',
        height : 80,
        borderRadius : 5,
        marginVertical : 10,
        flex : 1,
        flexDirection : 'row',
        justifyContent : 'space-between',
        shadowColor : colors.black,
        shadowOffset : {
            width : 0,
            heigth : 1
        },
        shadowOpacity : 0.22,
        shadowRadius : 2.22,
        elevation : 3,
        alignItems : 'center',
        paddingHorizontal : 20
    },
    menuLogo : {
        width : 100,
        height : 100,
    },
    menuText : {
        marginLeft : -40,
        fontFamily : fonts.primary.normal
    },
    menuTextTitle : {
        color : colors.primary,
        fontSize : 20,
        marginBottom : 5
    },
    menuTextDesc : {
        color : colors.text.secondary,
        fontSize : 15
    }
    });

export default Home;
