import {View, Text, StyleSheet} from 'react-native'
import { PropsWithChildren } from 'react'

// type Card=PropsWithChildren<
// {
//     title: string;
//     children: React.ReactNode
// }>
//          this is one way to add children

type Card={
title: string;
children: React.ReactNode
}


export default function Card({title, children}:PropsWithChildren< Card>){

    return(
        <View style = {styles.card}>
              <Text style ={styles.title}>{title}</Text>
              {children}
        </View>      
    )

}

const styles = StyleSheet.create({
    card:{
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 20,
        paddingVertical: 40,
        gap:60,
        shadowColor: "#000",
        marginTop: 150,
        //shadow
        shadowOffset: {
	      width: 0,
	      height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        elevation: 5,

    },
    title:{
        fontSize: 24,
        fontWeight: '500',
    },

})