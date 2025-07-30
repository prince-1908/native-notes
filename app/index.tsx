import { useRouter } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import NOTES from "../assets/images/notes-logo.png";

export default function Index() {
  const router = useRouter();
  
  return (
    <View
      style={styles.container}
    >
      <Image
        source={NOTES}
        style={styles.img}
      />
      <Text style={styles.title}>Notes</Text>
      <Text style={styles.subtitle}>Capture your thoughts, anytime, anywhere💭</Text>

      <TouchableOpacity
      style={styles.button}
      onPress={() => router.push("/notes")}
      >
        <Text style={styles.btnText}>
          Get Started
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent:"center",
    backgroundColor:"#f8f8f8",
    paddingHorizontal:37
  },
  title:{
    color:"black",
    fontSize:100,
    fontWeight:"900"
  },
  subtitle:{
    color:"black"
  },
  btnText:{
    color:"black",
    fontSize:24,
    textAlign:'center'
  },
  img:{
    width:120,
    height:120
  },
  button:{
    backgroundColor:"#6fc7ba",
    width:"100%",
    borderWidth:2,
    borderColor:"black",
    paddingVertical:10,
    top:20,
    borderRadius:16
  }
})