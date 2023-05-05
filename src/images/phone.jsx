import * as React from "react"
import Svg, { G, Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      {...props}
    >
      <G transform="translate(-61 -454)">
        <Path
          d="M6 14C-1.261 6.737-.228 3.412.537 2.34c.1-.173 2.522-3.8 5.12-1.673 6.449 5.311-1.447 5.122 3.7 9.976s4.665-2.749 9.975 3.7c2.129 2.6-1.5 5.023-1.672 5.12C16.589 20.228 13.263 21.261 6 14z"
          fill="none"
          stroke="#676f72"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          transform="translate(63 456)"
          data-name="curved / phone"
        />
        <Path
          data-name="Rectangle 27"
          transform="translate(61 454)"
          fill="none"
          d="M0 0H24V24H0z"
        />
      </G>
    </Svg>
  )
}

export default SvgComponent
