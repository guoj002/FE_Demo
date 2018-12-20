const mysql = require('mysql');

const connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'booker1',
	password : 'SunLand123#',
	database : 'books'
});
 
connection.connect();
 
const sql = 'select * from user';
// const sql = 'select 1 + 1 as solution';
//查
connection.query(sql, (err, result, fields) => {
	if(err){ return console.log('[SELECT ERROR] - ',err.message); }

	// console.log('The solution is: ', results[0].solution);
	console.log('--------------------------SELECT----------------------------');
	console.log(result);
	console.log('------------------------------------------------------------\n\n');  
});

const  addSql = 'insert into user(id,name,accont,group) values(?,?,?,?)';
const  addSqlParams = [2, 'zhangsan', '6093555@qq.com', 2];
//增
connection.query(addSql, addSqlParams, (err, result) => {
	if(err){ return console.log('[SELECT ERROR] - ',err.message); }
 
	console.log('--------------------------INSERT----------------------------');
	// console.log('INSERT ID:',result.insertId);        
	console.log('INSERT ID:',result);        
	console.log('-----------------------------------------------------------------\n\n');  
});


// const modSql = 'update user set name = ?,age = ? where id = ?';
// const modSqlParams = ['xiaoing', 10, 1];
// //改
// connection.query(modSql, modSqlParams, (err, result) => {
// 	if(err){ return console.log('[SELECT ERROR] - ',err.message); }

// 	console.log('--------------------------UPDATE----------------------------');
// 	// console.log('UPDATE affectedRows',result.affectedRows);
// 	console.log('UPDATE affectedRows',result);
// 	console.log('-----------------------------------------------------------------\n\n');
// });

// const delSql = 'delete from user where id=4';
// //删
// connection.query(delSql, (err, result) => {
// 	if(err){ return console.log('[SELECT ERROR] - ',err.message); }
 
// 	console.log('--------------------------DELETE----------------------------');
// 	// console.log('DELETE affectedRows',result.affectedRows);
// 	console.log('DELETE affectedRows',result);
// 	console.log('-----------------------------------------------------------------\n\n');  
// });

//查
// connection.query(sql, (err, result, fields) => {
// 	if(err){ return console.log('[SELECT ERROR] - ',err.message); }

// 	// console.log('The solution is: ', results[0].solution);
// 	console.log('--------------------------SELECT----------------------------');
// 	console.log(result);
// 	console.log('------------------------------------------------------------\n\n');  
// });

connection.end();