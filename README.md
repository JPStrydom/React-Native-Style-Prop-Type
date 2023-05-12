# React Native Style Prop Type

Validate React Native styles by ensuring the keys are valid React Native style property names.

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
