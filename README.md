[![Build Status](https://travis-ci.com/edjus/node-ci.svg?token=R6a2CVP9WoqzVpSVTay8&branch=master)](https://travis-ci.com/edjus/node-ci)

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
