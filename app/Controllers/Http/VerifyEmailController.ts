import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class VerifyEmailController {
  public async show({ view }: HttpContextContract) {
    return view.render('verifyEmail/show');
  }
}
