import Camera from "../../components/Camera/Camera";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../navigation/navigation";

type CameraScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Camera"
>;

type Props = {
  navigation: CameraScreenNavigationProp;
};

const CameraScreen = ({ navigation }: Props) => {
  return <Camera onPictureTaken={() => navigation.navigate("CompleteCode")} />;
};

export default CameraScreen;
