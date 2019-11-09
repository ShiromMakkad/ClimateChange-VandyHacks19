import React from 'react';
import {View, Platform, StatusBar, ScrollView } from 'react-native';
import {Button, Text, Image, ThemeProvider, Slider, Card, Icon } from 'react-native-elements';
import {createAppContainer, SafeAreaView} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

if (Platform.OS === 'android') {
    SafeAreaView.setStatusBarHeight(0);
}

const theme = {
    colors: {
        primary: '#0B7310',
    },
    Slider: {
        // maximumTrackTintColor: '#6C757D',
        minimumTrackTintColor: '#6C757D',
        thumbStyle: {
            backgroundColor: '#0B7310',
            width: 25,
            height: 25,
            borderRadius: 25 / 2,
            padding: 9
        },
        trackStyle: {
            height: 6,
            borderRadius: 25 / 2
        }
    },
    Card: {
        containerStyle: {
            borderRadius: 3
        }
    }
};

class App extends React.Component {
    static navigationOptions = {
        title: "Carbon Counter",
        headerTitle: (
            <View style={{flexDirection: 'row', alignContent: 'center', justifyContent: 'center', padding: 5}}>
                <Image style={{width: 50, height: 50}} source={require('./assets/icon.png')}/>
                <Text style={{alignSelf: 'center', color: 'white', fontWeight: '500', fontSize: 22}}>  Carbon Counter</Text>
            </View>),
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
            <ThemeProvider theme={theme}>
                <ScrollView>
                    <StatusBar barStyle="light-content"/>
                    <Card>
                        <Text style={{fontWeight: '500', fontSize: 18}}>Carbon Counter</Text>
                        <Text style={{marginBottom: 10}}>
                           This will ask you a few questions, calculate your carbon emissions, and give you steps on how you can reduce it.
                        </Text>
                        <Button
                            icon={ <Icon name="arrow-forward" size={20} color="white" iconStyle={{marginTop: 2}}/> }
                            iconRight
                            buttonStyle={{marginLeft: 0, marginRight: 0, marginBottom: 0}}
                            title='OPEN '/>
                    </Card>
                    {/*<View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>*/}
                    {/*    <Button title="Test"/>*/}
                    {/*    <Slider style={{width: 300}}/>*/}
                    {/*</View>*/}
                </ScrollView>
            </ThemeProvider>
        );
    }
}

const AppNavigator = createStackNavigator({
    Home: {
        screen: App,
    },
}, {headerLayoutPreset: 'center'});

export default createAppContainer(AppNavigator);
