
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href=" https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css">
    <link rel="stylesheet" href="formstyle.css">
    <title>Contacts</title>
</head>
<body>
<!--Section: Contact v.2-->
<section class="mb-4">

    <!--Section heading-->
<h2 id="h2titre" class="text-center shadow my-5 bg-dark text-white m-1 p-5">Formulaire de contact </h2>
    <!--Section description-->
    <p class="text-center w-responsive mx-auto mb-5">Si vous avez des questions ou des suggestions à nos services, veillez nous faire parvenir votre avis </p>

    <div class="container">

        <!--Grid column-->
        <div class="">
            <form id="contact-form" class="bg-light  center  text-center " name="contact-form" action="formulaire.php" method="POST">

                <!--Grid row-->
                <div class="row">

                    <!--Grid column-->
                    <div class="col-md-6">
                        <div class="md-form mb-0">
                            <label for="name" class="">Votre nom</label>
                            <input type="text" id="name" name="name" class="form-control">
                        </div>
                    </div>
                    <!--Grid column-->

                    <!--Grid column-->
                    <div class="col-md-6">
                        <div class="md-form mb-0">
                            <label for="email" class="">votre email</label>
                            <input type="text" id="email" name="email" class="form-control">
                        </div>
                    </div>
                    <!--Grid column-->

                </div>
                <!--Grid row-->

                <!--Grid row-->
                <div class="row">
                    <div class="col-md-12">
                        <div class="md-form mb-0">
                            <label for="subject" class="">Subjet</label>
                            <input type="text" id="subject" name="subject" class="form-control">
                        </div>
                    </div>
                </div>
                <!--Grid row-->

                <!--Grid row-->
                <div class="row">

                    <!--Grid column-->
                    <div class="col-md-12">

                        <div class="md-form">
                            <label for="message">Votre message</label>
                            <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
                        </div>

                    </div>
                </div>
                <!--Grid row-->

            </form>

            <div class="text-center text-md-left my-2">
                <a class="btn btn-primary" onclick="document.getElementById('contact-form').submit();">Envoyer</a>
            </div>
            <div class="status"></div>
        </div>
     

    </div>

</section>
<button id="btnretour" class="text-center"><a href="http://localhost/JavaScript-Jquery/"><i class="fa-solid fa-hand-point-left"></i></a></button>
<!--Section: Contact v.2-->
<script src="./validationjs.js"></script>
</body>
</html>