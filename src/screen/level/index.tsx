import { StackActions } from '@react-navigation/native'
import React, { useState } from 'react'
import { FlatList, Image, ImageBackground, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
const image1 = require('../../../assets/www/pics_lg/1.png')
const image2 = require('../../../assets/www/pics_lg/71.png')
const image3 = require('../../../assets/www/pics_lg/141.png')
const image4 = require('../../../assets/www/pics_lg/211.png')
const image5 = require('../../../assets/www/pics_lg/281.png')
const image6 = require('../../../assets/www/pics_lg/351.png')
const image7 = require('../../../assets/www/pics_lg/421.png')

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
export default ({ navigation }: any) => {

    const [listItem, setListItem] = useState<any[]>([]);

    const renderItem = (item: any) => {
        let source
        switch (item.index) {
            case 0:
                source = image1
                break;
            case 1:
                source = image2
                break;
            case 2:
                source = image3
                break;
            case 3:
                source = image4
                break;
            case 4:
                source = image5
                break;
            case 5:
                source = image6
                break;
            case 6:
                source = image7
                break;
            default:
                source = image1
                break;
        }

        return <View>
            <TouchableOpacity style={{
                width: '100%',
                marginVertical: 10,
                height: 76,
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
            }} activeOpacity={0.6} onPress={() => {
                navigation.navigate('LevelDetail', {
                    state: item
                })
            }}>
                <Image source={source} style={{
                    width: 60,
                    height: 60,
                    borderRadius: 30,
                    marginRight: 10
                }} />
                <Text
                    style={{
                        fontSize: 25,
                        fontWeight: '700',
                        color: '#000'
                    }}>
                    level{item.index + 1}
                </Text>
            </TouchableOpacity>
        </View>

    }

    const [categories, setCategories] = useState<any[]>([]);


    React.useEffect(() => {
        const func = async () => {
            await getCategories();
        }
        func()
    }, []);

    React.useEffect(() => {
        if (categories.length > 0) {
            const listArray = []
            const size = 70
            for (var i = 0; i < categories.length; i += size) {
                listArray.push(categories.slice(i, i + size));
            }
            setListItem(listArray.map((item, index) => {
                return {
                    index,
                    data: [...item]
                }
            }))
        }
    }, [categories])

    const getCategories = () => {
        db.transaction((txn: { executeSql: (arg0: string, arg1: never[], arg2: (sqlTxn: any, res: any) => void, arg3: (error: any) => void) => void; }) => {
            txn.executeSql(
                `SELECT * FROM words`,
                [],
                (sqlTxn: any, res: { rows: { length: number; item: (arg0: number) => any; }; }) => {
                    let len = res.rows.length;

                    if (len > 0) {
                        let results: any[] = [];
                        for (let i = 0; i < len; i++) {
                            let item = res.rows.item(i);
                            results.push(item)
                        }
                        setCategories(results);
                    }
                },
                (error: { message: string; }) => {
                    console.log("error on getting categories " + error.message);
                },
            );
        });
    };
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
                {listItem.length > 0 &&
                    <FlatList
                        style={{
                            width: '100%',
                            flex: 1,
                            paddingHorizontal: 10,
                            marginTop: 10
                        }}
                        data={listItem}
                        renderItem={(item) => renderItem(item)}
                        keyExtractor={(_, index) => index.toString()}
                    />
                }
            </ImageBackground>

        </View>

    </>
}