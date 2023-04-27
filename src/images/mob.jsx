import * as React from "react"
import Svg, { Path } from "react-native-svg"

const PhoneIcon = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <Path
      fill="none"
      stroke="#080705"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8 16C.739 8.737 1.772 5.412 2.537 4.34c.1-.173 2.522-3.8 5.12-1.673 6.449 5.311-1.447 5.122 3.7 9.976s4.665-2.749 9.975 3.7c2.129 2.6-1.5 5.023-1.672 5.12C18.589 22.228 15.263 23.261 8 16Z"
      data-name="curved / phone"
    />
    <Path fill="none" d="M0 0h24v24H0z" data-name="Rectangle 27" />
  </Svg>
)
export default PhoneIcon
