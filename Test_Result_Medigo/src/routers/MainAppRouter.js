import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import { Home, DoctorCategory, DoctorList, DoctorProfile } from '../pages';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import UnderConstruction from '../pages/UnderConstruction';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


const HomeRouter = () => {
    return(
        <Tab.Navigator>
            <Tab.Screen options={{
                tabBarIcon: (props) => {
                    return(
                        <Feather name='home' size={props.size} color={props.color} />
                    )
                }
            }} name="Home" component={Home} />
            
            <Tab.Screen options={{
                tabBarIcon: (props) => {
                    return(
                        <Fontisto name='date' size={props.size} color={props.color} />
                    )
                }
            }} name="Jadwal" component={UnderConstruction}/>

            <Tab.Screen options={{
                tabBarIcon: (props) => {
                    return(
                        <AntDesign name='wallet' size={props.size} color={props.color} />
                    )
                }
            }} name="Bayar" component={UnderConstruction}/>

            <Tab.Screen options={{
                tabBarIcon: (props) => {
                    return(
                        <AntDesign name='user' size={props.size} color={props.color} />
                    )
                }
            }} name="Profile" component={UnderConstruction}/>
        </Tab.Navigator>
    )
}

const MainAppRouter = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name='Home' component={HomeRouter} options={{headerShown:false}} />
            <Stack.Screen name='CariDokter' component={DoctorCategory} options={{headerShown:false}} />
            <Stack.Screen name='ListDokter' component={DoctorList} options={{headerShown:false}} />
            <Stack.Screen name='ProfileDokter' component={DoctorProfile} options={{headerShown:false}} />
            <Stack.Screen name='UnderConstruction' component={UnderConstruction} options={{headerShown:false}} />
        </Stack.Navigator>
    )
}



export default MainAppRouter
