import {    Stack } from "expo-router";
import * as React from 'react';
export default function OrderLayout() {
    return (
    <Stack>
        <Stack.Screen 
            name="index" 
            options={{ 
                headerShown: true, 
                title: "Orders" 
                }} 
            />
    </Stack>
    )
}