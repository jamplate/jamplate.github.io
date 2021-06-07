# Overview
Jamplate is a C-Style pre-processor. Although it is a C-Style, this does not mean it is
following the C standard. This pre-processor has almost the same expected behaviour as a
standard C pre-processors with some features added and some missing.

# Example 
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
This file was auto generated from the file #{__FILE__}# on #{__DATE__}# at #{__TIME__}#
using "Jamplate Processor #{__JAMPLATE__}#" and this paragraph starts at line #{line}#.
#endfor
```

# Applying to a project Using Jitpack
```groovy
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

# Importing the processor
```gradle
repositories {
	maven { url 'https://jitpack.io' }
}

dependencies {
	//replace `Tag` with the targeted version.
	implementation 'org.jamplate:processor:Tag'
}
```

# Repositories
[![Customized Card](https://github-readme-stats.vercel.app/api/pin?username=jamplate&repo=processor&show_owner=1&title_color=fff&icon_color=f9f9f9&text_color=9f9f9f&bg_color=151515)](https://github.com/jamplate/processor)
[![Customized Card](https://github-readme-stats.vercel.app/api/pin?username=jamplate&repo=gradle&show_owner=1&title_color=fff&icon_color=f9f9f9&text_color=9f9f9f&bg_color=151515)](https://github.com/jamplate/gradle)
[![Customized Card](https://github-readme-stats.vercel.app/api/pin?username=jamplate&repo=jamplate.github.io&show_owner=1&title_color=fff&icon_color=f9f9f9&text_color=9f9f9f&bg_color=151515)](https://github.com/jamplate/jamplate.github.io)

