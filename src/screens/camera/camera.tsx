import Camera from "../../components/Camera/Camera";
import { StackNavigationProp } from "@react-navigation/stack";
import { AfterLoginStackParamList } from "../../navigation/navigation";

type CameraScreenNavigationProp = StackNavigationProp<
  AfterLoginStackParamList,
  "Camera"
>;

type Props = {
  navigation: CameraScreenNavigationProp;
};

const CameraScreen = ({ navigation }: Props) => {
  return <Camera onPictureTaken={() => navigation.navigate("CompleteCode")} />;
};

export default CameraScreen;
