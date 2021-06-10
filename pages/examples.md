---
layout: default
permalink: /examples
section: Examples
links:
    GitHub: https://github.com/jamplate/examples
    Home: /
    Guide: /guide.html
---

This page contains example jamplate files and the output of executing them.

<hr>
<br>

## Hello World

This example will print `Hello World` to the console.

<br>

The program file `main.jamplate`:

<pre class="prettyprint language-jamplate">
    #message 'Hello World'
</pre>

Execution of `main.jamplate`:

<pre class="prettyprint lang-sh">
    C:\test> jamplate main.jamplate
    Hello World
</pre>

<br>

## 99 bottles of beer on the wall

This example is an implementation of the
[99 bottles of beer](https://esolangs.org/wiki/99_bottles_of_beer). This implementation
will print the song to the console.

<br>

The program file `main.jamplate`:

<pre class="prettyprint language-jamplate">
    #declare $i 99
    #declare $noun 'bottles'

    #while $i > 0
        #message $i ' ' $noun " of beer on the wall,\n"
        #message $i ' ' $noun " of beer.\n"
        #message "Take one down, pass it around,\n"

        #declare $i $i - 1

        #if $i == 0
            #message "No bottles of beer on the wall.\n\n"
        #else
            #if $i == 1
                #declare $noun 'bottle'
            #endif

            #message $i ' ' $noun " of beer on the wall.\n\n"
        #endif
    #endwhile

    #message "No bottles of beer on the wall,\n"
    #message "No bottles of beer.\n"
    #message "Go to the store, buy some more,\n"
    #message "99 bottles of beer on the wall.\n"
</pre>

Execution of `main.jamplate`:

<pre class="prettyprint lang-sh">
    C:\test> jamplate main.jamplate
    99 bottles of beer on the wall,
    99 bottles of beer.
    Take one down, pass it around,
    98 bottles of beer on the wall.

    98 bottles of beer on the wall,
    98 bottles of beer.
    Take one down, pass it around,
    97 bottles of beer on the wall.

    ...

    2 bottles of beer on the wall,
    2 bottles of beer.
    Take one down, pass it around,
    1 bottle of beer on the wall.

    1 bottle of beer on the wall,
    1 bottle of beer.
    Take one down, pass it around,
    No bottles of beer on the wall.

    No bottles of beer on the wall,
    No bottles of beer.
    Go to the store, buy some more,
    99 bottles of beer on the wall.
</pre>

<br>

## Quine

A program that prints its own sourcecode ([Quine](https://esolangs.org/wiki/Quine)). 
This implementation will print its sourcecode to the console.

<br>

The program file `main.jamplate`:

<pre class="prettyprint language-jamplate">
    #declare input '#message "#declare input " "\'" input "\'" "\n" input'
    #message "#declare input " "\'" input "\'" "\n" input
</pre>

<p class="alert alert-info" role="alert">
  NOTE: 
  <br>
  an escaped string will not replace escaped quote!
  <br>
  So, the string <code>'\''</code> will evaluate to <code>\'</code>
</p>

Execution of `main.jamplate`:

<pre class="prettyprint nocode">
    C:\test> jamplate main.jamplate
    #declare input '#message "#declare input " "\'" input "\'" "\n" input'
    #message "#declare input " "\'" input "\'" "\n" input
</pre>

<br>

## Fibonacci sequence

This example will take an input as an argument and print 
the [Fibonacci Sequence](https://esolangs.org/wiki/Fibonacci_sequence)
of it to the console.

<br>

A header file `src/fibonacci.jh`:

<pre class="prettyprint language-jh">
    #if $p == 0
        #declare $r 0
    #elif $p == 1
        #declare $r 1
    #else
        #for $ort [$rt]
            #declare $p $p - 1
            #include __PATH__
            #declare $rt $r

            #declare $p $p - 1
            #include __PATH__
            #declare $rt $rt + $r

            #declare $p $p + 2
            #declare $r $rt
            #declare $rt $ort
        #endfor
    #endif
</pre>

<p class="alert alert-info" role="alert">
  NOTE: 
  <br>
  For command allocates the item at the `for` frame.
  <br>
  Feature release will make allocating to the last frame much easier.
</p>

The program file `src/main.jamplate`:

<pre class="prettyprint language-jamplate">
    #declare $p $input
    #include __DIR__ '/fibonacci.jh'
    #message $r
</pre>

Execution of `src`:

<pre class="prettyprint lang-sh">
    C:\test> jamplate src $input=0
    0
    C:\test> jamplate src $input=1
    1
    C:\test> jamplate src $input=2
    1
    C:\test> jamplate src $input=3
    2
    C:\test> jamplate src $input=4
    3
    C:\test> jamplate src $input=5
    5
    C:\test> jamplate src $input=6
    8
    C:\test> jamplate src $input=7
    13
    C:\test> jamplate src $input=8
    21
    C:\test> jamplate src $input=9
    34
    C:\test> jamplate src $input=10
    55
    C:\test> jamplate src $input=11
    89
    C:\test> jamplate src $input=12
    144
</pre>

<br>

## Factorial

This example will take an input as an argument and print
the [Factorial](https://esolangs.org/wiki/Factorial)
of it to the console.

<br>

The program file `main.jamplate`:

<pre class="prettyprint language-jamplate">
    #declare $p $input - 1 
    #declare $r $input
    
    #while $p > 0
        #declare $r $r * $p
        #declare $p $p - 1
    #endwhile
    
    #message $r
</pre>

Execution of `main.jamplate`:

<pre class="prettyprint lang-sh">
    C:\test> jamplate main.jamplate $input=0
    0
    C:\test> jamplate main.jamplate $input=1
    1
    C:\test> jamplate main.jamplate $input=2
    2
    C:\test> jamplate main.jamplate $input=3
    6
    C:\test> jamplate main.jamplate $input=4
    24
    C:\test> jamplate main.jamplate $input=5
    120
    C:\test> jamplate main.jamplate $input=6
    720
    C:\test> jamplate main.jamplate $input=7
    5040
</pre>

<br>

## Truth machine 

This example is an implementation of the 
[truth machine](https://esolangs.org/wiki/Truth-machine). This implementation 
will take the input as an argument when executing the program and print the 
answer to the console.

<br>

The program file `main.jamplate`:

<pre class="prettyprint language-jamplate">
    #if $input == 0
        #message 0
    #elif $input == 1
        #while true
            #message 1
        #endwhile
    #else
        #error 'Invalid input: ' $input
    #endif
</pre>

<br>

Execution of `main.jamplate`:

<pre class="prettyprint lang-sh">
    C:\test> jamplate main.jamplate $input=0
    0
    C:\test> jamplate main.jamplate $input=1
    111111111111111111111111111111111111111111111111111111111111111111111111111111111 ...
</pre>

<br>
