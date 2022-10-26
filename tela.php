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
                <br />
            </header>
            <div class="infos">
                <div class="row">
                    <div class="col-md-12 col-sm-12">
                        <h2>Confirme as informações:</h2><br/>
                        <h4><b>Nome:</b> <?=$_POST['nome']?></h4><br/>
                    </div>
                </div>
                <div class="row"> 
                    <div class="col-md-12 col-sm-12">
                        <h4><b>Login:</b>  <?=$_POST['login']?></h4><br/> 
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12 col-sm-12">
                        <h4><b>CPF:</b>  <?=$_POST['cpf']?></h4><br/> 
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12 col-sm-12">
                        <h4><b>Data de Nascimento:</b>  <?=$_POST['dataNasc']?></h4><br/>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12 col-sm-12">
                        <h4><b>E-mail:</b>  <?=$_POST['email']?></h4><br/>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12 col-sm-12">
                        <h4><b>Telefone:</b>  <?=$_POST['telefone']?></h4><br/>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12 col-sm-12">
                        <h4><b>Curso:</b>  <?=$_POST['curso']?></h4> <br/>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12">
                        <h4><b>Documento de identificação com foto:</b> <?=$_POST['doc']?></h4><br/>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12">
                        <h4><b>Comprovante de matrícula:</b> <?=$_POST['comp']?></h4><br/>
                    </div>
                </div>
                <div>
                    <form name="form" id="form" action="confirmacao.php" method="get">
                        <div class="row">
                            <div class="col-md-4 col-sm-12">
                                <button type="submit" id="butaoConfirma" class="btn btn-success" role="button">Confirmar</button>
                            </div>
                            <div class="col-md-4 col-sm-12">
                                <button type="submit" id="butaoVoltar" formaction="https://desenvolvimento.face.ufmg.br/cadastro" class="btn btn-danger" role="button">Voltar</button>
                            </div>
                        </div>
                    </form>
                </div>                
            </div>
        </div>
    </body>
</html>