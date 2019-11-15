import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-elements';

export default class Results extends React.Component {
    constructor(props) {
        super(props);

        const questions = this.props.navigation.state.params.questions;
        let carbonOutput = 0;

        for (let i = 0; i < questions.length; i++) {
            carbonOutput += questions[i].value;
        }

        console.log(carbonOutput);
    }

    static navigationOptions = {
        title: "Results",
    };

    render() {
        return (
            <View style={{flex: 1, flexDirection: 'column'}}>
                <Text>Test</Text>
            </View>
        )
    }
}
