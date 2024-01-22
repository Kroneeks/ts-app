cd ~/ts-app
npm run build:prod apiURL=https://45.90.34.230:8443

rm -rf ~/../var/www/ts_app/html
mv ~/ts-app/dist ~/../var/www/ts_app/html