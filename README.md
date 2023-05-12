# React Native Style Prop Type

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

[![js-standard-style](https://cdn.rawgit.com/standard/standard/master/badge.svg)](http://standardjs.com)

## Usage

Validate React Native styles by ensuring the style keys are valid React Native style properties.

You can use `ReactNativeStylePropType.isRequired` similar to the built-in proptypes.

```jsx
import { Text, View } from 'react-native';
import ReactNativeStylePropType from 'react-native-style-prop-type';

const Component = ({ style, textStyle }) => (
  <View style={style}>
    <Text style={textStyle}>My Component</Text>
  </View>
);

Component.propTypes = {
  style: ReactNativeStylePropType.isRequired,
  textStyle: ReactNativeStylePropType
};
```

## Installation

```shell
npm i react-native-style-prop-type -S
```
