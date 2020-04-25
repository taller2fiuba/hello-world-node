[![Build Status](https://travis-ci.com/taller2fiuba/hello-world-node.svg?token=QmhbESCXPe2HTNdVCFP9&branch=master)](https://travis-ci.com/taller2fiuba/hello-world-node)
[![Coverage Status](https://coveralls.io/repos/github/taller2fiuba/hello-world-node/badge.svg?branch=master)](https://coveralls.io/github/taller2fiuba/hello-world-node?branch=master)

Test CI nodejs 13 + mocha + chai  

# Para instalar

curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -  
sudo apt-get install -y nodejs  
npm install  

# Para correr la aplicacion local

docker-compose up  
entrar a http://localhost:27080/  

# Para correr los tests unitarios

npm test  

# Para arreglar automaticamente los errores de lint

npm run fix-lint  

# Para abrir la app de heroku desde la terminal

heroku login  
heroku git:remote -a node-ci-test-taller2  
heroku open  

# Para levantar el server con nodemon

`npx nodemon app.js`