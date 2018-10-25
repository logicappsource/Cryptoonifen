# Cryptoonifen

Cryptoonite er et system jeg er blevet inspiret af at afprøve efter min Crypto App:
https://itunes.apple.com/dk/app/cryptoonite/id1323759403?mt=8

###################################################################################################################################################

Eksekvering af scriptet
1. npm install
2. execute command -  "testrpc" i terminal
3. yarn start i anden terminal wdw 
4. Test med https://etherscan.io/ - random pending transaction

###################################################################################################################################################
Ideen er at "Watche" en wallet adress som er ERC20 compabitle aka Ethereum based token
Hvis den eksempelvis er blevet hacket eller overvåges af andre årsager
Systemet vil alamere hvis en pending transaction i Ethereums blockchain fra den "Watchet" wallet udløsesIdeen med mit script er at overvåge en "wallet" på Ethereum Blockchain - Som eks.

Cryptoonite scriptet loader de "SENESTE PENDING TRANSACTION" fra ETH blokchain som er ERC20 compabitle

Herefter vil en alarm slå ud hvis den "Overvågnede adresse" pludselig laver en ny Transaction

Den "Receiver wallet adresss" som så skal modtage beløbet, slår en ny alarm ud hvis "Contracten" tilhøre eks e af de top 3 VOl. exhcanges

I Teorien ville det kunne lade sig gøre at "Freeze" den Receiver wallet hvor Transaction fra den "Surveliance Wallet" er på vej hen- Eks. ved at kontake exchange og Freeze den Wallet som er Receiver


For at teste scriptet! Er det vigtigt at man igeneem "etherscan.io" Hurtigt tager en random af de første pending transaction Wallet og bruger som input.(Kan tage tid at loade)
###################################################################################################################################################
