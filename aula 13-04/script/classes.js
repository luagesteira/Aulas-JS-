var urlBase = "http://localhost:3000/contatos"


class Contato{
    constructor(id, nome, fone, email){

        this.id = id
        this.nome = nome
        this.fone = fone 
        this.email = email
    }

    salvar(){
        console.log('objeto salvo $(this.nome) $(this.fone) $(this.email)')
        fetch(urlBase, {

            method: 'POST',
            body: JSON.stringify(this),
            headers: {
                'Content-type': 'Application/json'
            }
        })
        .catch(erro => console.log(erro))
    }
}

//comando json json-server --watch db.json
