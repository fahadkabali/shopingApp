import * as React from 'react';
import { Stack } from "expo-router";
import { ToastProvider } from 'react-native-toast-notifications'
import AuthProvider from "../providers/auth-provider";
import QueryProvider from '../providers/query-provider';
import { StripeProvider } from '@stripe/stripe-react-native';


export default function RootLayout() {
    return( 
        <ToastProvider>
            <AuthProvider>
                <QueryProvider>
                    <StripeProvider publishableKey={process.env.STRIPE_PUBLIC_KEY!}>
                    <Stack>
                        <Stack.Screen name="(shop)" options={{ headerShown: false, title: "Shop" }} />
                        <Stack.Screen name="categories" options={{ headerShown: false, title: "Categories" }} />
                        <Stack.Screen name="product" options={{ headerShown: false, title: "Product" }} />
                        <Stack.Screen name="cart" options={{ presentation: "modal", title: "Shopping cart" }} />
                        <Stack.Screen name="auth" options={{ headerShown: false}} />  
                    </Stack>
                    </StripeProvider>
                </QueryProvider>
            </AuthProvider>
        </ToastProvider>
    )
}