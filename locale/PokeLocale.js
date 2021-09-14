import React from 'react';
import {
  Platform, 
  NativeModules
} from 'react-native';
import {en} from './en'

const PokeLocale = () => {

  const deviceLanguage = Platform.OS === 'ios' ? NativeModules.SettingsManager.settings.AppleLocale || NativeModules.SettingsManager.settings.AppleLanguages[0]
        : NativeModules.I18nManager.localeIdentifier;

    let string = {}

    switch (deviceLanguage) {
        case 'en':
            string = en
            break;

        case 'en_US':
            string = en
             break;

        case 'de_US':
            string = en
            break;

        case 'de_DE':
            string = en
            break;

        default:
            string = en
            break;
    }
    return string
}

export default PokeLocale