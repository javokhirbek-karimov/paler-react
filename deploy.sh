#!/bin/bash

#Production
git reset
git checkout master
git pull origin master

npm i yarn -g
yarn global add serve
yarn --ignore-engines
yarn run build
pm2 start "yarn run start:prod" --name=PALER_REACT