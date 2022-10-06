const logger = require('./logger');


const myFunction =val=>{
  if(val){
      return true;
  }
  throw new Error("Debe registrarse un dato válido") 
  }




try{
  //código que puede fallar
  const validar = myFunction(null);
  logger.log(validar);
  logger.info("Datos ingresados correctamente");
}catch(e){
  //En caso de fallar, quiero qeu ejecute:
  logger.error(e);
  logger.error("ERROR");
}finally{
  logger.info("Fin de ejecución");
}




