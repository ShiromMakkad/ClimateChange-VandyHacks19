import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-elements';

export default class Results extends React.Component {
    ;

    constructor(props) {
        super(props);

        const questions = this.props.navigation.state.params.questions;
        this.carbonOutput = 0;

        for (let i = 0; i < questions.length; i++) {
            this.carbonOutput += questions[i].value;
        }
    }

    static navigationOptions = {
        title: "Results",
    };

    render() {
        return (
            <View style={{flex: 1, flexDirection: 'column', alignItems: 'center', marginBottom: 400}}>
                <Text style={{fontSize: 30, marginTop: 230}}>Your carbon output:</Text>
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: 20}}>
                    <Text style={{fontSize: 40, fontWeight: 'bold'}}>{this.carbonOutput}</Text>
                    <Text style={{fontSize: 20}}>Parts Per Million</Text>
                </View>
            </View>
        )
    }
}
