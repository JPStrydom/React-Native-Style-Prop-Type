const ReactNativeStylePropType = require('./react-native-style-prop-type');

describe('When validation with the "ReactNativeStylePropType" prop type', () => {
  const mockStylePropName = 'mockStyleProp';
  const mockComponentName = 'MockComponent';
  const mockValidReactStyle = {
    backgroundColor: '#F0F',
    color: 'rgb(0, 255, 0)',
    flex: 1,
    padding: 10
  };
  const mockValidReactNativeStyle = {
    marginVertical: 10,
    paddingHorizontal: 10
  };
  const mockInvalidStyle = {
    invalidStyleName: 'invalidStyleName'
  };

  describe('when validating a style prop object', () => {
    describe('with valid react style properties', () => {
      it('should not return an error', () => {
        const mockProps = { [mockStylePropName]: mockValidReactStyle };
        expect(
          ReactNativeStylePropType(mockProps, mockStylePropName, mockComponentName)
        ).toBeUndefined();
      });
    });

    describe('with valid react-native style properties', () => {
      it('should not return an error', () => {
        const mockProps = {
          [mockStylePropName]: { ...mockValidReactStyle, ...mockValidReactNativeStyle }
        };
        expect(
          ReactNativeStylePropType(mockProps, mockStylePropName, mockComponentName)
        ).toBeUndefined();
      });
    });

    describe('with invalid style properties', () => {
      it('should return an error', () => {
        const mockProps = {
          [mockStylePropName]: {
            ...mockValidReactStyle,
            ...mockValidReactNativeStyle,
            ...mockInvalidStyle
          }
        };
        expect(ReactNativeStylePropType(mockProps, mockStylePropName, mockComponentName)).toEqual(
          new Error(
            `Prop ${mockStylePropName} passed to ${mockComponentName}. Has invalid keys invalidStyleName`
          )
        );
      });
    });

    describe('with no style properties', () => {
      it('should not return an error', () => {
        const mockProps = {};
        expect(
          ReactNativeStylePropType(mockProps, mockStylePropName, mockComponentName)
        ).toBeUndefined();
      });
    });

    describe('when the prop is required', () => {
      describe('and the prop is provided', () => {
        it('should not return an error', () => {
          const mockProps = { [mockStylePropName]: mockValidReactStyle };
          expect(
            ReactNativeStylePropType.isRequired(mockProps, mockStylePropName, mockComponentName)
          ).toBeUndefined();
        });
      });

      describe('and the prop is not provided', () => {
        it('should return an error', () => {
          const mockProps = {};
          expect(
            ReactNativeStylePropType.isRequired(mockProps, mockStylePropName, mockComponentName)
          ).toEqual(
            new Error(`Prop ${mockStylePropName} passed to ${mockComponentName} is required`)
          );
        });
      });
    });
  });

  describe('when validating a style prop list', () => {
    describe('with valid react style properties', () => {
      it('should not return an error', () => {
        const mockProps = {
          [mockStylePropName]: [
            mockValidReactStyle,
            { ...mockValidReactStyle, flexDirection: 'row' },
            { ...mockValidReactStyle, display: 'flex' }
          ]
        };
        const error = ReactNativeStylePropType(mockProps, mockStylePropName, mockComponentName);
        expect(error).toBeUndefined();
      });
    });

    describe('with valid react-native style properties', () => {
      it('should not return an error', () => {
        const mockProps = {
          [mockStylePropName]: [
            { ...mockValidReactStyle, ...mockValidReactNativeStyle },
            { ...mockValidReactStyle, ...mockValidReactNativeStyle, paddingVertical: 20 },
            { ...mockValidReactStyle, gap: 20 }
          ]
        };
        expect(
          ReactNativeStylePropType(mockProps, mockStylePropName, mockComponentName)
        ).toBeUndefined();
      });
    });

    describe('with invalid style properties', () => {
      it('should return an error', () => {
        const mockProps = {
          [mockStylePropName]: [
            { ...mockValidReactStyle, ...mockValidReactNativeStyle },
            {
              ...mockValidReactStyle,
              ...mockValidReactNativeStyle,
              ...mockInvalidStyle,
              paddingVertical: 20
            },
            { ...mockValidReactStyle, anotherInvalidStyleName: 'anotherInvalidStyleName', gap: 20 }
          ]
        };
        expect(ReactNativeStylePropType(mockProps, mockStylePropName, mockComponentName)).toEqual(
          new Error(
            `Prop ${mockStylePropName} passed to ${mockComponentName}. Has invalid keys invalidStyleName, anotherInvalidStyleName`
          )
        );
      });
    });

    describe('with no style properties', () => {
      it('should not return an error', () => {
        const mockProps = {};
        expect(
          ReactNativeStylePropType(mockProps, mockStylePropName, mockComponentName)
        ).toBeUndefined();
      });
    });

    describe('when the prop is required', () => {
      describe('and the prop is provided', () => {
        it('should not return an error', () => {
          const mockProps = {
            [mockStylePropName]: [
              mockValidReactStyle,
              { ...mockValidReactStyle, flexDirection: 'row' },
              { ...mockValidReactStyle, display: 'flex' }
            ]
          };
          expect(
            ReactNativeStylePropType.isRequired(mockProps, mockStylePropName, mockComponentName)
          ).toBeUndefined();
        });
      });

      describe('and the prop is not provided', () => {
        it('should return an error', () => {
          const mockProps = {};
          expect(
            ReactNativeStylePropType.isRequired(mockProps, mockStylePropName, mockComponentName)
          ).toEqual(
            new Error(`Prop ${mockStylePropName} passed to ${mockComponentName} is required`)
          );
        });
      });
    });
  });
});
