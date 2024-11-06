import React, { forwardRef, useMemo } from "react";
import Rive, { RiveRef } from "rive-react-native";
// @ts-ignore
import resolveAssetSource from "react-native/Libraries/Image/resolveAssetSource";

type RiveComponentProps = Omit<
  React.ComponentProps<typeof Rive>,
  "url" | "resourceName"
> & {
  source: string | number;
};

const isValidUrl = (uri: string | undefined): boolean => {
  if (!uri) return false;
  return uri.startsWith("http") || uri.startsWith("file");
};

export const RiveAnimation = forwardRef<RiveRef, RiveComponentProps>(
  (props, ref) => {
    const { source, ...riveProps } = props;

    const riveConfig = useMemo(() => {
      if (typeof source === "string" && isValidUrl(source)) {
        return { url: source };
      }

      const resolved = resolveAssetSource(source);
      const uri = resolved?.uri;
      const isUrl = isValidUrl(uri);

      return {
        resourceName: !isUrl && uri ? uri : undefined,
        url: isUrl ? uri : undefined,
      };
    }, [source]);

    return <Rive ref={ref} {...riveProps} {...riveConfig} />;
  }
);
