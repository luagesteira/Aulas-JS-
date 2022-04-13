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

    consultarTodos(display){

        fetch(urlBase)
        .then(x => x.text())
        .then(data => display(data))
    }

    consultarPeloId(idContato, display) {
        fetch(`${urlBase}/${idContato}`)
            .then(x => x.text())
            .then(data => display(data))
    }

    update(){

        fetch(`${urlBase}/${this.id}`, {

            method: 'PUT',
            body: JSON.stringify(this),
            headers: {
                'Content-type': 'Application/json'
            }
        })

    }

    excluir(idcontato) {
        fetch(`${urlBase}/${idcontato}`, {
            method: 'DELETE'
        })
    }


}




//comando json json-server --watch db.json
