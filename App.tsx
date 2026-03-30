import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import {Produto} from "./src/Produto";


export const produtosIniciais = [
  {
    id: 1,
    nome: "Café em Grãos",
    imagem: "https://images.unsplash.com/photo-1559525839-b184a4d698c7?w=200",
    noCarrinho: false,
  },
  {
    id: 2,
    nome: "Leite Integral",
    imagem: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=200",
    noCarrinho: false,
  },
  {
    id: 3,
    nome: "Pão de Forma",
    imagem: "https://images.unsplash.com/photo-1598373182133-52452f7691ef?w=200",
    noCarrinho: false,
  },
  {
    id: 4,
    nome: "Ovos (Dúzia)",
    imagem: "https://images.unsplash.com/photo-1587486913049-53fc88980cfc?w=200",
    noCarrinho: false,
  },
  {
    id: 5,
    nome: "Manteiga",
    imagem: "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?w=200",
    noCarrinho: false,
  }
];

export default function App() {
  //muda o estado do noCarrinho
  const [produtos, setProdutos] = useState <Produto[]> (produtosIniciais);

  function atualizarCart(id:number){
        const novaLista = produtos.map(produto => {
            if(produto.id === id){
                return{
                    ...produto,
                    noCarrinho: !produto.noCarrinho
                }
            }
            return produto;
   });

            setProdutos(novaLista);
  }

  //quantidade de iterns no carrinho
  const itensNoCarrinho = produtos.filter((produto) => produto.noCarrinho).length;


  //construcao d
 return (
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.titulo}>Lista de Compras TADS</Text>
            <Text style={styles.subtitulo}>{itensNoCarrinho} no carrinho</Text>
          </View>
          <FlatList
            data={produtos}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <Produto item={item} onToggle={atualizarCart} />
            )}
            contentContainerStyle={styles.listContent}
            showsVerticalScrollIndicator={true}
          />
        </SafeAreaView>
      </SafeAreaProvider>
  );
}



const styles = StyleSheet.create({
    container :{
        flex: 1,
        backgroundColor: '#f7f7f7',
    },

    header: {
      paddingHorizontal: 16,
      paddingTop: 12,
      paddingBottom: 4,
    },

    titulo: {
      fontSize: 28,
      fontWeight: '700',
      color: '#111111',
    },

    subtitulo: {
      marginTop: 4,
      fontSize: 14,
      color: '#5a5a5a',
    },

    listContent: {
      paddingBottom: 16,
    },
});

