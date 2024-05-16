import React, { useState } from 'react';
import { View } from 'react-native';
import { Checkbox, Button, DataTable } from 'react-native-paper';

const PermissionsScreen = () => {
  const [permissions, setPermissions] = useState([
    [false, false, false, false],
    [false, false, false, false],
    [false, false, false, false],
    [false, false, false, false],
  ]);

  // Define custom names for each row
  const rowNames = ['Event', 'Notification', 'Notice', 'Class'];

  const handlePermissionToggle = (rowIndex, colIndex) => {
    const updatedPermissions = [...permissions];
    updatedPermissions[rowIndex][colIndex] = !updatedPermissions[rowIndex][colIndex];
    setPermissions(updatedPermissions);
  };

  const handleGrantPermissions = () => {
    // You can handle permissions grant logic here
    console.log('Permissions:', permissions);
  };

  return (
    
    <View style={{  justifyContent: 'center', alignItems: 'center' }}>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title></DataTable.Title>
          <DataTable.Title>Read</DataTable.Title>
          <DataTable.Title>Write</DataTable.Title>
          <DataTable.Title >Delete</DataTable.Title>
          <DataTable.Title>Update</DataTable.Title>
        </DataTable.Header>

        {rowNames.map((rowName, rowIndex) => (
          <DataTable.Row key={rowIndex}>
            <DataTable.Cell>{rowName}</DataTable.Cell>
            {permissions[rowIndex].map((permission, colIndex) => (
              <DataTable.Cell key={colIndex}>
                <Checkbox.Android
                  status={permission ? 'checked' : 'unchecked'}
                  onPress={() => handlePermissionToggle(rowIndex, colIndex)} color='#192f6a'
                />
              </DataTable.Cell>
            ))}
          </DataTable.Row>
        ))}
      </DataTable>

      <Button mode="contained" style={{backgroundColor:'#192f6a'}} onPress={handleGrantPermissions}>
        Grant Permissions
      </Button>
    </View>
  );
};

export default PermissionsScreen;
