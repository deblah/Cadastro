<!DOCTYPE html>

<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Cadastro</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" 
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"> 
        <link rel="stylesheet" href="style.css"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.9.0/css/bootstrap-datepicker.min.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    </head>

    <body>
        <div class="container-fluid" id="cadastroBox">
            <form name="formulario" id="formulario" method="post" action="http://localhost/cadastro/tela.php">
                <header>
                    <h2><b>Página de Cadastro</b></h2>
                    <br />
                </header>
                <div class="row">
                    <div class="col-sm-4">
                        <h4>Login minhaUFMG</h4>
                        <input type="text" id="login" name="login" class="form-control" placeholder="Login" required/>
                        <br/>
                    </div>
                    <div class="col-sm-8">
                        <h4>CPF</h4>
                        <input type="text" id="cpf" name="cpf" oninput="transformaCPF(this)" class="form-control" placeholder="CPF" minlength="14" maxlength="14" required/>
                        <br />
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12">
                        <h4>Nome Completo</h4>
                        <input type="text" id="nome" name="nome" class="form-control" placeholder="Nome" required/>
                        <br />
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12">
                        <h4>E-mail</h4>
                        <input type="email" id="email" name="email" class="form-control" placeholder="E-mail" required/>
                        <br />
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-6">
                        <h4>Senha</h4>
                        <input type="password" id="senha" name="senha" class="form-control" placeholder="Senha" minlength="8" required/>
                        <br />
                    </div>
                    <div class="col-sm-6">
                        <h4>Confirmar Senha</h4>
                        <input type="password" id="senha1" name="senha1" class="form-control" placeholder="Senha" required/>
                        <br />
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-6">
                        <h4>Telefone</h4>
                        <input type="text" id="telefone" name="telefone" class="form-control"  placeholder="Telefone" required/>
                        <br />
                    </div>
                    <div class="col-sm-6">
                        <h4>Data de Nascimento</h4>
                        <div class="input-group date" id="datepicker">
                            <input type="text" id="dataNasc" name="dataNasc" class="form-control" placeholder="Selecione uma data" required/>
                            <span class="input-group-append">
                                <span class="input-group-text bg-white d-block">
                                    <i class="fa fa-calendar"></i>
                                </span>
                            </span>
                        </div>
                        <br />
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12">
                        <h4>Curso</h4>
                        <input id="curso" name="curso" list="cursos" placeholder="Selecione um curso" class="dropdown form-control" required/>
                            <datalist id="cursos" >    
                                <option value="Economia">
                                <option value="Administração Diurno">
                                <option value="Administração Noturno">
                                <option value="Ciência Contábeis">
                                <option value="Ciências Econômicas">
                                <option value="Controladoria e Finanças">
                                <option value="Relações Econômicas">
                            </datalist>
                        <br/>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-4">
                        <button type="submit" id="butaoCadastro" class="btn button-37" role="button">Cadastrar</button>
                    </div>
                </div>
            </form>
        </div>
        
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-alpha3/dist/js/bootstrap.bundle.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.9.0/js/bootstrap-datepicker.min.js"></script>
        <script type="text/javascript" src="script.js"></script>
        <script src="validacao.js" defer></script>
    </body>
</html>
