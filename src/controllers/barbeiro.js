const model = require('../models/barbeiro')
const db = [{id: 0, barbearia_id: 1, nome: "Claudomiro", expediente:{inicio: "08:30", fim: "17:15"}, foto: "3 x 4", descricao:"Calvo"}]

const store = (body)=>{
    let novo = model(body)
    if(novo){
        db.push(novo)
        return 200
    }
    return 400
}

const index = ()=> db

const show = (id)=> db.find((el)=>el.id == id)

const update = (id, body)=>{
    const index = db.find((el)=> el.id == id)
    const novo = model(body, parseInt(id))
    if(novo && index != -1){
        db[index] = novo
        return 200
    }
    return 400
}

const destroy = (id)=>{
    const index = db.find((el)=> el.id == id)
    if(index != -1){
        db.splice(index, 1)
        return 200
    }
    return 400
}

module.exports = {store, index, show, update, destroy}