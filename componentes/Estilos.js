import { StyleSheet, Dimensions } from 'react-native';


const { width } = Dimensions.get('window');

const Styles = StyleSheet.create({
  container: {
    backgroundImage: require('../imagens/FundoPreto.png'),
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },


  containerMenu: {
    position:'absolute',top:280, left:50,
    backgroundImage: require('../imagens/FundoPreto.png'),
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },



  Fundo:{

    flex:1,
    width:250,
    resizeMode:"cover",
    width:"100%"
  },

  cabecalho:{
    backgroundColor:'black',
    color:'white'
  },


  ViewAgendamento:{
    maxHeight: 300, // Defina a altura máxima desejada
    backgroundColor: 'rgba(247, 247, 247, 0.2)',
    width: '80%', // Ajuste a largura conforme necessário
    alignSelf: 'center',
    position:'relative',top:-110
  },



  oficinaLogo:{
    height:200,
    width:350,
    marginBottom:30  },






    inputAgendamento:{
      width:200,
      backgroundColor:'black',
    textAlign:'center',
    color: 'white',
    padding: 6,
    borderWidth: 3, // Em vez de 'border', use 'borderWidth' para especificar a largura da borda
    borderColor: '#509e45', // Cor da borda
    fontSize:20,
    marginBottom: 35,
    },


  input: {
    textAlign:'center',
    width:300,
    color: 'black',
    padding: 8,
    borderWidth: 3,
    borderColor: '#509e45', 
    backgroundColor: '#e9e9e9',
    marginBottom: 10,
  },



  iosPicker: {
    color:'black',
    backgroundColor: '#e9e9e9',
    borderRadius: 4,
    marginBottom: 10,
    height: 40,
    width: 240,
    paddingLeft: 10,
  },
  
  androidPicker: {
    borderWidth: 3,
    borderColor: '#509e45',
    backgroundColor: '#e9e9e9',
    borderRadius: 4,
    marginBottom: 10,
    height: 40,
    width: 40,
    paddingLeft: 10,
  },

  descricaoInput: {
    color: 'black',
    borderWidth: 3,
    borderColor: '#509e45',
    textAlignVertical: 'top',
    backgroundColor: '#e9e9e9',
    flex: 1,
    width: 200,
    height:100,
    borderColor: '#ccc',
    borderRadius: 4,
    marginBottom: 16,
  },
  
  folha:{
    height:50,
    width:50,
    marginTop:5
  },

  logo: {
    width: 200,
    height: 200,
    marginBottom:5
  },



  logoEnvio:{
    justifyContent:'center',
    alignContent:'center',
    width:200,
    height:200
  },

  inputs: {
    backgroundColor: 'white',
    padding: 10,
    marginBottom: 10,
  },


  botaoLogin: {
    backgroundColor: '#509e45',
    padding: 10,
    borderRadius: 5,
    marginBottom: 50,
  },




  botao: {
    alignContent:'center',
    paddingTop:15,
    height:50,
    width:320,
    backgroundColor: '#509e45',
    padding: 10,
    borderRadius: 5,
    marginBottom: 50,
  },

  botaoTexto: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },

 
  texto: {
    justifyContent:'center',
    color: 'white',
    fontSize: 40,
    paddingTop:10
  },



  //////TELA CONSULTA

  ContainerConsulta: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ViewConsulta: {
    position:'relative',top:-60,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    marginTop: '40%',
    borderWidth: 4,
    borderColor: '#509e45',
  },
  inputConsulta: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },

  ViewResultado:{
    paddingTop:9,
    paddingLeft:6,
    paddingRight:6,
    borderWidth: 2,
    borderColor: '#509e45',
    backgroundColor:'white',
    textAlign:'center',
    height:40,

  },

  resultadoConsulta:{
    color:'black',
  },

  botaoResultado: {
    position:'relative',top:18,left:0,
    alignContent:'center',
    paddingTop:15,
    height:50,
    width:320,
    backgroundColor: '#509e45',
    padding: 10,
    borderRadius: 5,
    marginBottom: 50,
  },
 
 

//////ESTILOS TELA LOGIN///////////
ViewLogin:{
  position:'absolute',top:280,
  paddingTop:45,
  alignContent:'center',
  height:200,
  width:350
},

InputLogin:{
  backgroundColor:'black',
  textAlign:'center',
  color: 'white',
  padding: 6,
  borderWidth: 3, 
  borderColor: '#509e45',
  borderTopColor:'transparent',
  borderRightColor:'transparent',
  borderLeftColor:'transparent',
  fontSize:20,
  marginBottom: 35,

},

InputSenha:{
  backgroundColor:'black',
  fontSize:20,
  color: 'white',
  textAlign:'center',
  padding: 6,
  borderWidth: 3,
  borderColor: '#509e45',
  borderTopColor:'transparent',
  borderRightColor:'transparent',
  borderLeftColor:'transparent',
  marginBottom: 35,
},

textoInputView: {
  position:'absolute',top:0,
  flexDirection: "row", 
  alignItems: "center" ,
  justifyContent:'center',
  color: 'white',
  fontSize: 40,
  paddingTop:0
},

logoInput:{
  position:'absolute',top:25,
  width: 50,
  height: 50,
  marginBottom:5
},

TextoLogin:{
  color:'white',
  fontSize:30

},
ViewTextoLogin:{
  flex:1,
  textAlign:'center',
},


/////////telaprincipalTEXTO////


textoTelaPrincipal:{
  position:'absolute',top:10,
  flexDirection: "row", alignItems: "center"
},


//xa ptc

/////////////CONTATOOFICINA

ViewContato:{
  alignContent:'center',
  position:'absolute',left:48,top:240

},


tarefaBox: {
  flexDirection: 'row', // Para alinhar o botão à direita da tarefa
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 16,
    padding: 16,
    alignItems: 'center', // Para centralizar verticalmente o texto e o botão
    justifyContent: 'space-between', // Para distribuir o espaço entre o texto e o botão
},

botaoAceitar: {
  backgroundColor: '#509e45', // Cor de fundo do botão de aceitação
  paddingHorizontal: 12,
  paddingVertical: 8,
  borderRadius: 4,
},
textoBotao: {
  color: 'white', // Cor do texto do botão
  fontWeight: 'bold',
},









});

export default Styles;
