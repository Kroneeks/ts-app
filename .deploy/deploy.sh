cd ~/ts-app
npm run build:prod

rm -rf ~/../var/www/ts_app/html
mv ~/ts-app/dist ~/../var/www/ts_app/html