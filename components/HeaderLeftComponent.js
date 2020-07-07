import React from 'react';
import { TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';


class HeaderLeftComponent extends React.Component {
    render() {
        return (
            <TouchableOpacity>
                <MaterialIcons name="menu" style={{ color: '#FFF', fontSize: 30}} onPress={() => { this.props.navigation.openDrawer() }} />
            </TouchableOpacity>
        );
    }
};

export default HeaderLeftComponent;