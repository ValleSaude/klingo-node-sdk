"use strict";

module.exports = {
  "default": {
    production: 'https://api-externa.klingo.app/api',
    sandbox: 'https://api-externa.klingo.app/api'
  },
  verify: 'live',
  external: {
    register: 'externo/register',
    authenticate: 'externo/login'
  },
  patient: {
    get: 'paciente',
    healthInsurance: 'convenios'
  },
  schedule: {
    available: 'agenda/horarios',
    services: 'agenda/consultas',
    specialties: 'agenda/especialidades',
    exams: 'agenda/exames',
    procedure: 'agenda/procedimento',
    confirm: 'agenda/horario',
    request: 'requisicao',
    book: 'agenda/reservar',
    vouchers: 'vouchers',
    voucher: 'voucher',
    serviceProviders: 'agenda/profissionais'
  },
  checkin: 'checkin'
};
//# sourceMappingURL=config.js.map