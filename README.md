# Playground for Rive

Just a little playground to make some tests with Rive.

- [Environment](#environment)
- [Issues](#issues)
- [Feature](#feature)
- [Helpers](#helpers)
  - [Handle .RIV assets with expo-custom-assets](#handle-riv-assets-with-expo-custom-assets)

## Environment

- Expo: ~52.0.0-preview.13
- React Native: 0.76.1
- Yarn: 4.5.1
- Rive: 7.2.0

⚠️ For the moment, there are some issues with the package `rive-react-native` on the `8.0.0` so I keep using the `7.2.0`.

## Issues

- https://github.com/rive-app/rive-react-native/issues/272
- https://github.com/rive-app/rive-react-native/issues/268

## Feature

[Assets Loader](https://rive.app/community/doc/loading-assets/doct4wVHGPgC#handling-assets) needed for RN

- https://github.com/rive-app/rive-react-native/issues/271
- https://github.com/rive-app/rive-react-native/issues/236

## Helpers

### Handle .RIV assets with `expo-custom-assets`

To automatically load `.riv` files inside native folders without pass by `Xcode` and `Android Studio` then use `<Rive />` `resourceName` property to load assets from them.

1. Install [expo-custom-assets](https://github.com/Malaa-tech/expo-custom-assets) module:

```bash
yarn add expo-custom-assets
```

2. Add animations `.riv` in a specific folder (ex: `./assets/animations`):

3. Modify the `app.json` config:

```json
{
  "expo": {
    // ...
    "plugins": [
      // ...
      [
        "expo-custom-assets",
        {
          // Path to the folder with the animations
          "assetsPaths": ["./assets/animations"]
        }
      ]
    ]
  }
}
```

4. Add automatically the `.riv` files in the native folders `ios` and `android`:

```bash
# For both platforms
npx expo prebuild
# For a specific platform
npx expo prebuild --platform ios
npx expo prebuild --platform android
```

5. Use the `<Rive />` component with the `resourceName` property:

```tsx
import Rive from "rive-react-native";

<Rive resourceName="animation_name.riv" />;
```
