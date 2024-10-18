import { Tabs } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import {StyleSheet, Text, View} from "react-native";
import React from "react";
import { FontAwesome } from '@expo/vector-icons';


function TabBarIcon(props: 
    { name: React.ComponentProps<typeof FontAwesome>['name']; 
        color: string }) {
    return <FontAwesome size={24} {...props} style={{color:'#1BC464'}}/>
}
const TabsLayout = () => {
    return (
       <SafeAreaView edges={['top']} style={styles.safeArea}>
         <Tabs
            screenOptions={{
                tabBarActiveTintColor:'#1BC464',
                tabBarInactiveTintColor: 'gray',
                tabBarLabelStyle: {
                    fontSize: 16,
                },
                tabBarStyle: {
                    height: 80,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,   
                    paddingTop: 10,
                }
            }}
            >
            <Tabs.Screen 
                name="index" 
                options={{
                    title: "Shop",
                    tabBarIcon(props){
                        return <TabBarIcon {...props} name="shopping-cart" />
                    },
                    // headerShown: false,
                }}
            />
            <Tabs.Screen name="orders" options={{
                title: "Orders",
                tabBarIcon(props){
                    return <TabBarIcon {...props} name="list" />
                }
            }}/>       
        </Tabs>
       </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    safeArea: {
        flex: 1
    }
})
export default TabsLayout