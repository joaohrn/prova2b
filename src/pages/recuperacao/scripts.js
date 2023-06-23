import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "../login/styles";
import { Link } from "@react-navigation/native";

export default function Recuperacao(){
  return(
    <View style={styles.container}>
      <Text style={styles.texto}>Nova Senha</Text>
      <TextInput style={styles.input} placeholder="Senha" />
      <Text style={styles.texto}>Confirmar Senha</Text>
      <TextInput style={styles.input} placeholder="Confirmar Senha" />
      <TouchableOpacity style={styles.botao}>
        <Link to={"/Login"} style={styles.texto}>Enviar</Link>
      </TouchableOpacity>
    </View>
  )
}
