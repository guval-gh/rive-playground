import * as React from "react";
import { useRef } from "react";

import { StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Rive, {
  Alignment,
  Fit,
  RNRiveError,
  RNRiveErrorType,
  RiveRef,
} from "rive-react-native";

const malformedFileUrl =
  "https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg";

const correctFileUrl =
  "https://public.rive.app/community/runtime-files/2195-4346-avatar-pack-use-case.riv";

export default function Example6() {
  const riveRef = useRef<RiveRef>(null);

  const handleInputChange = (e: string) => {
    riveRef.current?.setTextRunValue("name", e);
  };

  return (
    <>
      <Rive
        fit={Fit.Contain}
        alignment={Alignment.Center}
        style={styles.animation}
        url={malformedFileUrl}
        // url={correctFileUrl}
        onError={(riveError: RNRiveError) => {
          switch (riveError.type) {
            case RNRiveErrorType.IncorrectRiveFileUrl: {
              console.log(`${riveError.message}`);
              return;
            }
            case RNRiveErrorType.MalformedFile: {
              console.log("Malformed File");
              return;
            }
            case RNRiveErrorType.FileNotFound: {
              console.log("File not found");
              return;
            }
            case RNRiveErrorType.IncorrectArtboardName: {
              console.log("IncorrectAnimationName");
              return;
            }
            case RNRiveErrorType.UnsupportedRuntimeVersion: {
              console.log("Runtime version unsupported");
              return;
            }
            case RNRiveErrorType.IncorrectStateMachineName: {
              console.log(`${riveError.message}`);
              return;
            }
            case RNRiveErrorType.IncorrectStateMachineInput: {
              console.log(`${riveError.message}`);
              return;
            }
            default:
              return;
          }
        }}
      />
      <TextInput
        onChangeText={handleInputChange}
        defaultValue="world"
        style={styles.input}
      />
    </>
  );
}

const styles = StyleSheet.create({
  safeAreaViewContainer: {
    flex: 1,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  animation: {
    width: "100%",
    height: 100,
  },
});
