import AsyncStorage from '@react-native-community/async-storage'
import { StackActions } from '@react-navigation/native'
import Box from '@src/components/Box'
import React from 'react'
import { Alert, Image, ImageBackground, SafeAreaView, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import LinearGradient from 'react-native-linear-gradient'

const Welcome = ({ navigation }: any) => {


    const addPoint = async () => {
        try {
            const userData = await AsyncStorage.getItem('user')
            if (userData !== null) {
                const userParse = JSON.parse(userData)
                const dataSave = {
                    currentPoint: userParse.currentPoint + 10,
                    currentIngameLevel: userParse.currentIngameLevel,
                }
                await AsyncStorage.setItem('user', JSON.stringify(dataSave))
            }
        } catch (error) {
        }
    }



    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <ImageBackground source={require("../../../assets/image/background-theme.png")} resizeMode="cover" style={{
                flex: 1,
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center'
            }} >

                <Text style={{
                    fontFamily: 'LuckiestGuy-Regular',
                    fontSize: 30,
                    justifyContent: 'center',
                    flexDirection: 'row',
                    textAlign: 'center',
                    color: '#570149'
                }}>
                    Guess  The
                    Movie & character
                </Text>
                <Image key={1} source={require('../../../assets/image/main-logo.png')} />

                <LinearGradient colors={['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.45)']} style={{
                    width: '70%',
                    borderColor: '#FF4A4A',
                    backgroundColor: '#FF4A4A',
                    borderWidth: 2,
                    paddingVertical: 8,
                    borderRadius: 29,
                    borderStyle: 'solid',
                    marginTop: 40
                }} >
                    <TouchableOpacity onPress={() => { navigation.navigate('Level') }} style={{ width: '100%', flexDirection: 'row', justifyContent: 'center' }}>
                        <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'center' }}>
                            <Text style={{
                                fontSize: 25,
                                color: 'white',
                                textAlign: 'center',
                                fontWeight: '700'
                            }}>
                                Play
                            </Text>
                        </View>
                    </TouchableOpacity>
                </LinearGradient>
                <LinearGradient colors={['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.45)']} style={{
                    width: '70%',
                    borderColor: '#FFB017',
                    backgroundColor: '#FFB017',
                    borderWidth: 2,
                    paddingVertical: 8,
                    borderRadius: 29,
                    borderStyle: 'solid',
                    marginTop: 16
                }} >
                    <TouchableOpacity onPress={() => { 
                        Alert.alert('Success', 'You have successfully to recive 10 points',[
                            {
                                text: 'OK',
                                onPress: async () => {
                                    await addPoint()
                                }
                            }
                        ])
                     }} style={{ width: '100%', flexDirection: 'row', justifyContent: 'center' }}>
                        <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'center' }}>
                            <Text style={{
                                fontSize: 25,
                                color: 'white',
                                textAlign: 'center',
                                fontWeight: '700'
                            }}>
                                Free Coins
                            </Text>
                        </View>
                    </TouchableOpacity>

                </LinearGradient>
            </ImageBackground>

        </View>
    )
}
export default Welcome