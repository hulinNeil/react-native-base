import React, { Component } from 'react';
import { Platform, StyleSheet, Button, Text, View } from 'react-native';

import { connect } from 'react-redux';
import { add, cut } from '../actions';

class Video extends Component {
    constructor(props) {
        super(props)
    }
    static navigationOptions = {
        title: 'video',
    };
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>中国·星儿歌{this.props.value}</Text>
                <Text style={styles.welcome} onPress={() => this.props.navigation.goBack()}>video-back</Text>
            </View>
        );
    }
}

const select = (store) => {
    return {
        value: store.numStore.value
    }
}

export default connect(select)(Video);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    }
});
