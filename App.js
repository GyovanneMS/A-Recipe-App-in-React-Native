import React from 'react';
import { StyleSheet, Text, View, ScrollView, StatusBar, Image } from 'react-native';

export default function App() {
  return <ScrollView>
      <StatusBar backgroundColor="#f54748" barStyle="light-content" />
      <View style={styles.topo}>
        <Image style={styles.topoImagem}  source={ require("./assets/images/icon.png")} />

        <Text style={ styles.topoTexto}> Melograno {"\n"} Cozinhando com APPs</Text>
      </View>
      <View>
        <Text> Pudim </Text>
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
    }
});
