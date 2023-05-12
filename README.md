# React Native Style Prop Type

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

[![js-standard-style](https://cdn.rawgit.com/standard/standard/master/badge.svg)](http://standardjs.com)

## Description

Validate React Native styles by ensuring the style keys are valid React Native style properties.

- Required prop type validation is supported, similar to the built-in prop types.
  - `ReactNativeStylePropType.isRequired`
- Style array validation is also supported.
  - `style={[styles.textStyle1, styles.textStyle2]}`

## Usage

```jsx
import { StyleSheet, Text, View } from 'react-native';
import ReactNativeStylePropType from 'react-native-style-prop-type';

const Component = ({style, textStyle}) => (
  <View style={style}>
    <Text style={textStyle}>My Component</Text>
  </View>
);

Component.propTypes = {
  style: ReactNativeStylePropType.isRequired,
  textStyle: ReactNativeStylePropType
};

const Page = () => (
  <Component style={styles.style} textStyle={[styles.textStyle1, styles.textStyle2]} />
);

const styles = StyleSheet.create({
  style: { ... },
  textStyle1: { ... },
  textStyle2: { ... }
})
```

## Installation

```shell
npm i react-native-style-prop-type -S
```

## Special Thanks

Thanks to [Frankie Bagnardi](https://github.com/brigand) for creating the original [react-style-proptype](https://www.npmjs.com/package/react-style-proptype) package which this package builds on top of.
