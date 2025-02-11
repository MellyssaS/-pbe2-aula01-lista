const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
app.post('/inss', (req, res) => {
    const {salario} = req.body;
    let desconto = 0;
    let teto = 7087.22;
    
    if (salario <= 1212) {
        desconto = salario * 7.5 / 100;
    } else if (salario <= 2427) {
        desconto = salario * 9 / 100;
    } else if (salario <= 3641) {
        desconto = salario * 12 / 100;
    } else if (salario <= teto) {
        desconto = salario * 14 /100;
    } else {
        desconto = teto * 14 /100;
    }
    
    let salarioFinal = salario - desconto;
    res.json({ salario, desconto, salarioFinal})

});

app.listen(4000, () => {
    console.log('Servidor rodando em http://localhost:4000')
});

app.post('/lado', (req, res) => {
    const {lado1} = req.body;
    const {lado2} = req.body;
    const {lado3} = req.body;
    let oq = "";
    if (lado1 === lado2 && lado2 === lado3){
     oq = "EQUILÁTERO"
    } else if (lado1 !== lado2 && lado1 !== lado3 && lado2 !== lado3) {
     oq = "ESCALENO"
    } else {
     oq = "ISÓSCELES"
    }
    res.json({ oq });
});

app.listen(4000, () => {
    console.log('Servidor rodando em http://localhost:4000');
});

app.post('/mercadoria', (req, res) => {
    const {preco} = req.body;
    const {nome} = req.body;
    let aumento = 0;
    if (preco < 1000) {
        aumento =  preco * 5 / 100
    } else if (preco > 1000){
        aumento = preco* 7 / 100
    }
    let precofinal = preco + aumento;
    res.json({ precofinal, preco, aumento, nome });
});

app.listen(4000, () => {
    console.log('Servidor rodando em http://localhost:4000');
});

app.post('/maiorNumero', (req, res) => {
    
    const{num1} = req.body;
    const{num2} = req.body;
    const{num3} = req.body;
    const{num4} = req.body;
    const{num5} = req.body;
    const{num6} = req.body;

    let numeros = [num1, num2, num3, num4, num5, num6];
    let maiorNumero = Math.max(...numeros);
     res.json({ maiorNumero });
});

app.listen(4000, () => {
    console.log('Servidor rodando em http://localhost:4000');
});

app.post('/ordenar', (req, res) => {

    const {num1} = req.body;
    const {num2} = req.body;
    const {num3} = req.body;
    const {num4} = req.body;
    const {num5} = req.body;
    let numeros = [num1, num2, num3, num4, num5];
    numeros.sort((a, b) => a - b);

    res.json({ numeros });
});

app.listen(4000, () => {
    console.log('Servidor rodando em http://localhost:4000');
});

app.post('/maiorMenor', (req, res) => {
    const {num1} = req.body;
    const {num2} = req.body;
    const numeros = [num1, num2];
    const maiorNumero = Math.max(...numeros);
    const menorNumero = Math.min(...numeros);

    res.json({ maiorNumero, menorNumero });
});

app.listen(4000, () => {
    console.log('Servidor rodando em http://localhost:4000');
});

app.post('/reajuste', (req, res) => {
    const { preco } = req.body;
    let rj = 0;

    if (preco >= 1500 && preco < 1750) {
        rj = preco * 15 / 100;
    } else if (preco >= 1750 && preco < 2000) {
        rj = preco * 12 / 100;
    } else if (preco >= 2000 && preco < 3000) {
        rj = preco * 9 / 100;
    } else if (preco >= 3000) {
        rj = preco * 6 / 100;
    }

    let total = preco + rj;

    res.json({ total });
});

app.listen(4000, () => {
    console.log('Servidor rodando em http://localhost:4000');
});

app.post('/Media', (req, res) => {
    const {nota1} = req.body;
    const {nota2} = req.body;
    const {nota3} = req.body;
    const {nome} = req.body;
    let media = (nota1 + nota2 + nota3) / 3;
    let situação = "";

    if (media >= 6) {
        situação = "Aprovado";
    } else if (media < 6 && media >= 4) {
        situação = "Recuperação";
    } else if (media < 4) {
        situação = "Retido";
    } 

    res.json({ nome, situação, media });
});

app.listen(4000, () => {
    console.log('Servidor rodando em http://localhost:4000');
});

app.post('/LojadeRoupa', (req, res) => {
    const {vest} = req.body;
            let resultado = "";

            switch(vest) {
                case 'Camisa':
                    resultado = "20% de desconto!";
                    break;
                case 'Bermuda':
                    resultado = "10% de desconto";
                    break;
                case 'Calça':
                    resultado = "15% de desconto";
                    break;
                default:
                    resultado = "Peça não existente";
                    break;
            }

    res.json({ resultado });
});

app.listen(4000, () => {
    console.log('Servidor rodando em http://localhost:4000');
});