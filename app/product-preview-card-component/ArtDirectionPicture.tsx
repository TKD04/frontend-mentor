/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/alt-text */
import type { ImageProps } from "next/dist/shared/lib/get-img-props";
import { getImageProps } from "next/image";

// https://nextjs.org/docs/pages/api-reference/components/image#art-direction

type ImagePropsSrc = ImageProps["src"];
type ArtDirectionPictureProps = {
  src: {
    mobile: ImagePropsSrc;
    desktop: ImagePropsSrc;
  };
  minWidthForDesktop: number;
} & Omit<ImageProps, "src">;

export default function ArtDirectionPicture({
  src,
  minWidthForDesktop,
  ...rest
}: ArtDirectionPictureProps) {
  const { props: mobileImageProps } = getImageProps({
    ...rest,
    src: src.mobile,
  });
  const { props: desktopImageProps } = getImageProps({
    ...rest,
    src: src.desktop,
  });

  return (
    <picture>
      <source
        media={`(max-width: ${minWidthForDesktop - 1}px)`}
        width={mobileImageProps.width}
        height={mobileImageProps.height}
        srcSet={mobileImageProps.srcSet}
      />
      <source
        media={`(min-width: ${minWidthForDesktop}px)`}
        width={desktopImageProps.width}
        height={desktopImageProps.height}
        srcSet={desktopImageProps.srcSet}
      />
      <img {...mobileImageProps} />
    </picture>
  );
}
