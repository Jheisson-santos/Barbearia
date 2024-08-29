let nextID = 1
const model = (body, id = nextID++)=>{
    if(body.cep != undefined && body.cep != '' /*&&
    body.nome != undefined && body.nome != '' &&
    body.descricao != undefined && body.descricao != '' && 
    body.preco != undefined && body.preco != '' &&
body.duracao != undefined && body.duracao != ''*/){
        return{
            id,
            cep: body.cep
        }
    }

return 400
}

module.exports = model