import { NavigationContainer } from "@react-navigation/native";
import { useSelector } from "react-redux";
import BottomTabScreen from "./BottomTabScreen";
import LoginNavigate from "./LoginNavigate";

const IndexNavigate = () => {
  const isLogin = useSelector((state) => state.users.isLogin);
  return isLogin ? (
    <BottomTabScreen></BottomTabScreen>
  ) : (
    <LoginNavigate></LoginNavigate>
  );
};
export default IndexNavigate;
