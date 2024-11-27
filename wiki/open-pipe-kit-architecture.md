---
nid: 11379
title: Open Pipe Kit architecture
path: public/static/wiki/open-pipe-kit-architecture.md
uid: 174
tagnames: 
---

# Open Pipe Kit architecture

** This is a work in progress, feel free to discuss! **

#### Concepts
A Pipe is a process in the Pipe Engine that is configured to use a specific Sensor Plugin and a specific Reservoir plugin along with some additional data on how the Pipe should be managed (ex. period of time between polling the Sensor, what port the Sensor hardware is plugged into, which database the Reservoir Plugin should use, etc.). In other words, a Pipe takes data from a Sensor and gives it to a Reservoir at the frequency you configure.

Below describes how a Sensor Plugin, a Reservoir Plugin, and a Pipe may be described for the Pipe Engine. 

#### Sensor Plugin architecture
A Sensor Plugin is a folder in the ./Sensors folder with the following structure.

	./info.json // A file with info all about this sensor
	./install.sh // A script that installs the dependencies for the sensor
	./uninstall.sh // A script that uninstalls the dependencies for the sensor
	./poll.py // A script that knows how to poll the sensor and returns a value

`info.json` example:

	{
		"id": "grove_dht"
		"name": "Grove Temperature",
		"poll": {
			"command": "python ./poll.py", 
			"parameters": [ // A description of what parameters can be fed to the poll command
				"port": {
					"type": "Integer",
					"range": [1, 4]
				}
			]
		}, 
		"measurementUnits": "Celsius",
		"minimumPollPeriod": 2000, // Some sensors can't be polled quickly, this is a safety measure for Pipes that are misconfigured
	}


#### Reservoir Plugin architecture
A Reservoir Plugin is a folder in the ./Reservoirs folder with the following structure.

	./info.json // A file with a info all about this Reservoir
	./install.sh // A script that installs the dependencies for the Reservoir
	./uninstall.sh // A script that uninstalls the dependencies for the Reservoir
	./save.py // A script that knows how to save data into a Reservoir

`info.json` example:

	{
		"id": "dat",
		"save": {
			"command": "save.py",
			"parameters": {
				"location": {
					"type": "String",
				}
			}
		}
		"minimumSavePeriod": 2000
	}


#### Pipe architecture
The Pipe Engine takes directions from a settings.json that describes the Pipes.

	{
		"pipes": [
			{
				"id": "738fs9fsejs9h3hdkfs88sfn",
				"name": "first pipe",
				"pollPeriod": 5000, // in milliseconds
				"sensor": {
					"id": "temper1",
					"parameters": [ "4" ]
				}
				"reservoir": {
					"id": "dat",
					"parameters": {
						"location": "~/dat-repo-2"
					}
				}
			},
			{
				"id": "sdfJDFI87udfdf98dfdj90sk",
				"name": "second pipe",
				"pollPeriod": 60000, // in milliseconds
				"sensor": {
					"id": "grove_dht",
					"parameters": [ "1" ]
				}
				"reservoir": {
					"id": "dat",
					"parameters": {
						"location": "~/dat-repo-2"
					}
				}
			}
		]
	}

