---
layout: default

permalink: /

section: Home

links:
    GitHub: https://github.com/jamplate
    Processor: /processor.html
    Guide: /guide.html
    Gradle: /gradle.html

repositories:
  - processor:
    owner: jamplate
    name: processor
  - gradle:
    owner: jamplate
    name: gradle
  - Webpage:
    owner: jamplate
    name: jamplate.github.io
---

Jamplate is a C-Style pre-processor. Although it is a C-Style, this does not mean it is
following the C standard. This pre-processor has almost the same expected behaviour as a
standard C pre-processors with some features added and some missing.

<hr>
<br>

## Examples

The following is an example file written in `jamplate` that generates 4 different files:

<pre class="prettyprint language-jamplate">
	#for $output ['firstfile', 'secondfile', 'thirdfile', 'forthfile']
	#console __OUTPUT__ '/' $output '.txt'
	#include __PROJECT__ '/myheader.jh'

	#message 'generating "' $output '.txt" ...' "\n"

	#if $output == 'firstfile'
	#message 'its the first file' "\n"
	#elif $output == 'secondfile'
	#message 'its the second file' "\n"
	#else
	#message 'its not the first nor the second file' "\n"
	#endif

	#ifndef __JAMPLATE__
	#error 'You are not using the jamplate processor!' "\n"
	#endif

	#declare $line __LINE__ + 1
	This file was auto generated from the file #{__FILE__}# on #{__DATE__}#
	at #{__TIME__}# using "Jamplate Processor #{__JAMPLATE__}#" and this 
	paragraph starts at line #{$line}#.
	#endfor
</pre>

<br>

## Usage

To apply the jamplate gradle plugin using jitpack:

<pre class="prettyprint">
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
</pre>

<br>

## Implementation

To implement the jamplate processor using jitpack:

<pre class="prettyprint">
	repositories {
		maven { url 'https://jitpack.io' }
	}

	dependencies {
		//replace `Tag` with the targeted version.
		implementation 'org.jamplate:processor:Tag'
	}
</pre>

To implement the jamplate gradle plugin using jitpack:

<pre class="prettyprint">
	repositories {
		maven { url 'https://jitpack.io' }
	}

	dependencies {
		//replace `Tag` with the targeted version.
		implementation 'org.jamplate:gradle:Tag'
	}
</pre>
