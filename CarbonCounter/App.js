import React from 'react';
import {StatusBar, Platform, View} from 'react-native';
import {ThemeProvider} from 'react-native-elements';
import {createAppContainer, SafeAreaView} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {StackViewStyleInterpolator} from 'react-navigation-stack'
import Home from "./App/Home";
import Questions from "./App/Questions";
import Results from "./App/Results";

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

//Also see the android status bar in app.json 
const ColoredStatusBar = ({backgroundColor, ...props}) => (
    <View style={[{height: Platform.OS === 'ios' ? 20 : StatusBar.currentHeight}, { backgroundColor }]}>
        <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
);

export default class App extends React.Component {
    render() {
        return (
            <SafeAreaView style={{flex: 1}} forceInset={{top: 'never'}}>
                <ThemeProvider theme={global.theme}>
                    <ColoredStatusBar backgroundColor={global.theme.colors.primary} barStyle="light-content" />
                    <AppContainer/>
                </ThemeProvider>
            </SafeAreaView>
        );
    }
}

const AppNavigator = createStackNavigator(
    {
        Home: Home,
        Questions: Questions,
        Results: Results
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
