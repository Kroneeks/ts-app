cd ~/ts-app
npm run build:prod

rm -rf ~/../var/www/ts-app/html
mv ~/ts-app/dist ~/../var/www/ts-app/html