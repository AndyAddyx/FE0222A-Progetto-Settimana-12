## Progetto DEMO

# INSTALLAZIONE JSON SERVER E JSON SERVER AUTH
npm install -D json-server json-server-auth

# INSTALLAZIONE ANGULAR JWT
npm install @auth0/angular-jwt

# AVVIO DI JSON SERVER 
Da eseguirsi insieme a ng s in due terminali separati: 
STRINGHE DA INSERIRE NEL FILE PACKAGE.JSON ALLA FINE DEGLI SCRIPTS DI AVVIO E DA AVVIARE DA TERMINALE CON IL COMANDO NPM RUN BACKEND
"backend": "json-server-auth --watch db.json --routes routes.json --port 4201 --delay 1000",
"full-stack": "concurrently \"npm run backend\" \"npm run start\""

# Compila progetto PER CORDOVA USA PUNTINO  
ng build --base-href /
ng build --base-href / --optimization=false
ng build --base-href .
ng build --configuration=staging --base-href /
ng build --configuration=staging --base-href .
ng build --configuration=production --base-href .

# Creare modulo
ng generate library my-module

# Creare componente in progetto
ng g c --project=my-module /component/countdown

# Creare componente in modulo
ng g c --module=login /component/logout

# Creare nuova app directory corrente
ng new appName --directory /.

# Verifica dipendenze angular da aggiornare 
ng update

# Verifica dipendenze da aggiornare
npm outdated

# Aggiornare dipendenze scadute ( richiede npm install -g npm-check-updates )
ncu -u

# Risolvere Unknown version XX of android in build modulo e app
npx browserslist --update-db