import Image from "next/image";
import { useImgixContext } from "../../helpers/imgLoader";

export const ImgixImage = ({
  width,
  height,
  src,
  priority = false,
  alt = "",
}) => {
  const loader = useImgixContext();

  return (
    <Image
      loader={loader}
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
    />
  );
};
