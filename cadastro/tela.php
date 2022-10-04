<!DOCTYPE html>

<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" 
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"> 
        <link rel="stylesheet" href="style.css"/>
        <title>Informações</title>

    </head>
    <body>
        <div class="container-fluid" id="cadastroBox">
            <header>
                <h2><b>Informações</b></h2>
                <br />
            </header>
            <div class="infos">
                <div class="row">
                    <div class="col-sm-12">
                        <h4><b>Nome:</b> <?=$_POST['nome']?></h4>
                        
                    </div>
                </div>
                <div class="row"> 
                    <div class="col-sm-12">
                        <h4><b>Login:</b>  <?=$_POST['login']?></h4> 
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12">
                        <h4><b>CPF:</b>  <?=$_POST['cpf']?></h4> 
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12">
                        <h4><b>Data de Nascimento:</b>  <?=$_POST['dataNasc']?></h4>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12">
                        <h4><b>E-mail:</b>  <?=$_POST['email']?></h4> 
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12">
                        <h4><b>Telefone:</b>  <?=$_POST['telefone']?></h4> 
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12">
                        <h4><b>Curso:</b>  <?=$_POST['curso']?></h4> 
                    </div>
                </div>            
            </div>
        </div>
    </body>
</html>