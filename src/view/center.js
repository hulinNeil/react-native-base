import React, { Component } from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';

import { connect } from 'react-redux';
import { add, cut } from '../actions';

class Center extends Component {
    constructor(props) {
        super(props)
    }
    static navigationOptions = {
        title: '我的',
    };
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome} onPress={() => this.props.navigation.navigate('Video')}>中国·星儿歌</Text>
                <Text style={styles.welcome}>个人中心{this.props.value}</Text>
                <Button title='加大數字' onPress={() => this.props.dispatch(add(this.props.value))}></Button>
                <Button title='減少數字' onPress={() => this.props.dispatch(cut(this.props.value))}></Button>
            </View>
        )
    }
}


const select = (store) => {
    return {
        value: store.numStore.value
    }
}

export default connect(select)(Center);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    }
})
