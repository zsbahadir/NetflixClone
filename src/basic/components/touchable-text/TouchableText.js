import React from "react";
import { Text, TouchableOpacity } from 'react-native';

function TouchableText(props){

    const {text, onPress, style } = props;
    
    return(
        <TouchableOpacity onPress ={onPress}>
            <Text style = {style}>{text}</Text>
        </TouchableOpacity>
    );
};

export default TouchableText;
