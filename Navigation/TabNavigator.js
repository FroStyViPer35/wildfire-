import * as React from "react"
import{Text, View, ToachableOpacity, StyleSheet} from "react-native"
import HomeScreen from "../Screens/HomeScreen"
import Information from "../Screens/info"
import Picker from "../Screens/Picker"
import{NavigationContainer} from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs"
import Ionicons from "react-native-vector-icons/Ionicons"

const Tab = createMaterialBottomTabNavigator()

export default class TabNavigation extends React.Component{
render(){
    return(
        <Tab.Navigator>
            <Tab.Screen name = "Home" component = {HomeScreen}/>
            <Tab.Screen name = "Info" component = {Information}/>
            <Tab.Screen name = "Pick" component = {Picker}/>
        </Tab.Navigator>
    )
}
}