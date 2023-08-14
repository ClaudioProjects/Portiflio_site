import { BodySchema } from './validate'

export const schemaFormEmail: BodySchema = {
  name: {
    required: {
      message: 'O campo NOME não pode estar vazio',
    },
    minLength: {
      message: 'O campo NOME deve ter ao menos 3 caracateres',
      param: 3,
    },

    maxLength: {
      message: 'O campo NOME deve ter no maximo 60 caracateres',
      param: 60,
    },
  },

  email: {
    required: {
      message: 'O campo EMAIL não pode estar vazio',
    },
    email: {
      message: 'O campo EMAIL é invalido',
    },
  },

  message: {
    required: {
      message: 'O campo MENSAGEM não pode estar vazio',
    },

    maxLength: {
      message: 'O campo NOME deve ter no maximo 600 caracateres',
      param: 600,
    },
  },
}
