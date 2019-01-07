
const p = new Promise((resolve, reject) => {
	console.log(x)
})


process.on('unhandledRejection', function (err, p) {
  throw err;
});