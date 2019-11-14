import React from 'react';
import { View, Image } from "react-native";
import {Text} from "react-native-elements";

export default class Navigation extends React.Component {
    render() {
        return (
            <View style={{
                flexDirection: 'row',
                alignContent: 'center',
                justifyContent: 'center',
                padding: 5,
                backgroundColor: global.theme.colors.primary,
                paddingVertical: 16,
                borderBottomColor: 'black',
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.23,
                shadowRadius: 2.62,
                elevation: 4,
            }}>
                <Image style={{width: 50, height: 50}} source={require('../../assets/icon.png')}/>
                <Text style={{alignSelf: 'center', color: 'white', fontWeight: '500', fontSize: 22}}> Carbon Counter</Text>
            </View>
        );
    }
};
