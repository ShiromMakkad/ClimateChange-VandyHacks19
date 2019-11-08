import React from 'react';
import { View, Text, Image, Platform, StatusBar } from 'react-native';
import { Button } from '@ant-design/react-native';
import { createAppContainer, SafeAreaView } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

if (Platform.OS === 'android') {
    SafeAreaView.setStatusBarHeight(0);
}

class App extends React.Component {
    static navigationOptions = {
        title: "Carbon Counter",
        headerTitle:(<View style={{flexDirection: 'row', alignContent: 'center', justifyContent: 'center', padding: 5}}><Image style={{width: 50, height: 50}} source={require('./assets/icon.png')}/><Text style={{alignSelf: 'center', color: 'white', fontWeight: '500', fontSize: 22}}>   Carbon Counter</Text></View>),
        headerStyle: {
            backgroundColor: '#0B7310',
            height: 85
        },
        headerTitleStyle: {
            color: 'white',
            fontWeight: '500',
            flex: 1
        }
    };

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <StatusBar barStyle="light-content" />
                <Button type="primary">Test</Button>
            </View>
        );
    }
}

const AppNavigator = createStackNavigator({
    Home: {
        screen: App,
    },
}, {headerLayoutPreset: 'center'});

export default createAppContainer(AppNavigator);
