import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Welcome = ({ navigation }: any) => {
    return (
        <View>
            <TouchableOpacity activeOpacity={0.8} onPress={() => { navigation.navigate('Level') }}>
                <Text>
                    wellcome
                </Text>
            </TouchableOpacity>

        </View>
    )
}
export default Welcome