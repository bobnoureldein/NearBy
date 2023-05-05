import * as React from "react"
import Svg, { G, Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={17.5}
      height={19.5}
      viewBox="0 0 17.5 19.5"
      {...props}
    >
      <G
        data-name="curved / user-1"
        fill="none"
        stroke="#676f72"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      >
        <Path
          d="M13.5 18h-11A2.5 2.5 0 010 15.5c0-4.081 6-4 8-4s8-.081 8 4a2.5 2.5 0 01-2.5 2.5z"
          transform="translate(.75 .75)"
        />
        <Path
          data-name="shape"
          d="M8 8a4 4 0 10-4-4 4 4 0 004 4z"
          transform="translate(.75 .75)"
        />
      </G>
    </Svg>
  )
}

export default SvgComponent
