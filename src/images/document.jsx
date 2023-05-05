import * as React from "react"
import Svg, { G, Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      data-name="document-text/linear"
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      {...props}
    >
      <G
        fill="none"
        stroke="#676f72"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        data-name="vuesax/linear/document-text"
      >
        <Path d="M21 7v10c0 3-1.5 5-5 5H8c-3.5 0-5-2-5-5V7c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5z" />
        <Path
          data-name="Vector"
          d="M14.5 4.5v2a2.006 2.006 0 002 2h2M8 13h4M8 17h8"
        />
      </G>
    </Svg>
  )
}

export default SvgComponent
