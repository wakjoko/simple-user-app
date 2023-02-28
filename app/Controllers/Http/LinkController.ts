import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class LinkController {
  public async show({ view }: HttpContextContract) {
    return view.render('verify/link')
  }

  public async send({ response }: HttpContextContract) {
    return response.redirect().toRoute('link.sent')
  }

  public async sent({ view }: HttpContextContract) {
    return view.render('verify/email')
  }

  public async verify({ response }: HttpContextContract) {
    return response.redirect().toRoute('dashboard')
  }
}
