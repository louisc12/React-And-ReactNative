import React from "react";
import {Text,View,StyleSheet,SafeAreaView} from "react-native";
import Gasto from "./gasto";

const ListadoGasto = ({gastos,setModal,setGasto,filtro,gastosFiltrados}) => {
    return(
        <View style={styles.contenedor}>
            <Text style={styles.titulo}>Gastos</Text>
            {filtro ? gastosFiltrados.map(gasto => (
                <Gasto gasto={gasto} setGasto={setGasto} setModal={setModal} key={gasto.id}/>
            )): gastos.map(gasto => (
                <Gasto gasto={gasto} setGasto={setGasto} setModal={setModal} key={gasto.id}/>
            ))}
            {(gastos.length === 0 || (gastosFiltrados.length === 0 && !!filtro)) && (
                <Text style={styles.noGastos}>No hay Gastos</Text>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    contenedor:{
        marginTop:30,
        marginBottom:100
    },
    titulo:{
        color:'#64748B',
        fontSize:30,
        fontWeight:'700',
        textAlign:'center',
        marginTop:20
    },
    noGastos:{
        marginVertical:20,
        textAlign:'center',
        fontSize:20
    }
});

export default ListadoGasto;