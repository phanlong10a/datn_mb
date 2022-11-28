import React, { useState } from 'react'
import { FlatList, Text, View } from 'react-native'

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
export default () => {

    const renderItem = (item: any) => {
        return <View>
            <Text>
                aaa
            </Text>
        </View>
    }

    const [categories, setCategories] = useState<any[]>([]);


    React.useEffect(() => {
        const func = async () => {
            await getCategories();
        }
        func()
    }, []);

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
        <FlatList
            data={categories}
            renderItem={renderItem}
            keyExtractor={item => item.id}
        />
    </>
}