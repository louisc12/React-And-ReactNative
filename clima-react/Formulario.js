import React,{useState} from 'react';
import {Text,TextInput,View,StyleSheet,TouchableWithoutFeedback,Animated,Alert} from 'react-native';
import {Picker} from '@react-native-community/picker';

const Formulario = ({busqueda,guardarBusqueda,guardarConsultar}) =>{

    const {pais,ciudad} = busqueda;

    const [animacionboton] = useState(new Animated.Value(1));

    const consultarClima = () => {
        if(pais.trim() === '' || ciudad.trim() === ''){
            mostrarAlerta();
            return;
        }
        guardarConsultar(true)
    }

    const mostrarAlerta = () => {
        Alert.alert(
            'Error',
            'Agrega una ciudad y un pais para la busqueda',
            [{text:'Entendido'}]
        )
    }
    
    const animacionEntrada = () =>{
        Animated.spring(animacionboton,{
            toValue:.75
        }).start();
    }

    const animacionSalida = () =>{
        Animated.spring(animacionboton,{
            toValue:1,
            friction:4,
            tension:30
        }).start();
    }

    const estiloAnimacion = {
        transform: [{scale:animacionboton}]
    }

    return (
        <>
            <View style={styles.formulario}>
                <View>
                    <TextInput
                        value = {ciudad}
                        style={styles.input}
                        onChangeText={ciudad => guardarBusqueda({...busqueda,ciudad})}
                        placeholder="Ciudad"
                        placeholderTextColor="#666"
                    />
                </View>
                <View>
                    <Picker onValueChange={pais => guardarBusqueda({...busqueda,pais})} selectedValue={pais} itemStyle={{height:120,backgroundColor:'#FFF'}}>
                        <Picker.Item label="--Seleccione un pais--" value=""/>
                        <Picker.Item label="Mexico" value="MX"/>
                        <Picker.Item label="Estados Unidos" value="US"/>
                        <Picker.Item label="Colombia" value="CO"/>
                        <Picker.Item label="Argentina" value="AR"/>
                        <Picker.Item label="Francia" value="FR"/>
                        <Picker.Item label="España" value="ES"/>
                        <Picker.Item label="Inglaterra" value="UK"/>
                    </Picker>
                </View>
                <TouchableWithoutFeedback onPress={() => consultarClima()} onPressIn={() => animacionEntrada()} onPressOut={()=>animacionSalida()}>
                    <Animated.View style={[styles.btnBuscar,estiloAnimacion]}>
                        <Text style={styles.textoBuscar}>Buscar Clima</Text>
                    </Animated.View>
                </TouchableWithoutFeedback>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    input:{
        padding:10,
        height:50,
        backgroundColor:'#FFF',
        fontSize:20,
        marginBottom:20,
        textAlign:'center'
    },
    btnBuscar:{
        marginTop:50,
        backgroundColor:'#000',
        padding:10,
        justifyContent:'center'
    },
    textoBuscar:{
        color:'#FFF',
        fontWeight:'bold',
        textTransform:'uppercase',
        textAlign:'center',
        fontSize:18
    }
})

export default Formulario;