let nextID = 1
const model = (body, id = nextID++)=>{
    if(body.barbeiro_id != undefined && body.barbeiro_id != '' &&
    body.nome != undefined && body.nome != '' &&
    body.descricao != undefined && body.descricao != '' && 
    body.preco != undefined && body.preco != '' &&
    body.duracao != undefined && body.duracao != ''){
        return{
            id,
            barbeiro_id: body.barbeiro_id,
            nome: body.nome,
            descricao: body.descricao,
            preco: body.preco,
            duracao: body.duracao
        }
    }
}

module.exports = model