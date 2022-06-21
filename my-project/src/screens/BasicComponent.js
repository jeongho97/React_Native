import {
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  ScrollView,
} from "react-native";
import { Button } from "react-native";
import { useState } from "react/cjs/react.development";
const BasicComponent = (props) => {
  const [name, setName] = useState("");
  return (
    <ScrollView>
      <Image
        style={styles.img}
        source={{
          uri: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA2MDhfNTgg%2FMDAxNjU0NjU4NzQ0NDI5.cWsVbjqa-jzxp4SPW1TZRAGBVKqFt1smM9ZwAs47lUYg.LOH6LevbVJuYx3i4-i7dcYIJWuOcWVOkT0RnJvv6xHkg.JPEG.zzanggowls%2FIMG_3254.JPG&type=a340",
        }}
      ></Image>
      <Image
        style={styles.img}
        source={{ uri: "http://localhost:8000/img/img1.jpg" }}
      ></Image>
      <Text>hello word</Text>
      <TextInput
        style={styles.input}
        onChangeText={(e) => setName(e)}
        value={name}
      ></TextInput>
      <Text>{name}</Text>
      <Text>{props.title}</Text>
      <Button title="버튼" onPress={() => setName("")}></Button>
    </ScrollView>
  );
};

export default BasicComponent;

const styles = StyleSheet.create({
  img: {
    width: 200,
    height: 200,
  },
  input: {
    borderColor: "green",
    borderWidth: 1,
    width: 100,
    padding: 5,
  },
});
