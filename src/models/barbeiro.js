let nextID = 1

const model = (body, id = nextID++)=>{
    if(body.barbearia_id != undefined && body.barbearia_id != '' &&
    body.nome != undefined && body.nome != '' &&
    body.expediente.inicio != undefined && body.expediente.inicio != '' && 
    body.expediente.fim != undefined && body.expediente.fim != '' &&
    body.foto != undefined && body.foto != '' && body.descricao != undefined && body.descricao != ''){
        return{
            id,
            barbearia_id: body.barbearia_id,
            nome: body.nome,
            expediente: {inicio: body.expediente.inicio, fim: body.expediente.fim },
            foto: body.foto,
            descricao: body.descricao
        }
    }
}

module.exports = model
