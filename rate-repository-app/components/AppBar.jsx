import { View, StyleSheet, ScrollView, Pressable } from 'react-native';
import Constants from 'expo-constants';
import { Link, useLocation } from 'react-router-native';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    paddingBottom: 10,
    paddingLeft: 10,
    backgroundColor: theme.colors.appBarBackground,
  },
  scroll: {
    flexDirection: 'row',
  },
  tab: {
    marginRight: 15,
  },
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.subheading,
    fontWeight: theme.fontWeights.bold,
  },
  activeText: {
    textDecorationLine: 'underline',
  },
});

const AppBarTab = ({ to, label }) => {
  const location = useLocation();
  const active = location.pathname === to;

  return (
    <Link to={to} component={Pressable} style={styles.tab}>
      <Text style={[styles.text, active && styles.activeText]}>
        {label}
      </Text>
    </Link>
  );
};

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal style={styles.scroll}>
        <AppBarTab to="/" label="Repositories" />
        <AppBarTab to="/signin" label="Sign in" />
      </ScrollView>
    </View>
  );
};

export default AppBar;
