import React from 'react';
import { View } from 'react-native';
import {ThemeProvider, Slider, Button, Icon, Text} from 'react-native-elements';

export default class Questions extends React.Component {
    static navigationOptions = {
        title: 'Questions',
    };

    render() {
        return (
            <View style={{flex: 1, flexDirection: 'column'}}>
                <View style={{flex: 1, alignItems: 'center'}}>
                    <Text style={{fontSize: 25, textAlign: 'center', marginHorizontal: 15, marginTop: 150}}>How many bedrooms are in your house?</Text>
                    <Text style={{fontSize: 40, fontWeight:'bold', marginTop: 10}}>1</Text>
                </View>
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <Slider style={{width: 300}}/>
                    <Button
                        icon={ <Icon name="arrow-forward" size={20} color="white" iconStyle={{marginTop: 2}}/> }
                        iconRight
                        buttonStyle={{marginLeft: 0, marginRight: 0, marginBottom: 90, width: 320, marginTop: 60}}
                        title='NEXT '
                        onPress={() => this.props.navigation.navigate('Questions')}
                    />
                </View>
            </View>
        )
    }
}
