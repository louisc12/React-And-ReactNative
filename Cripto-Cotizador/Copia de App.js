import React,{useState,useEffect}from 'react';
import {StyleSheet,Text,View,Image,ScrollView,ActivityIndicator} from 'react-native';
import Header from './componentes/Header';
import Formulario from './componentes/Formulario';
import axios from 'axios';
import Cotizacion from './componentes/Cotizacion';

const App = () => {
  const [moneda,setMoneda] = useState('');
  const [criptomoneda,setCriptomoneda] = useState('');
  const [consultarAPI,setconsultarAPI] = useState(false);
  const [resultado,setResultado] = useState({});
  const [cargando,setCargando] = useState(false);
  useEffect(()=>{
    const CotizarCriptomoneda = async () =>{
      if(consultarAPI){
        const url =`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
        const resultado = await axios.get(url);
        setCargando(true);
        setTimeout(() => {
          setResultado(resultado.data.DISPLAY[criptomoneda][moneda]);
          setconsultarAPI(false);
          setCargando(false);
        }, 3000);
      }
    }
    CotizarCriptomoneda();
  },[consultarAPI]);
  const componente = cargando ? <ActivityIndicator size="large" color="#5E49E2"/> : <Cotizacion resultado={resultado}/>
  return (
    <>
    <ScrollView>
        <Header/>
          <Image
            style={styles.imagen}
            source={require('./assets/img/cryptomonedas.png')}
          />
          <View style={styles.contenido}>
            <Formulario moneda={moneda} criptomoneda={criptomoneda} setMoneda={setMoneda} setCriptomoneda ={setCriptomoneda} setconsultarAPI={setconsultarAPI}/>
            
          </View>
        <View style={{marginTop:40}}> 
        {componente}
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  imagen:{
    width:'100%',
    height:150,
    marginHorizontal:'2.5%'
  },
  contenido:{
    marginHorizontal:'2.5%'
  }
});

export default App;
