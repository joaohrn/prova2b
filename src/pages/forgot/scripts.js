import { Text, TextInput, TouchableOpacity, View } from "react-native"
import { styles } from "./styles";

export default function Forgot(){
  return(
    <View style={styles.container}>
      <Text style={styles.texto}>E-mail</Text>
      <TextInput style={styles.input} placeholder="e-mail" />
      <TouchableOpacity style={styles.botao}>
        <Text style={styles.texto}>Enviar</Text>
      </TouchableOpacity>
    </View>
  )
}
