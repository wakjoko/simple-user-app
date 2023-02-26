import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class SignUpController {
  public async show({ view }: HttpContextContract) {
    return view.render("signUp");
  }
}
