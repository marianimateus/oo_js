// Função construtora Carro
function Carro(marca, modelo, ano, preco) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;

    // Atributo privado _preco
    let _preco = preco;

    // Getters e Setters para encapsulamento do atributo privado _preco
    this.getPreco = function () {
        return _preco;
    }

    this.setPreco = function (valor) {
        if (typeof valor === 'number' && valor > 0) { // Validação para garantir que o valor seja positivo e numérico
            _preco = valor;
        }
    }

    // Método para exibir informações do carro
    this.info = function() {
        console.log(`${this.marca} ${this.modelo}, Ano: ${this.ano}, Preço: R$${_preco}`);
    }
}

// Função construtora Sedan, herdando de Carro
function Sedan(marca, modelo, ano, preco) {
    Carro.call(this, marca, modelo, ano, preco);

    // Polimorfismo: desconto específico para Sedan
    this.desconto = function() {
        const novoPreco = this.getPreco() * 0.9;
        this.setPreco(novoPreco);
    }
}

// Função construtora SUV, herdando de Carro
function SUV(marca, modelo, ano, preco) {
    Carro.call(this, marca, modelo, ano, preco);

    // Polimorfismo: desconto específico para SUV
    this.desconto = function() {
        const novoPreco = this.getPreco() * 0.85;
        this.setPreco(novoPreco);
    }
}

// Criação de instâncias
const carro1 = new Sedan("Toyota", "Corolla", 2022, 100000);
const carro2 = new SUV("Jeep", "Compass", 2023, 150000);
const carro3 = new SUV("Hyundai", "Tucson", 2021, 140000);

// Teste dos métodos
carro1.desconto();
console.log(carro1.getPreco());  // 90000
carro1.info();  // Toyota Corolla, Ano: 2022, Preço: R$90000

carro2.desconto();
console.log(carro2.getPreco());  // 127500
carro2.info();  // Jeep Compass, Ano: 2023, Preço: R$127500

carro3.desconto();
console.log(carro3.getPreco());  // 119000
carro3.info();  // Hyundai Tucson, Ano: 2021, Preço: R$119000
