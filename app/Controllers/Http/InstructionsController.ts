import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class InstructionsController {
  public async show({ view }: HttpContextContract) {
    return view.render('verifyEmail/instructions');
  }
}
