import * as React from "react"
import Svg, { G, Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      data-name="arrow-square-left/linear"
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      {...props}
    >
      <G
        fill="none"
        stroke="#080705"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        data-name="vuesax/linear/arrow-square-left"
      >
        <Path d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7z" />
        <Path data-name="Vector" d="M13.26 15.53L9.74 12l3.52-3.53" />
      </G>
    </Svg>
  )
}

export default SvgComponent
