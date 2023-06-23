import { Link } from "@react-navigation/native";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";


export default function Login() {

    return(
        <View style={styles.container}>
            <Text style={styles.texto}>E-mail</Text>
            <TextInput placeholder="e-mail" style={styles.input} />
            <Text style={styles.texto}>Senha</Text>
            <TextInput placeholder="Senha" secureTextEntry={true} style={styles.input} />
            <Link to={"/Registro"} style={styles.links}>crie uma conta</Link>
            <Link to={"/Esqueci minha senha"} style={styles.links}>Esqueceu sua senha?</Link>
            <TouchableOpacity style={styles.botao}>
                <Link to={"/Loja"} style={styles.texto}>Entrar</Link>
            </TouchableOpacity>
        </View>
    )
}
