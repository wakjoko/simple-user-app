import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class SignUpController {
  public async show({ view }: HttpContextContract) {
    return view.render('signUp')
  }

  public async submit({ response }: HttpContextContract) {
    return response.redirect().toRoute('signup.verify')
  }

  public async verify({ response }: HttpContextContract) {
    return response.redirect().toRoute('link.sent')
  }
}
