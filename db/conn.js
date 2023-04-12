const Sequelize = require('sequelize')
const sequelize = new Sequelize ('e_commerce','root','senai',{
    host: 'localhost',
    dialect: 'mysql',
})
sequelize.authenticate().then(()=>{
    console.log('conexão realizada com sucesso!')
}).catch((err)=>{
   console.log('Erro de conexão'+err)
})

module.exports = sequelize