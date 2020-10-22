<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Promises</title>
    </head>
    <body>
        <script>
            /*
            SINGLE THREAD
            IO NÃO BLOQUEANTE

            ASSÍNCRONA
            EX: BANCO PEGAR CEP
            CEP -> CORREIOS

            PROMISES

            FILA CALL BACK REQUERY
            */

            //console.log('primeiro')

            //setTimeout(function() {
              // console.log('segundo')
            //}, 500+500)

           //console.log('terceiro')
           //console.log('quarto')
           //setTimeout(function(){
              // console.log('Meio')
           //}, 500+500)
          // console.log('quinto')

           /*
           ESTADOS DA PROMISE:
           PENDENTE
           REALIZADO
           REJEITADO
           ESTABELICIDA
           */

           function jaRealizada() {
               return Promise.resolve('01001000')
           }

           function jaRejeitada(){
               return Promise.reject();
           }

               jaRealizada().then(function(data){
                   console.log('promise resolvida', data)
               })

               jaRejeitada().catch(function() {
                   console.log('REJEITADO!')
               })

               function promiseTrabalhada() {
                   return new Promise(function(resolve, reject){
                       setTimeout(function() {
                           resolve('Hello world')
                       }, 1000);
                   })
               }

               promiseTrabalhada().then(function(message){
                   console.log(message)
               })

               // https://viacep.com.br/ws/01001000/json/
                jaRealizada()
                .then(function(cep) {
                    return window
               .fetch('https://viacep.com.br/ws/'+cep+'/json/')
                })
               .then(function(data) {
                   return data.json()
                   })
                   .then(function() {
                       return jaRejeitada()
                   })
                   .then(function(endereco) {
                       console.log(endereco)
                   })
                   .catch(function() {
                    console.log('Aconteceu algum erro')
                   })
                   
        </script>
    </body>
</html>