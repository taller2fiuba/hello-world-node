[![Build Status](https://travis-ci.com/taller2fiuba/hello-world-node.svg?token=QmhbESCXPe2HTNdVCFP9&branch=master)](https://travis-ci.com/taller2fiuba/hello-world-node)
[![Coverage Status](https://coveralls.io/repos/github/taller2fiuba/hello-world-node/badge.svg?branch=master)](https://coveralls.io/github/taller2fiuba/hello-world-node?branch=master)

Test CI nodejs 13 + mocha + chai  

# Para iniciar el servidor de desarrollo

```bash
$ bin/dev-compose up
```
El servidor estará aceptando conexiones en http://localhost:27080/

# Para detener el servidor de desarrollo

```bash
$ bin/dev-compose stop
```

Para detener el servidor y eliminar los contenedores asociados

```bash
$ bin/dev-compose down
```
# Para correr los tests unitarios

`bin/run-unit-tests`

# Para arreglar automaticamente los errores de lint

`bin/npm run fix-lint`

# Para abrir la app de heroku desde la terminal

heroku login  
heroku git:remote -a node-ci-test-taller2  
heroku open  

# Para instalar

```bash
curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -  
sudo apt-get install -y nodejs  
npm install  
```

