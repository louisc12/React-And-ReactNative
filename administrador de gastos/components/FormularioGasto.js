import React,{useState,useEffect} from "react";
import {Text,View,StyleSheet,SafeAreaView,TextInput,Pressable} from "react-native";
import {Picker} from '@react-native-picker/picker';
import globalStyles from "../styles";

const FormularioGasto = ({setModal,handleGasto,gasto,setGasto,eliminarGasto}) => {
    const[nombre,setNombre]=useState('')
    const[cantidad,setCantidad]=useState('')
    const[categoria,setCategoria]=useState('')
    const [id,setId]=useState('')
    const [fecha,setFecha]=useState('')
    useEffect(()=>{
        if(gasto?.nombre){
            setNombre(gasto.nombre)
            setCantidad(gasto.cantidad)
            setCategoria(gasto.categoria)
            setId(gasto.id)
            setFecha(gasto.fecha)
        }
    },[gasto])
    return(
        <SafeAreaView style={styles.contenedor}>
            <View style={styles.contenedorBotones}>
                <Pressable onLongPress={() => {
                    setModal(false),
                    setGasto({})
                }} style={[styles.btn,styles.btnCancelar]}>
                    <Text style={styles.btnTexto}>Cancelar</Text>
                </Pressable>
                {!!id && (
                    <Pressable onLongPress={()=>eliminarGasto(id)} style={[styles.btn,styles.btnEliminar]}>
                    <Text style={styles.btnTexto}>Eliminar</Text>
                </Pressable>
                )}
                
            </View>
            <View style={styles.formulario}>
                <Text style={styles.titulo}>{gasto?.nombre ? 'Editar Gasto' : 'Nuevo Gasto'}</Text>
                <View style={styles.campo}>
                    <Text style={styles.label}>Nombre del Gasto</Text>
                    <TextInput style={styles.input} placeholder="Nombre del gasto. ej. comida" value={nombre} onChangeText={setNombre}/>
                </View>
                <View style={styles.campo}>
                    <Text style={styles.label}>Cantidad del Gasto</Text>
                    <TextInput style={styles.input} keyboardType="numeric" placeholder="Cantidad gastada. ej. $300" value={cantidad} onChangeText={setCantidad}/>
                </View>
                <View style={styles.campo}>
                    <Text style={styles.label}>Categoria del Gasto</Text>
                    <Picker selectedValue={categoria} onValueChange={(value)=>{
                        setCategoria(value)
                    }}>
                        <Picker.Item label="--- Seleccione ---" value=""/>
                        <Picker.Item label="Ahorro" value="ahorro"/>
                        <Picker.Item label="Comida" value="comida"/>
                        <Picker.Item label="Casa" value="casa"/>
                        <Picker.Item label="Gastos Varios" value="gastosvarios"/>
                        <Picker.Item label="Ocio" value="ocio"/>
                        <Picker.Item label="Salud" value="salud"/>
                        <Picker.Item label="Suscripciones" value="suscripciones"/>
                    </Picker>
                </View>
                <Pressable style={styles.submitBtn} onPress={()=>handleGasto({nombre, cantidad, categoria,id,fecha})}>
                    <Text style={styles.submitBtnTexto}>{gasto?.nombre ? 'Guardar Cambios Gasto' : 'Agregar Gasto'}</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    contenedor:{
        backgroundColor:'#1E40AF',
        flex:1
    },
    contenedorBotones:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    btn:{
        padding:10,
        marginTop:30,
        marginHorizontal:10,
        width:'45%'
    },
    formulario:{
        ...globalStyles.contenedor
    },
    btnCancelar:{
        backgroundColor:'#DB2777',
        
    },
    btnEliminar:{
        backgroundColor:'red'
    },
    btnTexto:{
        textTransform:'uppercase',
        fontWeight:'bold',
        color:'#FFF',
        textAlign:'center'
    },
    titulo:{
        textAlign:'center',
        fontSize:28,
        marginBottom:30,
        color:'#64748B'
    },
    label:{
        color:'#64748B',
        textTransform:'uppercase',
        fontSize:16,
        fontWeight:'bold'
    },
    campo:{
        marginVertical:10
    },
    input:{
        backgroundColor:'#F5F5F5',
        padding:10,
        borderRadius:10,
        marginTop:10
    },
    submitBtn:{
        backgroundColor:'#3B82F6',
        padding:10,
        borderRadius:10,
        marginTop:20
    },
    submitBtnTexto:{
        textAlign:'center',
        color:'#FFF',
        fontWeight:'bold',
        textTransform:'uppercase'
    }
});

export default FormularioGasto;