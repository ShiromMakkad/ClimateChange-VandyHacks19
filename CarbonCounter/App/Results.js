import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-elements';
import {diagonalScale} from "./Utilites/Scaling";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange,
    removeOrientationListener
} from 'react-native-responsive-screen';

export default class Results extends React.Component {
    constructor(props) {
        super(props);

        const questions = this.props.navigation.state.params.questions;
        this.carbonOutput = 0;

        for (let i = 0; i < questions.length; i++) {
            this.carbonOutput += questions[i].value;
        } // change this 
    }

    componentDidMount() {
        listenOrientationChange(this);
    }

    componentWillUnMount() {
        removeOrientationListener();
    }

    static navigationOptions = {
        title: "Results",
    };

    render() {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: hp('15%')
            }}>
                <Text style={{fontSize: diagonalScale(3)}}>Your carbon output:</Text>
                <View style={{height: hp('1%')}}/>
                <Text style={{fontSize: diagonalScale(4), fontWeight: 'bold'}}>{this.carbonOutput}</Text>
                <Text style={{fontSize: diagonalScale(2)}}>Parts Per Million</Text>
            </View>
        )
    }
}
