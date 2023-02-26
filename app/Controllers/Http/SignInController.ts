import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class SignInController {
  public async show({ view }: HttpContextContract) {
    return view.render("signIn");
  }
}
