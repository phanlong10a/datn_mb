import { StackActions } from '@react-navigation/native'
import React, { useState } from 'react'
import { FlatList, Image, ImageBackground, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { image } from '../../configs/ImageCollection'
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
const LevelDetail = ({ navigation, route }: any) => {

    const [listItem, setListItem] = useState<any[]>([]);

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
                        Choose Level
                    </Text>
                    <Text>
                        130
                    </Text>
                </View>
                <FlatList
                    style={{
                        width: '100%',
                        flex: 1,
                        marginTop: 10,

                    }}
                    numColumns={3}
                    data={route.params.state.item.data}
                    renderItem={renderItem}
                    keyExtractor={(_, index) => index.toString()}
                />

            </ImageBackground>

        </View>

    </>
}
export default LevelDetail