# Overview
Jamplate is a C-Style pre-processor. Although it is a C-Style, this does not mean it is
following the C standard. This pre-processor has almost the same expected behaviour as a
standard C pre-processors with some features added and some missing.
You can read the guides at [Guide](guide)


# Examples


- The following is an example file written in `jamplate` that geneartes 4 different files:

	```c++
	#for output ['firstfile', 'secondfile', 'thirdfile', 'forthfile']
	#console __OUTPUT__ '/' output '.txt'
	#include __PROJECT__ '/myheader.jh'

	#message 'generating "' output '.txt" ...' "\n"

	#if output == 'firstfile'
	#message 'its the first file' "\n"
	#elif output == 'secondfile'
	#message 'its the second file' "\n"
	#else
	#message 'its not the first nor the second file' "\n"
	#endif

	#ifndef __JAMPLATE__
	#error 'You are not using the jamplate processor!' "\n"
	#endif

	#declare line __LINE__ + 1
	This file was auto generated from the file #{__FILE__}# 
	on #{__DATE__}# at #{__TIME__}# using "Jamplate 
	Processor #{__JAMPLATE__}#" and this paragraph starts 
	at line #{line}#.
	#endfor
	```


# Usage


- To apply the jamplate gradle plugin using jitpack:

	```gradle
	apply plugin: 'java'
	apply plugin: 'jamplate'

	buildscript() {
		repositories {
			maven {
				url 'https://jitpack.io'
			}
		}

		dependencies {
			//replace 'TAG' with the desired version
			classpath 'org.jamplate:gradle:TAG'
		}
	}
	```


# Implementation


- To implement the jamplate processor using jitpack:

	```gradle
	repositories {
		maven { url 'https://jitpack.io' }
	}

	dependencies {
		//replace `Tag` with the targeted version.
		implementation 'org.jamplate:processor:Tag'
	}
	```


- To implement the jamplate gradle plugin using jitpack:

	```gradle
	repositories {
		maven { url 'https://jitpack.io' }
	}

	dependencies {
		//replace `Tag` with the targeted version.
		implementation 'org.jamplate:gradle:Tag'
	}
	```


# Repositories


- ### The Processor:

	[![Customized Card](https://github-readme-stats.vercel.app/api/pin?username=jamplate&repo=processor&show_owner=1)](https://github.com/jamplate/processor)


- ### The Gradle Plugin:

	[![Customized Card](https://github-readme-stats.vercel.app/api/pin?username=jamplate&repo=gradle&show_owner=1)](https://github.com/jamplate/gradle)

- ### The Website:

	[![Customized Card](https://github-readme-stats.vercel.app/api/pin?username=jamplate&repo=jamplate.github.io&show_owner=1)](https://github.com/jamplate/jamplate.github.io)


### Licence

    Copyright 2021 Cufy

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
