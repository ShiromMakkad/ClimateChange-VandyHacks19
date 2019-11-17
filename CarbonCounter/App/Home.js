import React from 'react';
import {ScrollView, View} from 'react-native';
import {Button, Text, Card, Icon} from 'react-native-elements';
import Questions from './Questions';
import Navigation from './components/Navigation'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange, removeOrientationListener
} from 'react-native-responsive-screen';

export default class Home extends React.Component {
    componentDidMount() {
        listenOrientationChange(this);
    }

    componentWillUnMount() {
        removeOrientationListener();
    }

    state = {
        questions: [
            {
                number: 1,
                question: "How many beds do you have in your house?",
                min: 1,
                max: 5,
                value: -1, //Always set the value to -1. It's the field where the value the user responds with will be inputted
            },
            {
                number: 2,
                question: "How many minutes do you shower for?",
                min: 1,
                max: 60,
                value: -1,
            },
        ],
    };

    static navigationOptions = {
        title: "Carbon Counter",
        headerTitle: <Navigation/>,
        headerStyle: {
            height: hp('10%'),
            backgroundColor: '#0B7310'
        },
    };

    render() {
        return (
            <ScrollView>
                <Card>
                    <Text style={{fontWeight: '500', fontSize: 20}}>Carbon Counter</Text>
                    <Text>
                        This will ask you a few questions, calculate your carbon emissions, and give you steps on how
                        you can reduce it.
                    </Text>
                    <View style={{height: hp('2%')}}/>
                    <Button
                        icon={<Icon name="arrow-forward" color="white"/>}
                        iconRight
                        buttonStyle={{marginLeft: 0, marginRight: 0, marginBottom: 0}}
                        title='OPEN '
                        onPress={() => this.props.navigation.navigate('Questions', {
                            questions: this.state.questions,
                            questionNumber: 1
                        })}
                    />
                </Card>
            </ScrollView>
        );
    }
}
