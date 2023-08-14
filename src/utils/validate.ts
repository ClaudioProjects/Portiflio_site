/* eslint-disable no-useless-escape */
export interface Body {
  [key: string]: string | undefined
}

interface SingleValidation {
  message: string
}

interface lengthValidation extends SingleValidation {
  param: number
}

interface Validations {
  required?: SingleValidation
  minLength?: lengthValidation
  maxLength?: lengthValidation
  email?: SingleValidation
}

export interface BodySchema {
  [key: string]: Validations
}

export class Validate {
  body: Body
  bodySchema: BodySchema

  constructor(body: Body, bodySchema: BodySchema) {
    this.body = body
    this.bodySchema = bodySchema
  }

  getErrors() {
    const keysBodySchema: string[] = Object.keys(this.bodySchema)
    try {
      const errors: string[] = keysBodySchema.reduce((acc: string[], key) => {
        const valueKey: string | undefined = this.body[key]
        const validations: Validations = this.bodySchema[key]

        if (validations.required && !valueKey)
          acc.push(validations.required.message)

        if (validations.maxLength && valueKey) {
          if (valueKey.length > validations.maxLength.param)
            acc.push(validations.maxLength.message)
        }
        if (validations.minLength && valueKey) {
          if (valueKey.length < validations.minLength.param)
            acc.push(validations.minLength.message)
        }
        if (validations.email && valueKey) {
          if (!this.emailValidation(valueKey))
            acc.push(validations.email.message)
        }
        return acc
      }, [])

      return errors.length > 0 ? errors : null
    } catch (e) {
      console.log(e)
      return ['Erro de validação']
    }
  }

  emailValidation(value: string) {
    return value.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    )
  }
}
