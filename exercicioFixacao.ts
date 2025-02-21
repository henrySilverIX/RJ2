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


    Object.defineProperty(this, "estado", {
        get: function () {
            return {
                normal: _estado,
                lower: _estado.toLowerCase(),
                upper: _estado.toUpperCase()
            };
        },
        set: function (value: string) {
            _estado = value;
        }
    });

    Object.defineProperty(this, "cidade", {
        get: function () {
            return {
                normal: _cidade,
                lower: _cidade.toLowerCase(),
                upper: _cidade.toUpperCase()
            };
        },
        set: function (value: string) {
            _cidade = value;
        }
    });

    Object.defineProperty(this, "rua", {
        get: function () {
            return {
                normal: _rua,
                lower: _rua.toLowerCase(),
                upper: _rua.toUpperCase()
            };
        },
        set: function (value: string) {
            _rua = value;
        }
    });

    Object.defineProperty(this, "numero", {
        get: function () {
            return _numero;
        },
        set: function (value: string) {
            _numero = value;
        }
    });
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

        // Getter para o nome em lowercase
        get nomeLower() {
            return _nome.toLowerCase();
        },

        // Getter para o nome em uppercase
        get nomeUpper() {
            return _nome.toUpperCase();
        },

        // Getter para o email em lowercase
        get emailLower() {
            return _email.toLowerCase();
        },

        // Getter para o email em uppercase
        get emailUpper() {
            return _email.toUpperCase();
        },

        // Getter para o endereço
        get enderecoLower() {
            return {
                rua: _endereco.rua.toLowerCase(),
                cidade: _endereco.cidade.toLowerCase(),
                estado: _endereco.estado.toLowerCase()
            };
        },

        // Getter para o endereço em uppercase
        get enderecoUpper() {
            return {
                rua: _endereco.rua.toUpperCase(),
                cidade: _endereco.cidade.toUpperCase(),
                estado: _endereco.estado.toUpperCase()
            };
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
                'Rua: ' + this.endereco.rua.normal + '\n' +
                'Número: ' + this.endereco.numero + '\n' +
                'Cidade: ' + this.endereco.cidade.normal + '\n' +
                'Estado: ' + this.endereco.estado.normal;
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
let telefone4 = new Telefone('51', '992314578');
let endereco4 = new Endereco('RS', 'Porto Alegre', 'Av. Borges de Medeiros', '101');
let cliente4 = Cliente('Roberto Silva', telefone4, 'roberto.silva@gmail.com', endereco4);


// Criando os objetos - Cliente 5
let telefone5 = new Telefone('41', '999874563');
let endereco5 = new Endereco('PR', 'Curitiba', 'Rua XV de Novembro', '789');
let cliente5 = Cliente('Juliana Rodrigues', telefone5, 'juliana.rodrigues@gmail.com', endereco5);




//Testando os get upper e lower
//Nome do primeiro cliente em lowercase e uppercase
console.log("Nome em uppercase e lowercase: \n")
console.log(cliente1.nomeLower)
console.log(cliente1.nomeUpper)



//Declaração dos clientes
let clientes = [cliente1, cliente2, cliente3, cliente4, cliente5];


// Ordenando o array de clientes pelo nome
clientes.sort((a, b) => {
    // Comparando os nomes de cada cliente, retornando a ordem alfabética
    if (a.nome < b.nome) {
        return -1; 
    }
    if (a.nome > b.nome) {
        return 1;
    }
    return 0;
});



for(let index = 0; index < clientes.length; index++){
    console.log(clientes[index].descricao)
    console.log()
}