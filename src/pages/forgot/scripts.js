import { Text, TextInput, TouchableOpacity, View } from "react-native"
import { styles } from "./styles";
import { Link } from "@react-navigation/native";

export default function Forgot(){
  return(
    <View style={styles.container}>
      <Text style={styles.texto}>E-mail</Text>
      <TextInput style={styles.input} placeholder="e-mail" />
      <TouchableOpacity style={styles.botao}>
        <Link to={"/Recuperação de senha"} style={styles.texto}>Enviar</Link>
      </TouchableOpacity>
    </View>
  )
}
