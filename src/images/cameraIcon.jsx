import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      data-name="camera/bold"
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      {...props}
    >
      <Path
        d="M15.758 4a1.643 1.643 0 01-1.45-.89l-.72-1.45A3.3 3.3 0 0010.908 0h-2.29a3.3 3.3 0 00-2.69 1.66l-.72 1.45a1.643 1.643 0 01-1.45.89 3.753 3.753 0 00-3.75 3.99l.52 8.26A3.631 3.631 0 004.518 20H15a3.636 3.636 0 003.99-3.75l.52-8.26A3.753 3.753 0 0015.758 4zm-7.5 1.25h3a.75.75 0 010 1.5h-3a.75.75 0 110-1.5zm1.5 10.87a3.38 3.38 0 113.38-3.38 3.382 3.382 0 01-3.38 3.38z"
        transform="translate(2.242 2)"
        fill="#fdfdfd"
        data-name="vuesax/bold/camera"
      />
    </Svg>
  )
}

export default SvgComponent
