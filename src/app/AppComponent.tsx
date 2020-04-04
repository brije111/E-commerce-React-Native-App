import React from 'react';
import { Button, View, Text } from "react-native";

const AppComponent = ({navigation}) => {
    return (
        <View>
            <Text>App Component</Text>
            <Button title="Go To Home" onPress={()=> navigation.navigate('Home')}/>
        </View>
    );
}

export default AppComponent;