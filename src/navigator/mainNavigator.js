import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList176238Navigator from '../features/ArticleList176238/navigator';
import ArticleList176237Navigator from '../features/ArticleList176237/navigator';
import ArticleList176236Navigator from '../features/ArticleList176236/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList176238: { screen: ArticleList176238Navigator },
ArticleList176237: { screen: ArticleList176237Navigator },
ArticleList176236: { screen: ArticleList176236Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
