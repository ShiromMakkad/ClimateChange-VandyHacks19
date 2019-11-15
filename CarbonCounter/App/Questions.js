import React from 'react';
import {View} from 'react-native';
import {ThemeProvider, Slider, Button, Icon, Text} from 'react-native-elements';
import {NavigationActions} from 'react-navigation';

export default class Questions extends React.Component {
    constructor(props) {
        super(props);

        this._next = this._next.bind(this);
    }

    static navigationOptions = ({navigation}) => {
        return {
            title: "Question " + navigation.getParam('questionNumber', 'null'),
        };
    };

    state = {
        sliderValue: 1,
    };

    _next = function (questions, questionNumber) {
        questions[questionNumber - 1].value = 1;
        this.props.navigation.push(questions.length === questionNumber ? 'Results' : 'Questions', questions.length === questionNumber ? {questions: questions} : {
            questions: questions,
            questionNumber: questionNumber + 1
        })
    };

    render() {
        let questions = this.props.navigation.state.params.questions; //The question's value gets updated and passed to the next screen.
        const questionNumber = this.props.navigation.state.params.questionNumber;
        return (
            <View style={{flex: 1, flexDirection: 'column'}}>
                <View style={{flex: 1, alignItems: 'center', marginTop: 90}}>
                    <Text style={{
                        fontSize: 25,
                        textAlign: 'center',
                        marginHorizontal: 20
                    }}>{questions[questionNumber - 1].question}</Text>
                    <Text style={{fontSize: 40, fontWeight: 'bold', marginTop: 20}}>{this.state.sliderValue}</Text>
                </View>
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', marginBottom: 70}}>
                    <Slider style={{width: 300}}
                            maximumValue={questions[questionNumber - 1].max}
                            minimumValue={questions[questionNumber - 1].min}
                            step={1} value={this.state.sliderValue}
                            onValueChange={(sliderValue) => this.setState({sliderValue})}/>
                    <Button
                        icon={<Icon name="arrow-forward" size={20} color="white" iconStyle={{marginTop: 2}}/>}
                        iconRight
                        buttonStyle={{marginLeft: 0, marginRight: 0, width: 320, marginTop: 60}}
                        title='NEXT '
                        onPress={() => this._next(questions, questionNumber)}
                    />
                </View>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingVertical: 6,
                    backgroundColor: global.theme.colors.primary
                }}>
                    <Slider disabled={true} minimumTrackTintColor='#b3b3b3' maximumTrackTintColor='#ffffff'
                            maximumValue={questions.length} minimumValue={0} step={1}
                            value={parseInt(questionNumber, 10)}
                            style={{width: 300}} trackStyle={{height: 14, borderRadius: 14 / 2}}
                            thumbStyle={{opacity: 0}}/>
                    <Text style={{
                        color: 'white',
                        marginLeft: 15,
                        fontSize: 16,
                        fontWeight: '400'
                    }}>{questionNumber + " / " + questions.length}</Text>
                </View>
            </View>
        )
    }
}
