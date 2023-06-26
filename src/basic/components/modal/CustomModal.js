//React-Native
import React from 'react';
import { View, Modal, StyleSheet } from 'react-native';

//Basic Components
import IconButton from 'src/basic/components/icon/IconButton';

const CustomModal = props => {
  
  const {visible, onClose, children, name, size, color} = props;

  return (
    <Modal
      visible={visible}
      animationType
      transparent
      // onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
          <React.Fragment>
            {children}
            <IconButton
              name={name}
              size={size}
              color={color}
              onPress={onClose}
            />
          </React.Fragment>
          </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    width: '100%',
    marginTop: 50,
  },
  closeButton: {
    marginTop: 20,
    alignSelf: 'flex-end',
  },
  closeButtonText: {
    color: 'white',
  },
});

export default CustomModal;
