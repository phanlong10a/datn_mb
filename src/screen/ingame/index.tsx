import AsyncStorage from '@react-native-community/async-storage'
import { StackActions } from '@react-navigation/native'
import React, { useState } from 'react'
import { Alert, FlatList, Image, ImageBackground, Text, TextInput, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { image } from '../../configs/ImageCollection'
import { useUpdate } from 'ahooks';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
const image1 = require('../../../assets/www/pics_lg/1.png')
const image2 = require('../../../assets/www/pics_lg/2.png')
const image3 = require('../../../assets/www/pics_lg/3.png')
const image4 = require('../../../assets/www/pics_lg/4.png')
const image5 = require('../../../assets/www/pics_lg/5.png')
const image6 = require('../../../assets/www/pics_lg/6.png')
const image7 = require('../../../assets/www/pics_lg/7.png')

let SQLite = require('react-native-sqlite-storage')
function errorCB(err: string) {
    console.log("SQL Error: " + err);
}

function successCB() {
    console.log("SQL executed fine");
}

function openCB() {
    console.log("Database OPENED");
}

const db = SQLite.openDatabase({ name: 'rnsqlite', }, openCB, errorCB);
const Ingame = ({ navigation, route }: any) => {

    const [listItem, setListItem] = useState<any[]>([]);
    const [userData, setUserData] = useState<any>(null);
    const [answer, setAnswer] = useState('')
    const [text, setText] = React.useState("");
    const update = useUpdate();

    const renderItem = (item: any) => {

        return <TouchableOpacity
            style={{
                width: 110,
                height: 110,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                marginHorizontal: 10,
                marginVertical: 10,
                flex: 1 / 3
            }}
            activeOpacity={0.5}
        >
            <View style={{
                width: 100,
                height: 100,
                backgroundColor: '#FFFFFF',
                borderRadius: 18,
                shadowColor: 'rgba(255, 255, 255, 0.58)',
                shadowOffset: {
                    width: 0,
                    height: 2
                },
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 10,
                paddingVertical: 10,
            }}>
                {/* @ts-ignore */}
                <Image source={image[item.item.id]} style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: 18,
                    marginRight: 10
                }} />
            </View>
        </TouchableOpacity>

    }

    const [categories, setCategories] = useState<any[]>([]);

    const getUserData = async () => {
        try {
            const userData = await AsyncStorage.getItem('user')
            if (userData !== null) {
                setUserData(JSON.parse(userData))
            }
        } catch (error) {

        }
    }


    React.useEffect(() => {
        const func = async () => {
            await getUserData()
        }
        func()
    }, [])


    React.useEffect(() => {
        if (route.params?.data) {
            setAnswer(route.params?.data?.answer.replace(/\s/g, ''))
        }
    }, [route.params])

    const onChangeText = (text: string) => {
        if (text.replace(/\s/g, '').toLowerCase() == answer.toLowerCase()) {
            Alert.alert(
                'Correct!',
                'Your answer is correct!',
                [{
                    text: 'OK',
                    onPress: async () => {
                        try {
                            const userData = await AsyncStorage.getItem('user')
                            if (userData !== null) {
                                const userParse = JSON.parse(userData)
                                if (route.params.data.id == userParse.currentIngameLevel) {
                                    const dataSave = {
                                        currentPoint: userParse.currentPoint + 10,
                                        currentIngameLevel: userParse.currentIngameLevel + 1,
                                    }
                                    await AsyncStorage.setItem('user', JSON.stringify(dataSave))
                                    navigation.dispatch(StackActions.replace('LevelDetail', {
                                        ...route.params.currentParams
                                    }))
                                } else {
                                    navigation.dispatch(StackActions.replace('LevelDetail', {
                                        ...route.params.currentParams
                                    }))
                                }
                            }
                        } catch (error) {

                        }
                    }
                }]
            )
        }
    }

    const openHint = async () => {
        try {
            const userData = await AsyncStorage.getItem('user')
            if (userData === null) {
                throw new Error('error')
            }
            const dataUser = JSON.parse(userData)
            if (dataUser.currentPoint < 10) {
                Alert.alert(
                    'Cash out!',
                    'You have not money to hint!',
                    [{
                        text: 'OK'
                    }]
                )
            } else {
                Alert.alert(
                    'Your hint is:',
                    route.params?.data?.hint,
                    [{
                        text: 'OK',
                        onPress: async () => {
                            const dataSave = {
                                currentPoint: dataUser.currentPoint - 10,
                                currentIngameLevel: dataUser.currentIngameLevel,
                            }
                            await AsyncStorage.setItem('user', JSON.stringify(dataSave))
                            await getUserData()
                        }
                    }]
                )
            }
        } catch (error) {

        }

    }

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
                setUserData(dataSave)
            }
        } catch (error) {
        }
    }




    return <>
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <ImageBackground source={require("../../../assets/image/background-menu.png")} resizeMode="cover" style={{
                flex: 1,
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center'
            }} >
                <View
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        width: '100%',
                        paddingHorizontal: 10,
                    }}
                >
                    <TouchableOpacity activeOpacity={0.5} onPress={() => {
                        navigation.dispatch(StackActions.pop(1))
                    }}>
                        <Image source={require("../../../assets/image/back-icon.png")} />
                    </TouchableOpacity>
                    <Text style={{
                        fontFamily: 'LuckiestGuy-Regular',
                        fontSize: 30,
                        justifyContent: 'center',
                        flexDirection: 'row',
                        textAlign: 'center',
                        color: '#570149'
                    }}>
                    </Text>
                    <View style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        <Text style={{
                            fontFamily: 'LuckiestGuy-Regular',
                            fontSize: 30,
                            justifyContent: 'center',
                            flexDirection: 'row',
                            textAlign: 'center',
                            color: 'yellow'
                        }}>
                            ${userData?.currentPoint}
                        </Text>
                        <TouchableOpacity style={{
                            width: 30,
                            height: 30,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                        onPress={() => { 
                            Alert.alert('Success', 'You have successfully to recive 10 points',[
                                {
                                    text: 'OK',
                                    onPress: async () => {
                                        await addPoint()
                                    }
                                }
                            ])
                         }} 
                        >
                            <Text style={{
                                fontSize: 30,
                                lineHeight: 30
                            }}>
                                +
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{
                    display: 'flex',
                    flexDirection: 'column',
                    marginTop: 20,
                    alignItems: 'center',
                    width: '100%',
                    paddingHorizontal: 10,
                    flex: 1,
                    flexGrow: 1
                }}>
                    <View >
                        <Text style={{
                            fontFamily: 'LuckiestGuy-Regular',
                            fontSize: 30,
                            justifyContent: 'center',
                            flexDirection: 'row',
                            textAlign: 'center',
                            color: '#570149'
                        }}>
                            {route.params.level}
                        </Text>
                        <Text style={{
                            fontSize: 25,
                            fontWeight: '700',
                            color: '#000',
                            textAlign: 'center'
                        }}>
                            {route.params.data?.id}/70
                        </Text>

                    </View>
                    <View style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                        width: '100%',
                        marginTop: 40,
                        paddingHorizontal: 60,
                        marginBottom: 30
                    }}>
                        <Image source={require("../../../assets/image/share-icon.png")} />
                        <Image source={require("../../../assets/image/video-icon.png")} />
                        <TouchableOpacity activeOpacity={0.5} onPress={() => {
                            openHint()
                        }}>
                            <Image source={require("../../../assets/image/hint-icon.png")} />
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        backgroundColor: '#fff',
                        width: 310,
                        height: 310,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 20
                    }}>
                        <View style={{
                            backgroundColor: '#fff',
                            width: 277,
                            height: 277,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 20
                        }}>
                            <Image source={image[route.params.data.id]} style={{
                                backgroundColor: '#fff',
                                width: 277,
                                height: 277,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: 20
                            }} />
                        </View>
                    </View>
                    <View style={{
                        width: '100%',
                        padding: 10
                    }}>
                        <KeyboardAwareScrollView>
                            <View>
                                <TextInput
                                    style={{
                                        height: 60,
                                        borderWidth: 0,
                                        borderBottomWidth: 1,
                                        textAlign:'center',
                                        width: '100%',
                                        fontFamily: 'LuckiestGuy-Regular',
                                        fontSize: 30,
                                        color: '#570149'
                                    }}
                                    onChangeText={onChangeText}

                                />
                            </View>
                        </KeyboardAwareScrollView>

                    </View>
                </View>
            </ImageBackground>

        </View>

    </>
}
export default Ingame