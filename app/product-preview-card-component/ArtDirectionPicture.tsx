/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/alt-text */
import type {
  ImageProps,
  StaticImport,
} from "next/dist/shared/lib/get-img-props";
import { getImageProps } from "next/image";

// https://nextjs.org/docs/pages/api-reference/components/image#art-direction

type ArtDirectionPictureProps = {
  src: {
    mobile: StaticImport;
    desktop: StaticImport;
  };
  minWidthForDesktop: string;
} & Omit<ImageProps, "src">;

export default function ArtDirectionPicture({
  src,
  minWidthForDesktop,
  ...rest
}: ArtDirectionPictureProps) {
  const { props: imgProps } = getImageProps({ ...rest, src: src.mobile });
  const {
    props: { srcSet: desktopSrcSet },
  } = getImageProps({ ...rest, src: src.desktop });

  return (
    <picture>
      <source
        media={`(min-width: ${minWidthForDesktop})`}
        srcSet={desktopSrcSet}
      />
      <img {...imgProps} />
    </picture>
  );
}
