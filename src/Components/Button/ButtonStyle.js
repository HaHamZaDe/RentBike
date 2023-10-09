import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';
const base_style = StyleSheet.create({
  container: {
    padding: 8,
    margin: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  button_container: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
    marginLeft: 5,
  },
});

export default {
  primary: StyleSheet.create({
    ...base_style,
    container: {
      ...base_style.container,
      backgroundColor: colors.darkgreen,
    },

    title: {
      ...base_style.title,
      color: 'white',
    },
  }),
  secondary: StyleSheet.create({
    ...base_style,
    container: {
      ...base_style.container,
      backgroundColor: 'white',
      borderColor: colors.darkgreen,
      borderWidth: 1,
    },

    title: {
      ...base_style.title,
      color: colors.darkgreen,
    },
  }),
};
