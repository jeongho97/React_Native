import { StyleSheet, Text, View, StatusBar, SafeAreaView } from "react-native";
import BasicComponent from "./src/screens/BasicComponent";
import ListComponent from "./src/screens/ListComponent";
import SectionListComponent from "./src/screens/SectionListComponent";
import VirtualizedListComponent from "./src/screens/VirtualizedListComponent";

export default function App() {
  return (
    <SafeAreaView style={styles.containerMain}>
      {/* <View style={styles.viewContainer}> */}
      {/* <View style={[styles.box, styles.test]}></View>
        <View style={[styles.box, styles.test1]}></View>
      </View>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style={styles.test} backgroundColor="blue" />
      <View style={styles.test}>
        <Text>react native</Text> */}
      {/* <BasicComponent title={"title"}></BasicComponent> */}
      <ListComponent></ListComponent>

      {/* </View> */}
      {/* <View style={styles.viewContainer}>
        <BasicComponent title={"title"}></BasicComponent>
      </View> */}
      {/* <SectionListComponent></SectionListComponent> */}
      {/* <VirtualizedListComponent></VirtualizedListComponent> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  containerMain: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  viewContainer: {
    flex: 0.5,
  },
  test: {
    backgroundColor: "red",
  },
  test1: {
    backgroundColor: "green",
  },
  box: {
    width: 100,
    height: 100,
  },
  row: {
    flexDirection: "row",
  },
});
