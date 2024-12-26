---
title: "First draft on architecture of Sensor plugins, Reservoir plugins, and Pipes for the Open Pipe Kit"\ntagnames: 'open-pipe-kit'
author: rjstatic
path: /11-19-2014/first-draft-on-architecture-of-sensor-plugins-reservoir-plugins-and-pipes-for-the-open-pipe-kit.md
nid: 11370
uid: 174

---

![](https://publiclab.org/public/system/images/photos/000/008/017/original/icon_51835.png)

# First draft on architecture of Sensor plugins, Reservoir plugins, and Pipes for the Open Pipe Kit

by [rjstatic](../profile/rjstatic) | November 19, 2014 22:59

November 19, 2014 22:59 | Tags: [open-pipe-kit](../tag/open-pipe-kit)

----

###What I want to do

In the first phase of the Open Pipe Kit development we'll build the engine of the car while the second phase will focus on the building the dashboard for end users to interact with. By the end of phase one we should have a working engine that you can ...

- easily write new Sensor Plugins in the language of your choosing
- easily write new Reservoir Plugins for in the language of your choosing
- tell the Pipe Engine what Pipes it should run by describing Pipes in a JSON document

Our first challenge in Phase One is to think about an architecture that will best accomplish the above goals. Here's my first crack at that.

###My attempt and results
A Pipe is a process in the Pipe Engine that is configured to use a specific Sensor Plugin and a specific Reservoir plugin along with some additional data on how the Pipe should be managed (ex. frequency of polling the Sensor, what port the Sensor hardware is plugged into, which database the Reservoir Plugin should use, etc.). In other words, a Pipe takes data from a Sensor and gives it to a Reservoir at the frequency you configure.

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
		"miniumumPollFrequency": 2000, // Some sensors can't be polled quickly, this is a safety measure for Pipes that are misconfigured
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
		"miniumumSaveFrequency": 2000
	}


#### Pipe architecture
The Pipe Engine takes directions from a settings.json that describes the Pipes.

	{
		"pipes": [
			{
				"id": "738fs9fsejs9h3hdkfs88sfn",
				"name": "first pipe",
				"frequency": 5000, // in milliseconds
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
				"frequency": 60000, // in milliseconds
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



###Questions and next steps
I'm wondering how this looks to everyone. In particular, I'm interested in getting feedback from people who would be interested in writing Sensor Plugins. Does the proposed architecture look easy enough for you? Can we think of a way to make it even easier?  

###Why I'm interested
I hope that if we make a Pipe Engine that is easy enough for developers to write plugins for, when they are next building a device that polls a sensor for data and saves it somewhere, they'll take advantage of the framework because it saves them time from having to write the equivalent Sensor or Reservoir plugin in their own custom code. When a developer does write a Sensor and/or Reservoir plugin, I hope they'll share that back with the community thus help to create an extensive library of Sensor and Reservoir plugins. This could save all of from having to write a ton of glue code every time we need to get data from a sensor and save it somewhere!