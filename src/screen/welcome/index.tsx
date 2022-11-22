import Box from '@src/components/Box'
import React from 'react'
import { Image, ImageBackground, SafeAreaView, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import LinearGradient from 'react-native-linear-gradient'

const Welcome = ({ navigation }: any) => {
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
                    <TouchableOpacity onPress={() => { navigation.navigate('Level') }} style={{ width: '100%', flexDirection: 'row', justifyContent: 'center' }}>
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