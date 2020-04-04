import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Image, View, StyleSheet, ScrollView, KeyboardAvoidingView } from "react-native";
import { Text, Input, Button } from 'react-native-elements';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const HomeComponent = ({navigation}) => {
    const [login, setLogin] = useState(true);
    const [button1, setButton1] = useState('Login');
    //const [button3, setButton3] = useState('No Account? Create One');
    const [button3, setButton3] = useState('No Account? Create One');
    
    const onButton3Press = () => {
        const hideLogin = !login;
        setLogin(hideLogin);
        setButton1(hideLogin?'Login':'Signup')
        setButton3(hideLogin?'No Account? Create One':'Already have an account? Login');
    }
    
    return (
        <View style={styles.container}>
            <Image source={require('../images/shopping_cart.png')}
            style={styles.image}/>
            
            <Input textContentType='emailAddress' 
            placeholder='Email'
            labelStyle={{fontSize:20}}
            containerStyle={styles.input}
            leftIcon={<Icon
                name='user'
                size={24}
                color='#616161'
              />}
            leftIconContainerStyle={styles.leftIconInput}
            />

            <Input textContentType='password' 
            placeholder='Password'
            containerStyle={styles.input}
            labelStyle={{fontSize:20}}
            leftIcon={
                <Icon
                name='lock'
                size={24}
                color='#616161'
              />
            }
            leftIconContainerStyle={styles.leftIconInput}
            />

            {
                login?null:
            
            <Input placeholder='Confirm Password'
            containerStyle={styles.input}
            labelStyle={{fontSize:20}}
            leftIcon={
                <Icon
                name='lock'
                size={24}
                color='#616161'
              />
            }
            leftIconContainerStyle={styles.leftIconInput}
            />
}
            <Button containerStyle={styles.button} title={button1} onPress={()=>navigation.navigate('App')}/>
            {login?
            <Button containerStyle={styles.button} type='outline' title="Forgot Password" />
            :null}
            <Button containerStyle={styles.button} type='clear' 
            title={button3}
            onPress={onButton3Press}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        padding:16,
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        backgroundColor:'#EEEEEE'
    },
    image:{
        width:120, 
        height:120,
        resizeMode:'stretch',
        alignSelf:'center',
        marginBottom:24
    },
    imageContainer:{
        width:240, 
        height:240,
        alignItems:'center',
        alignSelf:'center'
    },
    leftIconInput:{
        marginRight:8,
        marginLeft:0
    },
    input:{
        marginLeft:16,
        marginRight:16,
        marginBottom:16
    },
    button:{
        marginTop:24,
        marginLeft: 24,
        marginRight:24
    }
})

export default HomeComponent;