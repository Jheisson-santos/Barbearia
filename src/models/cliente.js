let nextID = 1

const model = (body, id = nextID++)=>{
    if(body.nome != undefined && body.nome != '' &&
    body.telefone != undefined && body.telefone != '' &&
    body.email != undefined && body.email != '' && body.senha != undefined && body.senha != ''){
        return{
            id,
            nome: body.nome,
            telefone: body.telefone,
            email: body.email,
            senha: body.senha
        }
    }
}
module.exports = model