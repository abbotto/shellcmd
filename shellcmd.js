module.exports = (...commands) => {
	return require('child_process').exec(
		commands.join(' && '),
		(error, stdout, stderr) => {
			console.log(stderr
				? stderr
				: stdout
			);
			
			return {
				error,
				stdout,
				stderr
			}
		}
	)
}
