import React from 'react';
import {StatusBar, ScrollView, Platform } from 'react-native';
import {Button, Text, ThemeProvider, Card, Icon } from 'react-native-elements';
import {createAppContainer, SafeAreaView } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import { StackViewStyleInterpolator } from 'react-navigation-stack'
import Navigation from "./App/components/Navigation";
import Home from "./App/Home";
import Questions from "./App/Questions";

if (Platform.OS === 'android') {
    SafeAreaView.setStatusBarHeight(0);
}

global.theme = {
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

export default class App extends React.Component {
    render() {
       return (
          <SafeAreaView style={{ flex: 1 }}>
              <ThemeProvider theme={global.theme}>
                  <AppContainer/>
              </ThemeProvider>
          </SafeAreaView>
       );
    }
}

const AppNavigator = createStackNavigator(
    {
        Home: Home,
        Questions: Questions
    },
    {
        initialRouteName: 'Home',
        headerLayoutPreset: 'center',
        transitionConfig: () => ({
            screenInterpolator: StackViewStyleInterpolator.forHorizontal
        }),
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#0B7310',
            },
            headerTitleStyle: {
                color: 'white',
                fontWeight: '500',
                flex: 1,
            },
            headerTintColor: '#ffffff'
        },
    },
);

const AppContainer = createAppContainer(AppNavigator);
