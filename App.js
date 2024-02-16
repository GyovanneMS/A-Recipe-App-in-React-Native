import React from 'react';
import { StyleSheet, Text, View, ScrollView, StatusBar, Image } from 'react-native';

export default function App() {
  return <ScrollView>
      <StatusBar backgroundColor="#f54748" barStyle="light-content" />
      <View style={styles.topo}>
        <Image style={styles.topoImagem}  source={ require("./assets/images/icon.png")} />

        <Text style={ styles.topoTexto}> Melograno {"\n"} Cozinhando com APPs</Text>
      </View>
      <View style={styles.receita}>
        <Text style={styles.receitaTitulo}> Pudim </Text>

        <Image style={styles.receitaImagem} source={require("./assets/images/Pudim.jpg")}/>

        <Text style={styles.receitaSubtitulo}>Ingredientes:</Text>
        <Text>
        1 lata de leite condensado
        leite {"\n"}
        1 lata de leite (medida da lata de leite condensado)
        ovo {"\n"}
        3 ovos inteiros {"\n"}
        1 lata de leite condensado
        leite {"\n"}
        1 lata de leite (medida da lata de leite condensado)
        ovo {"\n"}
        3 ovos inteiros
        </Text>

        <Text style={styles.receitaSubtitulo}>Modo de preparo:</Text>
        <Text>
        1{"\n"}
        Pudim{"\n"}
        Primeiro, bata bem os ovos no liquidificador.{"\n"}
        2{"\n"}
        Acrescente o leite condensado e o leite, e bata novamente.{"\n"}
        3{"\n"}
        Calda{"\n"}
        Derreta o açúcar na panela até ficar moreno, acrescente a água e deixe engrossar.{"\n"}
        4{"\n"}
        Coloque em uma forma redonda e despeje a massa do pudim por cima.{"\n"}
        5{"\n"}
        Asse em forno médio por 45 minutos, com a assadeira redonda dentro de uma maior com água.{"\n"}
        6{"\n"}
        Espete um garfo para ver se está bem assado.{"\n"}
        7{"\n"}
        Deixe esfriar e desenforme.
        </Text>
      </View>
    </ScrollView>

}

const styles = StyleSheet.create({
    tela:{
        backgroundColor: "#fff"
    },
    topo: {
        alignItems: "center",
        backgroundColor:  "#f54748",
        padding:32
    },
    topoImagem: {
        height: 64,
        width: 64
    },
    topoTexto: {
        color: "#fff",
        fontSize: 32,
        textAlign: "center"
    },
    receita:{
        marginVertical: 16,
        marginHorizontal: 32
    },
    receitaImagem: {
        height: 200,
        width: "auto"
    },
    receitaTitulo: {
        fontSize: 32,
        fontWeight: "bold",
        marginVertical: 16,
        textAlign: "center"
    },
    receitaSubtitulo: {
        fontSize: 24,
        margin: 16
    }
});
