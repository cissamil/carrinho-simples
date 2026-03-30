import React, { useState } from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

export interface Produto{
    id: number;
    nome: string;
    imagem: string;
    noCarrinho: boolean;
}

interface Componente{

    item: Produto;
    onToggle: (id:number) => void; //funcao callback pai e filho

}


export const Produto = ({item,onToggle}: Componente) => {
    const [imageUri, setImageUri] = useState(item.imagem);

    return(
        <View style= {styles.container}>
            <Image
                source={{ uri: imageUri }}
                style={styles.imagem}
                onError={() => setImageUri('https://placehold.co/144x144/png?text=Produto')}
            />
            <View style={styles.content}>
                <Text style={styles.nome}>{item.nome}</Text>
            </View>
            <TouchableOpacity style={styles.botaoCarrinho} onPress = {()=> onToggle(item.id)}>
                <Ionicons 

                    name={item.noCarrinho ? "cart": "cart-outline"}
                    size={24}
                    color={item.noCarrinho ? "green": "black"}
                />

            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        borderRadius: 14,
        padding: 12,
        marginHorizontal: 16,
        marginVertical: 8,
        shadowColor: '#000',
        shadowOpacity: 0.08,
        shadowOffset: { width: 0, height: 3 },
        shadowRadius: 8,
        elevation: 2,
    },

    imagem:{
        width: 72,
        height: 72,
        borderRadius: 10,
        backgroundColor: '#f0f0f0',
    },

    content: {
        flex: 1,
        marginLeft: 12,
    },

    nome: {
        fontSize: 16,
        fontWeight: '600',
        color: '#202020',
    },

    botaoCarrinho: {
        width: 42,
        height: 42,
        borderRadius: 21,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f4f4f4',
    },
});
    