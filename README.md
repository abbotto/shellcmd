# Run shell commands from NodeJS

## Package Information
[![NPM version](https://badge.fury.io/js/shellcmd.svg)](http://badge.fury.io/js/shellcmd)
[![GitHub version](https://badge.fury.io/gh/abbotto%2Fshellcmd.svg)](https://badge.fury.io/gh/abbotto%2Fshellcmd)

## Usage
	require('shellcmd')(
		'cmd 1',
		'cmd 2',
		'cmd n',
		'...',
		{ options }
	)

## Options [Object]
- `cwd` [string]
	- Current working directory of the child process
- `env` [object]
	- Environment key-value pairs
- `encoding` [string]
	- Default: 'utf8'
- `shell` [string]
	- Shell where the command will be executed
	- Default:
		- UNIX: `/bin/sh`
		- Windows: `process.env.ComSpec`
- `timeout` [number]
	- Default: 0
- `maxBuffer` [number]
	- Largest amount of data in bytes allowed on stdout or stderr.
	- If exceeded, the child process is terminated.
	- Default: 200*1024
- `killSignal` [string | integer]
	- Default: 'SIGTERM'
- `uid` [number]
	- Sets the user identity of the process.
- `gid` [number]
	- Sets the group identity of the process.
	