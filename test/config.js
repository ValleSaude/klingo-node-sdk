const moment = require('moment');
/**
 * klingo
 */
const klingo = {
  xAppToken: 'clivaleteste:p35WMOhMh7csoYFK', // Key da aplicação
  login: 'chapp', // Login da aplicação
  password: '123', // Senha da aplicação
  env: 'sandbox',
  log: __dirname + '/log/klingo.log',
  debug: true
};

/**
 * Patient
 */
const patient = {
  login: 'chapp',
  senha: '123',
  paciente: {
    id_origem: '5f970e0e8839ec0017df6975',
    nome: 'Rafael da Mata Neri',
    sexo: 'M',
    dt_nasc: '1980-01-01',
    mae: 'Mãe da Mata Neri',
    docs: {
      cpf: '00000000000'
    },
    contatos: {
      celular: '71999999999',
      telefone: '71999999999',
      email: 'rafael.neri@gmail.com'
    },
    endereco: {
      cep: '40000000',
      endereco: 'Rua Da Casa',
      numero: '999',
      complemento: 'Casa 999',
      bairro: 'Bairro',
      cidade: 'Salvador',
      uf: 'BA'
    },
    convenio: {
      matricula: '00000000000',
      validade: '2030-12-20'
    }
  }
};

/**
 * Patient Wrong
 */
const patient_wrong = {
  login: 'chapp',
  senha: '123',
  paciente: {
    id_origem: '5f970e0e8839ec0017df6975',
    nome: 'Rafael da Mata Neri',
    sexo: 'M',
    dt_nasc: '1980-01-01',
    mae: 'Mãe da Mata Neri',
    contatos: {
      email: 'rafael.neri@gmail.com'
    },
    endereco: {
      endereco: 'Rua Da Casa',
      numero: '999',
      complemento: 'Casa 999',
      bairro: 'Bairro',
      cidade: 'Salvador',
      uf: 'BA'
    }
  }
};

/**
 * Patient Id
 */
const patient_id = {
  id: 8
};

/**
 * Patient Id Wrong
 */
const patient_id_wrong = {
  id: -8
};

/**
 * Patient Update
 */
const patient_update = {
  nome: 'Rafael da Mata Neri',
  sexo: 'M',
  dt_nasc: '1983-03-01'
};

/**
 * Schedule Available
 */
const available = {
  especialidade: 225120,
  inicio: moment().format('YYYY-MM-DD'),
  fim: moment().format('YYYY-MM-DD')
};

/**
 * Schedule Confirm
 */
const confirm = {
  procedimento: 416,
  id: '2020-11-04|35|151|2|15:10'
};

/**
 * exports
 */
module.exports = {
  klingo,
  patient,
  patient_wrong,
  patient_id,
  patient_id_wrong,
  patient_update,
  available,
  confirm
};
