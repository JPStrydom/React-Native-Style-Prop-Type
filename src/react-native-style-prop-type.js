const ReactStylePropType = require('react-style-proptype');

const validReactNativeStyleProps = [
  'gap',
  'marginHorizontal',
  'marginVertical',
  'paddingHorizontal',
  'paddingVertical'
];

const flattenStyles = styles =>
  Array.isArray(styles) ? styles.reduce((result, style) => ({ ...result, ...style })) : styles;

const getReactCssProperties = style =>
  Object.fromEntries(
    Object.entries(flattenStyles(style)).filter(
      ([key]) => !validReactNativeStyleProps.includes(key)
    )
  );

module.exports = (props, propName, componentName) => {
  if (!props[propName]) {
    return;
  }
  try {
    return ReactStylePropType(
      { [propName]: getReactCssProperties(props[propName]) },
      propName,
      componentName
    );
  } catch (error) {
    return error;
  }
};

module.exports.isRequired = (props, propName, componentName) => {
  if (!props[propName]) {
    return new Error(`Prop ${propName} passed to ${componentName} is required`);
  }
  return module.exports(props, propName, componentName);
};
