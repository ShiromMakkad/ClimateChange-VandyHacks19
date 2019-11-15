import React from 'react';
import {StatusBar, ScrollView} from 'react-native';
import {Button, Text, ThemeProvider, Card, Icon} from 'react-native-elements';
import {createAppContainer, SafeAreaView} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Questions from './Questions';
import Navigation from './components/Navigation'
import {StackViewStyleInterpolator} from 'react-navigation-stack'

export default class Home extends React.Component {
    state = {
        questions: [
            {
                number: 1,
                question: "How many beds do you have in your house?",
                min: 1,
                max: 5,
                value: -1,
            },
            {
                number: 2,
                question: "How many minutes do you shower for?",
                min: 1,
                max: 60,
                value: -1,
            }
        ],
    };

    static navigationOptions = {
        title: "Carbon Counter",
        headerTitle: <Navigation/>,
        headerStyle: {
            height: 85,
            backgroundColor: '#0B7310'
        },
    };

    render() {
        return (
            <ScrollView>
                <Card>
                    <Text style={{fontWeight: '500', fontSize: 18}}>Carbon Counter</Text>
                    <Text style={{marginBottom: 10}}>
                        This will ask you a few questions, calculate your carbon emissions, and give you steps on how
                        you can reduce it.
                    </Text>
                    <Button
                        icon={<Icon name="arrow-forward" size={20} color="white" iconStyle={{marginTop: 2}}/>}
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
