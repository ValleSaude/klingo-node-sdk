/**
 * klingo
 */
const klingo = {
    xAppToken: "clivaleteste:p35WMOhMh7csoYFK", // Key da aplicação
    login: "chapp", // Login da aplicação
    password: "123", // Senha da aplicação
    env: "sandbox",
    log: __dirname + "/log/klingo.log",
    debug: false
};

/**
 * Patient
 */
const patient = {
    "login": "chapp",
    "senha": "123",
    "paciente": {
        "id_origem": "5f970e0e8839ec0017df6975",
        "nome": "Rafael da Mata Neri",
        "sexo": "M",
        "dt_nasc": "1980-01-01",
        "mae": "Mãe da Mata Neri",
        "docs": {
            "cpf": "00000000000"
        },
        "contatos": {
            "celular": "71999999999",
            "telefone": "71999999999",
            "email": "rafael.neri@gmail.com"
        },
        "endereco": {
            "cep": "40000000",
            "endereco": "Rua Da Casa",
            "numero": "999",
            "complemento": "Casa 999",
            "bairro": "Bairro",
            "cidade": "Salvador",
            "uf": "BA"
        },
        "convenio": {
            "matricula": "00000000000",
            "validade": "2030-12-20"
        }
    }
};

/**
 * exports
 */
module.exports = {
    klingo,
    patient
};
