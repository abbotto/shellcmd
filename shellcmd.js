module.exports = (...commands) => {
	const userSettings = !commands[commands.length - 1].substring
		? commands.pop()
		: {}
	;
	
	const settings = Object.assign(
		{ shell: '/bin/bash', stdio: 'pipe' },
		userSettings
	);
	
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
