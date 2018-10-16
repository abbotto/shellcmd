module.exports = (...commands) => {
	let stdout = 0;
	
	if (parseInt(commands[commands.length - 1], 10)) {
		stdout = commands.pop();
	}

	const settingsObject = commands[commands.length - 1];

	const isUserSettings = settingsObject === Object(settingsObject)
		&& typeof settingsObject !== 'function'
		&& !settingsObject.length
	;
	
	const settings =
		Object.assign(
			{
				encoding: 'utf-8',
				shell: '/bin/bash',
				stdio: 'pipe'
			},
		isUserSettings
			? commands.pop()
			: {}
		)
	;
	
	try {
		const output = require('child_process')
			.execSync(
				commands.join(' && '),
				settings
			)
		;
		
		return settings.stdio === 'pipe'
			? output.toString().trim()
			: output
		;
	}
	catch (error) {
		if (stdout === 1) {
			return error.stdout.toString().trim();
		}
		
		return {
			status: error.status,
			message: error.message,
			stderr: error.stderr
				? error.stderr.toString().trim()
				: error
			,
			stdout: error.stdout
				? error.stdout.toString().trim()
				: error
			}
		;
	}
};
