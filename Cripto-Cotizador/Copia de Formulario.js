import React,{useState,useEffect} from 'react';
import {StyleSheet,Text,View,TouchableHighlight,Alert} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import axios from 'axios';

const Formulario = ({moneda,criptomoneda,setCriptomoneda,setMoneda,setconsultarAPI}) => {
    const [criptomonedas,setCriptomonedas] = useState([]);
    useEffect(() => {
        const consultarAPI = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
            const resultado = await axios.get(url);
            setCriptomonedas(resultado.data.Data);
        }
        consultarAPI();
    }, []);
    const obtenerMoneda = moneda => {
        setMoneda(moneda);
    }
    const obtenerCripto = cripto => {
        setCriptomoneda(cripto);
    }
    const CotizarPrecio = () => {
        if(moneda.trim() === '' || criptomoneda.trim() === '' ){
            mostrarAlerta();
            return;
        }
        setconsultarAPI(true);
    }
    const mostrarAlerta = () => {
        Alert.alert(
            'Error...',
            'Ambos campos son obligatorios',
            [
                {text:'OK'}
            ]
        )
    }
    return(
        <View>
            <Text style={styles.label}>Moneda</Text>
            <Picker onValueChange={moneda => obtenerMoneda(moneda)} selectedValue={moneda} itemStyle={{height:120}}>
                <Picker.Item label="-Seleccione-" value=""/>
                <Picker.Item label="US Dollar" value="USD"/>
                <Picker.Item label="MX Peso" value="MXN"/>
                <Picker.Item label="EUROP Euro" value="EUR"/>
                <Picker.Item label="GB Libra Estarlina" value="GBP"/> 
            </Picker>

            <Text style={styles.label}>Criptomoneda</Text>
            
            <Picker onValueChange={cripto => obtenerCripto(cripto)} selectedValue={criptomoneda} itemStyle={{height:120}}>
                <Picker.Item label="-Seleccione-" value=""/>
                {criptomonedas.map(cripto => (
                    <Picker.Item key={cripto.CoinInfo.Id} label={cripto.CoinInfo.FullName} value={cripto.CoinInfo.Name}/>
                ))}
            </Picker>
            <TouchableHighlight style={styles.btnCotizar} onPress={()=>CotizarPrecio()}>
                <Text style={styles.textoCotizar}>Cotizar</Text>
            </TouchableHighlight>
        </View>
    );
}

const styles = StyleSheet.create({
    label:{
        fontFamily:'Lato-Black',
        textTransform:'uppercase',
        fontSize:22,
        marginVertical:20
    },
    btnCotizar:{
        backgroundColor:'#5E49E2',
        padding:10,
        marginTop:20
    },
    textoCotizar:{
        color:'#FFF',
        fontSize:18,
        fontFamily:'Lato-Black',
        textTransform:'uppercase',
        textAlign:'center'
    }
})

export default Formulario;