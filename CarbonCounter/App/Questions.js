import React from 'react';
import {View} from 'react-native';
import {ThemeProvider, Slider, Button, Icon, Text} from 'react-native-elements';

export default class Questions extends React.Component {
    static navigationOptions = ({navigation}) => {
        return {
            title: "Question " + navigation.getParam('questionNumber', 'null'),
        };
    };

    render() {
        const questions = this.props.navigation.state.params.questions;
        const questionNumber = this.props.navigation.state.params.questionNumber;

        return (
            <View style={{flex: 1, flexDirection: 'column'}}>
                <View style={{flex: 1, alignItems: 'center', marginTop: 90}}>
                    <Text style={{
                        fontSize: 25,
                        textAlign: 'center',
                        marginHorizontal: 20
                    }}>{questions[questionNumber - 1].question}</Text>
                    <Text style={{fontSize: 40, fontWeight: 'bold', marginTop: 20}}>1</Text>
                </View>
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', marginBottom: 70}}>
                    <Slider style={{width: 300}}
                            maximumValue={questions[questionNumber - 1].max}
                            minimumValue={questions[questionNumber - 1].min}
                            step={1}/>
                    <Button
                        icon={<Icon name="arrow-forward" size={20} color="white" iconStyle={{marginTop: 2}}/>}
                        iconRight
                        buttonStyle={{marginLeft: 0, marginRight: 0, width: 320, marginTop: 60}}
                        title='NEXT '
                        onPress={() => this.props.navigation.navigate(questions.length === questionNumber ? 'Results' : 'Questions', questions.length === questionNumber ? {questions: questions} : {
                            questions: questions,
                            questionNumber: questionNumber + 1
                        })}
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
