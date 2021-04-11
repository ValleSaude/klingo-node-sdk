module.exports = {
  default: {
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
    confirm: 'agenda/horario',
	book: 'agenda/reservar',
    vouchers: 'vouchers',
    voucher: 'voucher'
  },
  checkin: 'checkin'
};
