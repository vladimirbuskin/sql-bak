let fs = require('fs');
let path = require('path');


function _backup(db, bak, cb)
{
  bak = bak || (db + '.bak')
  bak = path.isAbsolute(bak) ? bak : path.join(process.cwd(), bak);
  const { exec } = require('child_process');
  let url = [
    'sqlcmd',
    '-v',
    'dbname="'+db+'"',
    'bak="'+bak+'"',
    '-E -i ./backup.sql'
  ];

  exec(url.join(' '), function (err, stdout, stderr) {
    console.log(stdout);
    if (cb) cb.apply(this, arguments);                          
  });

}

function backup()
{
  let argv = process.argv;
  if (argv.length == 2 || argv.length > 4)
  {
    console.log('sql-bak <database-name> [bak-name]');
  }
  else
  {
    let dbName = argv[2];
    let bakName = argv[3];
      _backup(dbName, bakName)
  }



}


module.exports = {
  backup: backup
};