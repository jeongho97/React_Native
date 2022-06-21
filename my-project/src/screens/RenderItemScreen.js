import { StyleSheet, View, Text } from "react-native";
import { TouchableOpacity } from "react-native";
import { useState } from "react/cjs/react.development";
const RenderItemScreen = ({ item }) => {
  const { index } = item;
  const itemObj = item.item;
  console.log(index);
  const [show, setShow] = useState(false);
  return (
    <View style={styles.itemMargin}>
      <TouchableOpacity onPress={() => setShow(!show)}>
        <Text>{`${index} item.name : ${itemObj.name}`}</Text>
      </TouchableOpacity>
      {show ? (
        <View>
          <Text>{`item.name : ${itemObj.id}`}</Text>
          <Text>{`item.password : ${itemObj.password}`}</Text>
        </View>
      ) : null}
    </View>
  );
};
export default RenderItemScreen;

const styles = StyleSheet.create({
  itemMargin: {
    margin: 10,
  },
});
