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
            body: this,
            headers: {
                'Content-type': 'Application/json'
            }
        })
    }
}

function gravar() {
    var nome = document.getElementsByTagName("input")[0].value
    var fone = document.getElementsByTagName("input")[1].value
    var email = document.getElementsByTagName("input")[2].value

    let obj = new Contato(0, nome, fone, email)
    obj.salvar()
}