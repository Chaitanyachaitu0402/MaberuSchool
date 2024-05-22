import React, { useState } from 'react';
import { StyleSheet, View, Text, Dimensions, TouchableOpacity } from 'react-native';
import { useTheme, Card, Menu, Provider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { SafeAreaView } from 'react-native-safe-area-context';

const ApprovalMenu1 = () => {
    const { colors } = useTheme();
    const [visible, setVisible] = useState(false);
    const [selectedOption, setSelectedOption] = useState('Pending');

    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
        setVisible(false);
    };

    return (
        <View>
            <TouchableOpacity onPress={openMenu}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ color: selectedOption === 'Approved' ? 'green' : selectedOption === 'Rejected' ? 'red' : selectedOption === 'Pending' ? 'black' : colors.text }}>
                        {selectedOption}
                    </Text>
                    <Icon name='chevron-down' color={colors.text} size={24} />
                </View>
            </TouchableOpacity>
            <Menu
                visible={visible}
                onDismiss={closeMenu}
                anchor={<Text onPress={openMenu} style={{ color: colors.text }}></Text>}
            >
                <Menu.Item onPress={() => handleOptionSelect('Approved')} title="Approved" titleStyle={{ color: 'green' }}/>
                <Menu.Item onPress={() => handleOptionSelect('Rejected')} title="Rejected" titleStyle={{ color: 'red' }} />
                <Menu.Item onPress={() => handleOptionSelect('Pending')} title="Pending" titleStyle={{ color: 'black' }} />
            </Menu>
        </View>
    );
};

export default function ApprovalMenu({ navigation }) {
    const { colors } = useTheme();

    return (
        <Provider>
            <SafeAreaView>
                <View style={{ flex: 1, backgroundColor: colors.background, height: Dimensions.get('window').height }}>
                    <Card style={{ width: '95%', alignSelf: 'center', backgroundColor: colors.primary, margin: 7, padding: 8, height: 300 }}>
                        <View style={{ padding: 7 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ color: colors.text, fontSize: 17, fontWeight: 'bold' }}>Casual Leave</Text>
                                <ApprovalMenu1 initialOption="Pending" />
                            </View>

                            <Text style={{ color: colors.text, fontSize: 17, fontWeight: '500', marginTop: 8 }}>From: 18-03-2023 To 19-03-2023</Text>
                            <Text style={{ color: colors.text, fontSize: 14, fontWeight: 'normal', margin: 4 }}>
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit."
                            </Text>
                        </View>
                    </Card>
                </View>
            </SafeAreaView>
        </Provider>
    );
};
