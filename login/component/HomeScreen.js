import React from 'react';
import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { createStackNavigator } from 'react-navigation';
import ButtonClass from './Button'


export default class HomeScreen extends React.Component{
    static navigationOptions = {
        title: 'tyKet',
    };
    render() {
        return (
            <View>
            <ImageBackground source={require('../media/tyket_logo.jpg')} style={{ height: '100%', width: '100%' }}>
                    <View style={styles.buttonGroup}>
                        <Text style={styles.textStyle}>Your Events Everywhere!</Text>
                        <ButtonClass
                            title='Sign Up'
                            icon={{ name: 'description' }}
                            onPress={() => this.props.navigation.navigate('SignUp')}
                        />
                        <ButtonClass title='Sign In'
                         onPress={() => this.props.navigation.navigate('SignIn')}
                            icon={{ name: 'label' }}
                         />
                    </View>
                    <View>
                        <Text style={styles.textFont} > Copyright ©2018 MyN3 Corporation Inc. All rights reserved.</Text>
                    </View>
            </ImageBackground>    
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        fontSize: 20,
        textAlign: 'center',
        margin: 20,
    },
    button: {   
        marginTop: 10,
        paddingTop: 20,
        paddingBottom: 20,
        backgroundColor: 'blue',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff'
    },
    buttonGroup: {
        marginTop: 375,
    },
    textStyle: {
        color: 'blue',
        textAlign: 'right',
        marginTop: -10,
        marginRight: 20,
    },
    textFont: {
        paddingTop: 7,
        fontSize: 12,
        textAlign: 'center'
    }
});

