# Run shell commands from NodeJS

## Package Information
[![NPM version](https://badge.fury.io/js/shellcmd.svg)](http://badge.fury.io/js/shellcmd)
[![GitHub version](https://badge.fury.io/gh/abbotto%2Fshellcmd.svg)](https://badge.fury.io/gh/abbotto%2Fshellcmd)

## Usage
	require('shellcmd')(
		'cmd 1',
		'cmd 2',
		'cmd n',
		'...'
	)

## Output

	{
		error,
		stdout,
		stderr
	}
	