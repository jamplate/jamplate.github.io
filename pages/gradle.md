---
layout: default

permalink: /gradle

section: Jamplate Gradle Plugin

links:
    GitHub: https://github.com/jamplate/gradle
    Home: /
    Jitpack: https://jitpack.io/#org.jamplate/gradle
---

Jamplate Gradle Plugin is the plugin to auto execute jamplate before compiling java code
and then feeding the generated java source code to the compiler. The plugin can be
customized to provide the Jamplate Processor with default memory allocations.

<hr>
<br>

## Usage

To use the jamplate gradle plugin using jitpack:

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

## Configuration

To configure the default memory allocations, you might use the `jamplate` extension as
follows:

<pre class="prettyprint">
	jamplate {
	    //here you can put all the default mappigns you want
	    memory 'Text', 'Value'
	    memory 'Object', [ "Key": "Value" ]
	    memory 'Array', [ "item1", "item2" ]
	    memory 'Dynamic', { memory -> 'Dynamic Variable' }
	    memory "Random", { (long) (Math.random() * (1L << 60)) }
	    memory "Document", { it.frame.instruction?.tree?.document() }
	}
</pre>

<br>

## Implementation

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
