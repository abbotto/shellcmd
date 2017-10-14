module.exports = (...commands) => {
	const lastArg = commands[commands.length - 1];
	
	const isUserSettings = lastArg === Object(lastArg)
		&& typeof lastArg !== 'function'
		&& !lastArg.length
	;
	
	const settings =
		Object.assign(
			{ shell: '/bin/bash', stdio: 'pipe' },
		isUserSettings
			? commands.pop()
			: {}
		)
	;
	
	try {
		return require('child_process')
			.execSync(
				commands.join(' && '),
				settings
			)
			.toString()
			.trim()
		;
	}
	catch (error) {
		return {
			status: error.status,
			message: error.message,
			stderr: error.stderr.toString().trim(),
			stdout: error.stdout.toString().trim()
		}
	}
};
