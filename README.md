[![Build Status](https://travis-ci.com/edjus/node-ci.svg?token=R6a2CVP9WoqzVpSVTay8&branch=master)](https://travis-ci.com/edjus/node-ci)

Test CI nodejs 13 + mocha + chai

heroku login
heroku git:remote -a node-ci-test-taller2

heroku container:login
heroku container:push web
heroku container:release web
heroku open
