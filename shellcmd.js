module.exports = (...commands) => {
	const lastArg = commands[commands.length - 1];

	const isUserSettings = lastArg === Object(lastArg)
		&& typeof lastArg !== 'function'
		&& !lastArg.length
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
