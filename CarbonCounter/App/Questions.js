import React from 'react';
import {View} from 'react-native';
import {Slider, Button, Icon, Text} from 'react-native-elements';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange,
    removeOrientationListener
} from 'react-native-responsive-screen';
import {diagonalScale} from "./Utilites/Scaling";

export default class Questions extends React.Component {
    constructor(props) {
        super(props);

        this._next = this._next.bind(this);
    }

    componentDidMount() {
        listenOrientationChange(this);
    }

    componentWillUnMount() {
        removeOrientationListener();
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
        questions[questionNumber - 1].value = this.state.sliderValue;
        this.props.navigation.push(questions.length === questionNumber ? 'Results' : 'Questions', questions.length === questionNumber ? {questions: questions} : {
            questions: questions,
            questionNumber: questionNumber + 1
        })
    };

    render() {
        let questions = this.props.navigation.state.params.questions; //The question's value gets updated and passed to the next screen.
        const questionNumber = this.props.navigation.state.params.questionNumber;
        return (
            <View style={{flex: 1}}>
                <View style={{justifyContent: 'space-evenly', flex: 1, marginHorizontal: wp('7%')}}>
                    <View style={{alignItems: 'center'}}>
                        <Text style={{
                            fontSize: diagonalScale(3.5),
                            textAlign: 'center',
                        }}>{questions[questionNumber - 1].question}</Text>
                        <View style={{height: hp('2%')}}/>
                        <Text style={{
                            fontSize: diagonalScale(4.5),
                            fontWeight: 'bold'
                        }}>{this.state.sliderValue}</Text>
                    </View>
                    <View style={{alignItems: 'center'}}>
                        <Slider style={{alignSelf: 'stretch'}}
                                maximumValue={questions[questionNumber - 1].max}
                                minimumValue={questions[questionNumber - 1].min}
                                step={1} value={this.state.sliderValue}
                                onValueChange={(sliderValue) => this.setState({sliderValue})}/>
                        <View style={{height: hp('2%')}}/>
                        <Button
                            icon={<Icon name="arrow-forward" color="white"/>}
                            iconRight
                            buttonStyle={{width: wp('70%')}}
                            title='NEXT '
                            onPress={(value) => this._next(questions, questionNumber)}
                        />
                    </View>
                </View>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingVertical: 4,
                    justifyContent: 'space-evenly',
                    width: '100%',
                    backgroundColor: global.theme.colors.primary
                }}>
                    <Slider disabled={true} minimumTrackTintColor='#b3b3b3' maximumTrackTintColor='#ffffff'
                            maximumValue={questions.length} minimumValue={0} step={1}
                            value={parseInt(questionNumber, 10)}
                            style={{width: wp('80%')}} trackStyle={{height: 14, borderRadius: 14 / 2}}
                            thumbStyle={{opacity: 0}}/>
                    <Text style={{
                        color: 'white',
                        fontSize: 16,
                        fontWeight: '400'
                    }}>{questionNumber + " / " + questions.length}</Text>
                </View>
            </View>
        )
    }
}
