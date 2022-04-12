import React,{useState,useEffect} from 'react';
import {Image,StyleSheet,Pressable,View,Alert,Modal,ScrollView} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from './src/components/Header';
import NuevoPresupuesto from './src/components/NuevoPresupuesto';
import ControlPresupuesto from './src/components/ControlPresupuesto';
import FormularioGasto from './src/components/FormularioGasto';
import {generarId} from './src/Helpers';
import ListadoGasto from './src/components/ListadoGasto';
import Filtro from './src/components/Filtro';


const App = () => {
  const[presupuesto,setPresupuesto]=useState(0);
  const [isValidPresupuesto,setIsValidPresupuesto]=useState(false)
  const [gastos,setGastos]=useState([])
  const [modal,setModal]=useState(false)
  const [gasto,setGasto] = useState({})
  const[filtro,setFiltro]=useState('')
  const[gastosFiltrados,setGastosFiltrados]=useState([])

  useEffect(()=>{
    const obtenerPresupuestoStorage = async () =>{
      try {
        const presupuestoStorage = await AsyncStorage.getItem('planificador_presupuesto') ?? 0
        if(presupuestoStorage > 0){
          setPresupuesto(presupuestoStorage)
          setIsValidPresupuesto(true)
        }
        console.log(presupuestoStorage)
      } catch (error) {
        console.log(error)
      } 
    }
    obtenerPresupuestoStorage()
  },[])

  useEffect(()=>{
    if(isValidPresupuesto){
      const guardarPresupuestoStorage = async () =>{
        try {
          await AsyncStorage.setItem('planificador_presupuesto',presupuesto)
        } catch (error) {
          console.log(error)
        }
      }
      guardarPresupuestoStorage()
    }
  },[isValidPresupuesto])

  useEffect(()=>{
    const obtenerGastosStorage = async () =>{
      try {
        const gastosStorage = await AsyncStorage.getItem('planificador_gastos') 
        setGastos(gastosStorage ? JSON.parse(gastosStorage) : [])
      } catch (error) {
        console.log(error)
      }
    }
    obtenerGastosStorage()
  },[])

  useEffect(()=>{
    const GuardarGastosStorage = async() =>{
      try {
        await AsyncStorage.setItem('planificador_gastos',JSON.stringify(gastos))
      } catch (error) {
        console.log(error)
      }
    }
    GuardarGastosStorage()
  },[gastos])

  const handleNuevoPresupuesto = (presupuesto) =>{
    if(Number(presupuesto) > 0){
      setIsValidPresupuesto(true)
    }else{
      Alert.alert('Error','El presupuesto no puede ser 0 o negativo','Ok')
    }
  }

  const handleGasto = gasto => {
    if([gasto.nombre,gasto.cantidad,gasto.categoria].includes('')){
      Alert.alert(
        "Error",
        "Todos los campos son obligatorios",
        [{text:'Ok'}]
      )
      return
    }

    if(gasto.id){
      const gastosActualizados = gastos.map(gastoState => gastoState.id === gasto.id ? gasto : gastoState)
      setGastos(gastosActualizados)
    }else{
      gasto.id = generarId()
      gasto.fecha = Date.now()
      setGastos([...gastos,gasto])
      
    }
    //añadir el nuevo gasto al state
    setModal(!modal)
  }

  const eliminarGasto = id =>{
    Alert.alert(
      '¿Deseas eliminar este Gasto?',
      'Gasto eliminado no se puede recuperar',
      [
        {text:'No',style:'cancel'},
        {text:'Si eliminar gasto',onPress: () => {
          const gastosActualizados = gastos.filter(gastoState => gastoState.id !== id)
          setGastos(gastosActualizados)
          setModal(!modal)
          setGasto({})
        }}
      ]
    )
  }

  const resetearApp = () =>{
    Alert.alert(
      '¿Deseas reinicar la app?',
      'Esto eliminara el presupuesto y los gastos',
      [
        {text:'No',style:"cancel"},
        {text:'Si, eliminar',onPress:async()=>{
          try {
            await AsyncStorage.clear()
            setIsValidPresupuesto(false)
            setPresupuesto(0)
            setGastos([])
          } catch (error) {
            console.log(error)
          }
        }}
      ]
    )
  }

  return (
    <View style={styles.contenedor}>
      <ScrollView>
      <View style={styles.header}>
        <Header/>
        {isValidPresupuesto ? <ControlPresupuesto gastos={gastos} presupuesto={presupuesto} resetearApp={resetearApp}/> : <NuevoPresupuesto handleNuevoPresupuesto={handleNuevoPresupuesto} presupuesto={presupuesto} setPresupuesto={setPresupuesto} filtro={filtro} gastosFiltrados={gastosFiltrados}/>}
        
      </View>
      {isValidPresupuesto && (<><Filtro gastos={gastos} setGastosFiltrados={setGastosFiltrados} filtro={filtro} setFiltro={setFiltro}/><ListadoGasto setGasto={setGasto} setModal={setModal} gastos={gastos} filtro={filtro} gastosFiltrados={gastosFiltrados}/></>)}
      </ScrollView>
      {modal && (<Modal animationType='slide' visible={modal}>
        <FormularioGasto setGasto={setGasto} gasto={gasto} setModal={setModal} handleGasto={handleGasto} eliminarGasto={eliminarGasto}/>
        </Modal>)}
      {isValidPresupuesto && (<Pressable style={styles.presable} onPress={()=>setModal(!modal)}>
        <Image style={styles.imagen} source={require('./src/img/nuevo-gasto.png')}/>
      </Pressable>)}
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor:{
    backgroundColor:'#F5F5F5',
    flex:1,
  },
  header:{
    backgroundColor:'#3B82F6',
    minHeight:400

},
presable:{
  backgroundColor:'red',
  bottom:40,
  right:30,
  position:'absolute',

},
imagen:{
  width:60,
  height:60
}
});

export default App;
