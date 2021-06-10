---
layout: default

permalink: /executable

section: Jamplate Executable

links:
    GitHub: https://github.com/jamplate/executable
    Releases: https://github.com/jamplate/executable/releases
    Home: /
    Download: https://github.com/jamplate/executable/releases/download/0.2.3/jamplate.zip
---

Jamplate Executable is a jar executable that executes Jamplate Processor.

<hr>
<br>

## Portable Installation

The steps to obtain a portable executable:

<br>

1. Download the executable `jamplate.zip` file.

<br>

2. Extract `jamplate.zip` to the directory you want to use the jamplate executable on.

<br>

## Windows System Installation

The steps to install the jamplate executable to the whole System:

<br>

1. Download the executable `jamplate.zip` file.

<br>

2. Extract `jamplate.zip` to the directory of your choice, for example `C:/Jamplate/0-2-3/`.

<br>

3. Modify to the `PATH` environment variable the path of the directory
   where the `jamplate.zip` file was extracted to.

<br>

## Usage

The ways to execute the jamplate executable:

<br>

- By directly executing `jamplate.jar` using the `java` executable:

<pre class="prettyprint lang-sh">
    java -jar jamplate.jar &lt;Input&gt; &lt;Options&gt;
</pre>

<br>

- By executing `jamplate.bat` which automatically executes the `jamplate.jar` using the `java` executable:

<pre class="prettyprint lang-sh">
    jamplate &lt;Input&gt; &lt;Options&gt;
</pre>

<br>

## Parameters

These are the descriptions of the parameters given to the jamplate executable:

<br>

- `<Input>` the name of the input file or directory.

<br>

- `<Options>` the options to run the executable with:
    <br><br>
    - `-o <Dir>` an option specifying the output directory. (if not specified it will be `output`)
    <br><br>
    - `<Key>=<Value>` an option specifying a mapping in the default memory 
    mapping `<Value>` to `<Key>`.

<br>

## Examples

The following are command examples:

<br>

This example will process the files in the directory `input` with the output
directory being `output`.

<pre class="prettyprint lang-sh">
    java -jar jamplate.jar input
</pre>
<pre class="prettyprint lang-sh">
    jamplate input
</pre>

<br>

This example will process the files in the directory `src` with the output 
directory being `build` and with the mappings: `Author=Sulaiman`, `Version=Alpha`.

<pre class="prettyprint lang-sh">
    java -jar jamplate.jar src -o build Author=Sulaiman Version=Alpha
</pre>
<pre class="prettyprint lang-sh">
    jamplate src -o build Author=Sulaiman Version=Alpha
</pre>
