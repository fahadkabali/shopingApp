import {    Stack } from "expo-router";
import * as React from 'react';
import { useOrderUpdateSubscription } from "../../../api/subscriptions";
export default function OrderLayout() {
    useOrderUpdateSubscription()
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