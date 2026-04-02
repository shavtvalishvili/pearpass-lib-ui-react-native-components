import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgEditOutlined = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" viewBox="0 0 16 16" {...props}>
    <Path
      fill="currentColor"
      d="M2 11.5V14h2.5l7.38-7.38-2.5-2.5L2 11.5zm11.79-6.79a.665.665 0 0 0 0-.94l-1.56-1.56a.665.665 0 0 0-.94 0L10.07 3.43l2.5 2.5 1.22-1.22z"
    />
  </Svg>
);
export default SvgEditOutlined;
