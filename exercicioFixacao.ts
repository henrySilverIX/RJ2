function Telefone(ddd: string, numero: string) {
    let _ddd = ddd
    let _numeroTelefone = numero

    //Métodos get e set para o ddd
    Object.defineProperty(this, "ddd", {
        get: function(){
            return _ddd;
        },
        set: function(value){
            _ddd = value
        }
    })


    //Métodos get e set para o número de telefone
    Object.defineProperty(this, "NumeroTelefone", {
        get: function(){
            return _numeroTelefone;
        },
        set: function(value: string){
            _numeroTelefone = value
        }
    })

}


function Endereco(estado: string, cidade: string, rua: string, numero: string) {
    let _estado = estado
    let _cidade = cidade
    let _rua = rua
    let _numero = numero

    //Métodos get e set para o estado
    Object.defineProperty(this, "estado", {
        get: function(){
            return _estado;
        },
        set: function(value: string){
            _estado = value
        }
    })

    //Métodos get e set para a cidade
    Object.defineProperty(this, "cidade", {
        get: function(){
            return _cidade;
        },
        set: function(value: string){
            _cidade = value
        }
    })

    //Métodos get e set para a rua
    Object.defineProperty(this, "rua", {
        get: function(){
            return _rua;
        },
        set: function(value: string){
            _rua = value
        }
    })

    //Métodos get e set para o número
    Object.defineProperty(this, "numero", {
        get: function(){
            return _numero;
        },
        set: function(value: string){
            _numero = value
        }
    })
}

function Cliente(nome: string, telefoneCelular: any, email: string, endereco: any) {
    let _nome = nome
    let _telefoneCelular = telefoneCelular
    let _email = email
    let _endereco = endereco

    //return para o método descrição ser entendido
    return {

        //Get e set do nome
        get nome() {
            return _nome;
        },
        set nome(value: string) {
            _nome = value;
        },

        //Get e set do telefone celular
        get telefoneCelular() {
            return _telefoneCelular;
        },
        set telefoneCelular(value: any) {
            _telefoneCelular = value;
        },

        //Get e set do email
        get email() {
            return _email;
        },
        set email(value: string) {
            _email = value;
        },

        //Get e set do endereço
        get endereco() {
            return _endereco;
        },
        set endereco(value: any) {
            _endereco = value;
        },

        get descricao() {
            return '-----------------\n' +
                "Informações do Cliente:\n" +
                this.nome + "\n" +
                '-----------------\n' +
                '-----------------\n' +
                'Telefone: \n' +
                'DDD: ' + this.telefoneCelular.ddd + '\n' +
                'Número: ' + this.telefoneCelular.NumeroTelefone + "\n" +
                '-----------------\n' +
                'Endereço: \n' +
                'Rua: ' + this.endereco.rua + '\n' +
                'Número: ' + this.endereco.numero + '\n' +
                'Cidade: ' + this.endereco.cidade + '\n' +
                'Estado: ' + this.endereco.estado;
        }
    };
}

// Criando os objetos - Cliente 1
let telefone1 = new Telefone('11', '997125412');
let endereco1 = new Endereco('SP', 'São Paulo', 'Av. Paulista', '985');
let cliente1 = Cliente('Carlos Conrado Heinz', telefone1, 'carlos.conrado@gmail.com', endereco1);

// Criando os objetos - Cliente 2
let telefone2 = new Telefone('21', '985412369');
let endereco2 = new Endereco('RJ', 'Rio de Janeiro', 'Rua das Laranjeiras', '123');
let cliente2 = Cliente('Ana Beatriz Santos', telefone2, 'ana.santos@gmail.com', endereco2);

// Criando os objetos - Cliente 3
let telefone3 = new Telefone('31', '988541237');
let endereco3 = new Endereco('MG', 'Belo Horizonte', 'Av. Amazonas', '456');
let cliente3 = Cliente('Fernando Almeida', telefone3, 'fernando.almeida@gmail.com', endereco3);

// Criando os objetos - Cliente 4
let telefone4 = new Telefone('41', '999874563');
let endereco4 = new Endereco('PR', 'Curitiba', 'Rua XV de Novembro', '789');
let cliente4 = Cliente('Juliana Rodrigues', telefone4, 'juliana.rodrigues@gmail.com', endereco4);

// Criando os objetos - Cliente 5
let telefone5 = new Telefone('51', '992314578');
let endereco5 = new Endereco('RS', 'Porto Alegre', 'Av. Borges de Medeiros', '101');
let cliente5 = Cliente('Roberto Silva', telefone5, 'roberto.silva@gmail.com', endereco5);



//Declaração dos clientes
let clientes = [cliente1, cliente2, cliente3, cliente4, cliente5];


// Ordenando o array de clientes pelo nome
clientes.sort((a, b) => {
    // Comparando os nomes de cada cliente, retornando a ordem alfabética
    if (a.nome < b.nome) {
        return -1; // a vem antes de b
    }
    if (a.nome > b.nome) {
        return 1; // b vem antes de a
    }
    return 0; // a e b são iguais
});



for(let index = 0; index < clientes.length; index++){
    console.log(clientes[index].descricao)
    console.log()
}