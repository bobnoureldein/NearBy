import * as React from "react"
import Svg, { G, Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={20.5}
      height={16.5}
      viewBox="0 0 20.5 16.5"
      {...props}
    >
      <G
        data-name="curved / mail"
        fill="none"
        stroke="#676f72"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      >
        <Path
          d="M0 7.5C0 13.235 2.235 15 9.5 15S19 13.235 19 7.5c0-2.712-.5-4.536-1.795-5.705C15.762.49 13.33 0 9.5 0S3.238.49 1.795 1.795C.5 2.964 0 4.788 0 7.5z"
          transform="translate(.75 .75)"
        />
        <Path
          data-name="shape"
          d="M17.205 1.795l-6.291 6.291a2 2 0 01-2.828 0L1.795 1.795"
          transform="translate(.75 .75)"
        />
      </G>
    </Svg>
  )
}

export default SvgComponent
