# NodeJS Sql server backup utility

Allows to backup sql server database to backup file (\*.bak).
Good when you offen have to backup different databaseses manually, so it steamlines the process.

Install:
```
npm install -g sql-bak
``` 

Usage:
```
sql-bak <database-name> [bak-name]
``` 
!!! **sqlcmd** command line utility should respond, if it's not please add that to your PATH variable.

Example:
```
sql-bak northwind db
``` 
