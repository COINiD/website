import React from 'react'

import SectionBase from './base'

const SectionCode = ({
  title,
  subTitle,
  linkTitle,
  linkUrl,
  theme = 'light',
}) => (
  <SectionBase theme={theme} style="code">
    <div className="wrapper">
      <div className="section-code__content">
        <h2>{title}</h2>
        {subTitle && (
          <p
            className="u-font-size--medium"
            dangerouslySetInnerHTML={{ __html: subTitle }}
          />
        )}
        {linkUrl && <a href={linkUrl}>{linkTitle}</a>}
      </div>
      <code className="section-code__code">
        {`/* import React, { PureComponent } from 'react';
            import PropTypes from 'prop-types';
            import { Platform, StatusBar, View, Linking, StyleSheet, } from 'react-native';
            import { getStatusBarHeight } from 'react-native-iphone-x-helper';
            import { connectActionSheet } from '@expo/react-native-action-sheet';
            import bleCentral from 'react-native-p2p-transfer-ble-central';
            import { RootNavigator } from './routes/root'; import { InactiveOverlay } from './components'; import SettingHelper from './utils/settingHelper'; import GlobalContext from './contexts/GlobalContext'; import { QRCodeProvider } from './contexts/QRCodeContext'; import projectSettings from './config/settings'; import { colors } from './config/styling'; const styles = StyleSheet.create({ container: { flex: 1, backgroundColor: colors.black, paddingTop: Platform.OS === 'android' ? 0 : getStatusBarHeight(true), }, }); class COINiDWallet extends PureComponent { static propTypes = { showActionSheetWithOptions: PropTypes.func.isRequired, }; static defaultProps = {}; constructor(props): void { super(props); StatusBar.setHidden(true); StatusBar.setBarStyle('light-content'); if (Platform.OS === 'android') { StatusBar.setTranslucent(true); } const settingHelper = SettingHelper(projectSettings.coin); const { showActionSheetWithOptions } = this.props; this.state = { hasCOINiD: false, isBLESupported: false, settingHelper, settings: settingHelper.getAll(), showActionSheetWithOptions, }; } async componentDidMount() { const { settingHelper } = this.state; settingHelper.addListener('updated', this._onSettingsUpdated); const hasCOINiD = await Linking.canOpenURL('coinid://'); const isBLESupported = await bleCentral.isSupported(); this.setState({ hasCOINiD, isBLESupported, }); } componentWillUnmount() { const { settingHelper } = this.state; settingHelper.removeListener('updated', this._onSettingsUpdated); } _onSettingsUpdated = (settings) => { this.setState({ settings }); }; render() { return ( <QRCodeProvider> <GlobalContext.Provider value={this.state}> <View style={styles.container}> <RootNavigator /> <InactiveOverlay /> </View> </GlobalContext.Provider> </QRCodeProvider> ); } } export default connectActionSheet(COINiDWallet); */
        `}
      </code>
    </div>
  </SectionBase>
)

export default SectionCode
