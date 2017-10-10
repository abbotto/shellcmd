module.exports = (...commands) => {
	try {
		return require('child_process').execSync(
			commands.join(' && '),
			{
				shell: '/bin/bash',
				stdio: 'pipe'
			}
		).toString()
	}
	catch (error) {
		return {
			status: error.status, // Might be 127 in your example.
			message: error.message, // Holds the message you typically want.
			stderr: error.stderr.toString(), // Holds the stderr output. Use `.toString()`.
			stdout: error.stdout.toString() // Holds the stdout output. Use `.toString()`.
		}
	}
}
