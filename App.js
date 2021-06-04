import React from 'react';
import Layout from './src/components/Buoi4';
import RenderIcon from './src/components/Buoi5/RenderIcon';
import RenderWithState from './src/components/Buoi5/RenderWithState';
import Touched from './src/components/Buoi5/Touched';
import BaiTapEmoji from './src/components/Buoi6/BaiTapEmojiProps';
import RenderWithMap from './src/components/Buoi6/RenderWithMap';
import BaiTapRenderWithMap from './src/components/Buoi6/BaiTapRenderWithMap';
import GameScrollView from './src/components/Buoi6/GameScrollView';
import BaiTapScrollView from './src/components/Buoi6/BaiTapScrollView';
import BaiTapScrollViewHome from './src/components/Buoi7/BaiTapScrollView';
import DemoFlatList from './src/components/Buoi7/DemoFlatList';
import DemoSectionList from './src/components/Buoi7/DemoSectionList';
import BaiTapOanTuXi from './src/components/Buoi8/';
import DemoRedux from './src/components/Buoi9Redux';
import {Provider} from 'react-redux';
import store from './src/components/Buoi9Redux/redux/store';
import BaiTapRedux from './src/components/Buoi9Redux/BaiTapRedux';
import Lifecycle from './src/components/Lifecycle';
import BaiTapLifecycle from './src/components/Lifecycle/BaiTapLifecycle';
import Validation from './src/components/Validation';
import ValidationFormik from './src/components/Validation/ValidationFormik';
import RootNavigator from './src/components/Navigation';
const App = () => (
  // <Layout />
  // <Touched />
  // <RenderWithState />
  // <DemoFlatList />
  // <DemoSectionList />
  // <BaiTapOanTuXi />
  <Provider store={store}>
    {/* <DemoRedux /> */}
    {/* <BaiTapRedux /> */}
    {/* <Lifecycle /> */}
    {/* <BaiTapLifecycle /> */}
    {/* <Validation /> */}
    {/* <ValidationFormik /> */}
    <RootNavigator />
  </Provider>
);

export default App;
