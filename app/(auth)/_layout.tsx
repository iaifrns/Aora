import { Stack } from 'expo-router'
import React, { Component } from 'react'

export class AuthLayout extends Component {
  render() {
    return (
      <Stack>
        <Stack.Screen name='sign-in' options={{headerShown: false}} />
        <Stack.Screen name='sign-up' options={{headerShown: false}} />
      </Stack>
    )
  }
}

export default AuthLayout
