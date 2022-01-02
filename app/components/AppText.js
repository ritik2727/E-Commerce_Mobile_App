import React from 'react';
import defaultStyles from '../config/Styles';
import { Text } from 'react-native';

function AppText({children,style,...otherProps}) {
    return (
        <Text style={[defaultStyles.text,style]} {...otherProps}>{children}</Text>
    );
}

export default AppText;