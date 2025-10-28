import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Platform,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SVG } from '../../assets/icons/svg';

interface Props {
  title: string;
  profileImage?: string;
}

const CustomHeader = (props: Props) => {
  const { title, profileImage } = props;

  const navigation: any = useNavigation();

  const handleMenuPress = () => {
    navigation.openDrawer();
  };

  const handleProfilePress = () => {
    // navigation.navigate('Profile');
    Alert.alert('Profile button pressed');
  };

  return (
      <View style={styles.shadowContainer}>
        <View style={styles.container}>
          {/* Left Menu */}
          <TouchableOpacity
            onPress={handleMenuPress}
            style={styles.iconContainer}
          >
            <SVG.MenuBurger width={24} height={24} />
          </TouchableOpacity>

          {/* Center Title */}
          <Text numberOfLines={1} style={styles.title}>
            {title}
          </Text>

          {/* Right Profile */}
          <TouchableOpacity
            onPress={handleProfilePress}
            style={styles.iconContainer}
          >
            {profileImage ? (
              <Image
                source={{ uri: profileImage }}
                style={styles.profileImage}
              />
            ) : (
              <SVG.User width={24} height={24} />
            )}
          </TouchableOpacity>
        </View>
      </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  shadowContainer: {
    backgroundColor: '#0077b6',
    paddingTop: Platform.OS === 'ios' ? 40 : 10,
  },
  container: {
    height: 60,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    flex: 1,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
    color: '#ffffff',
  },
  profileImage: {
    width: 34,
    height: 34,
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: '#ffffff',
  },
});
