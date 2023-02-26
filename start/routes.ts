import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async ({ view }) => {
  return view.render('welcome')
})

Route.group(() => {
  Route.get('', 'SignUpController.show').as('show')
  Route.post('', 'SignUpController.submit').as('submit')
}).prefix('signup').as('signup')

Route.group(() => {
  Route.get('', 'VerifyEmailController.show').as('show')
  Route.post('', 'VerifyEmailController.verify').as('verify')

  Route.group(() => {
    Route.get('', 'InstructionsController.show').as('show')
    Route.post('', 'InstructionsController.send').as('send')
  }).prefix('instructions').as('instructions')

}).prefix('verifyEmail').as('verifyEmail')

Route.group(() => {
  Route.get('', 'SignInController.show').as('show')
  Route.post('', 'SignInController.submit').as('submit')
}).prefix('signin').as('signin')