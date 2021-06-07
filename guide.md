---
layout: default
links:
    Gradle: https://github.com/jamplate/gradle
    Source: https://github.com/jamplate/processor
    Home: index
    GitHub: https://github.com/jamplate
    Author: https://github.com/LSafer
---

## Overview

This is the jamplate syntax documentation. This documentation contains detailed 
description about the commands, data types, operators and defult variables the 
jamplate processor recognizes and can process.

<br>

### Memory Control Commands

This section is describing the memory controlling commands that does not combine with
other commands.

<br>

- `#CONSOLE <Parameter>` this command changes the default console with the results of
  evaluating the parameter given to it. Changing the console will result to the next
  printed text being printed into the file given to the command. Calling this will lead to
  closing the previous console. Opening the same console again will lead to it being
  overwritten.
    - If the command failed to open the desired console, an `Execution` error will occur.

<br>

- `#DECLARE <Address> <Parameter>` this command allocates the results of evaluating the
  parameter given to it into the heap at the address given to it. Declaring an already
  declared address will result to overwriting it. Declaring a `#define`-ed address will
  only change the value at the heap, but not the replacement.

<br>

- `#DECLARE <Address>[Parameter]* <Parameter>` this command puts the results of evaluating
  the parameter given to it to the key (pass the key sequence to access a
  nested `json object`) given to it at the `json object` in the heap at the address given
  to it. If there was no valid `json object` already declared at the address, then a
  new `json object` will be allocated. If a required nested `json object` is missing, or
  is not a `json object`, then a new object will be put at the required place.

<br>

- `#DEFINE <Address> <Parameter>` this command allocates the results of evaluating the
  parameter given to it into the heap at the address given to it. Additionally, this
  command will result to the replacement of any printed text that is equal to the name of
  the address given to it to the result of evaluating the parameter given to it. Defining
  an already defined address will result to overwriting it.

<br>

- `#INCLUDE <Parameter>` this command will search for a compilation its document's name
  equal to the result of evaluating the parameter given to it.
    - If the command couldn't find such compilation, an `Execution` error will occur.
    - Note: direct circular including will throw `StackOverflowError`.

<br>

- `#SPREAD <Parameter>` this command will evaluate the parameter given to it and parse it
  as `json object`. If the parsing was successful, the mappings in the parsed object will
  be transferred to the heap.

<br>

- `#UNDEC <Address>` this command will allocate `NULL` to the heap at the address given to
  it (making it undefined). This command will not remove the effects caused by `#define`.

<br>

- `#UNDEF <Address>` this command will allocate `NULL` to the heap at the address given to
  it (making it undefined). Additionally, stops the replacing caused by `#define` to that
  address.

<br>

### Flow Control Commands

This section contains the flow controlling commands that demand other commands and perform
scopes.

<br>

- `#CAPTURE <Address>` this command captures the printing of the instructions between it
  and its closing command, then allocate the captured text to the address given to it.
    - If this command was not closed with an `#ENDCAPTURE`, then a `Compile` error will
      occur.

<br>

- `#ENDCAPTURE` this command closes the `#CAPTURE` command.
    - If this command was not closing a `#CAPTURE` command, then a `Compile` error will
      occur.

<br>

- `#IF <Parameter>` this command executes the instructions between it, and the next branch
  command (or the closing command). if the parameter given to it evaluated to none of
  (`"false"`, `"\0"`, `"0"`, `""`).
    - If this command was not closed with an `#ENDIF`, then a `Compile` error will occur.

<br>

- `#IFDEF <Address>` this command executes the instructions between it, and the next
  branch command (or the closing command). if the address given to it was not `NULL`.
    - If this command was not closed with an `#ENDIF`, then a `Compile` error will occur.

<br>

- `#IFNDEF <Address>` this command executes the instructions between it, and the next
  branch command (or the closing command). if the address given to it was `NULL`.
    - If this command was not closed with an `#ENDIF`, then a `Compile` error will occur.

<br>

- `#ELIF <Parameter>` this command executes the instructions between it, and the next
  branch command (or the closing command). if the branch previous to it was not executed,
  and the parameter given to it evaluated to none of
  (`"false"`, `"\0"`, `"0"`, `""`).
    - If this command was not between an `#IF`, `#IFDEF` or `#IFNDEF` and an `#ENDIF`
      , then a `Compile` error will occur.

<br>

- `#ELIFDEF <Address>` this command executes the instructions between it, and the next
  branch command (or the closing command). if the branch previous to it was not executed,
  and the address given to it was not `NULL`.
    - If this command was not between an `#IF`, `#IFDEF` or `#IFNDEF` and an `#ENDIF`
      , then a `Compile` error will occur.

<br>

- `#ELIFNDEF <Address>` this command executes the instructions between it, and the next
  branch command (or the closing command). if the branch previous to it was not executed,
  and the address given to it was `NULL`.
    - If this command was not between an `#IF`, `#IFDEF` or `#IFNDEF` and an `#ENDIF`
      , then a `Compile` error will occur.

<br>

- `#ELSE` this command executes the instructions between it, and the closing command. if
  all the branches previous to it was not executed.
    - If this command was not between an `#IF`, `#IFDEF` or `#IFNDEF` and an `#ENDIF`, or
      not directly followed by an `#ENDIF`, then a `Compile` error will occur.

<br>

- `#ENDIF` this command closes the `#IF`, `#IFDEF` or `#IFNDEF` commands.
    - If this command was not closing an `#If`, `#IFDEF` or `#IFNDEF` command, then
      a `Compile` error will occur.

<br>

- `#FOR <Address> <Array>` foreach item in the given array, this command will allocate
  that item to the heap at the address given to it and executes the instructions between
  it and its closing command.
    - If this command was not closed with an `#ENDFOR`, then a `Compile` error will occur.

<br>

- `#ENDFOR` this command closes the `#FOR` command.
    - If this command was not closing a `#FOR` , then a `Compile` error will occur.

<br>

- `#WHILE <Parameter>` this command keeps executing the instructions between it and its
  closing command until the parameter given to it evaluates to false.
    - If this command was not closed with an `#ENDWHILE`, then a `Compile` error will
      occur.
    - Note: infinite loops will trigger any error and this might lead to unnoticed severe
      errors. Like, consuming a lot of RAM, or files do not get closed, or unstoppable
      processes.

<br>

- `#ENDWHILE` this command closes the `#WHILE` command.
    - If this command was not closing a `#WHILE` , then a `Compile` error will occur.

<br>

### Injection

To print text from the processor memory to the current opened console. You might use 
injection commands. The following are the available injection commands:

<br>

- `#{ <Parameter> }#` injects the parameter given to it to the console. Different from 
  commands, injections can be placed anywhere (but not clashing inside another injection
  or inside a command), and it does not suppress the line separators before nor after it.

<br>

### Debugging

The following are commands to print text to the real console:

<br>

- `#MESSAGE <Parameter>` evaluates the parameter given to it and print the evaluated text
  to the `System.out`.

<br>

- `#ERROR <Parameter>` evaluates the parameter given to it and print the evaluated text to
  the `System.error`.

<br>

### Processor Variables

These variables are managed (allocated) automatically by the processor.

<br>

- `__LINE__ : Number` this variable holds the line number exactly where it was accessed.

<br>

- `__FILE__ : Text` this variable holds the name of the file it was accessed at.

<br>

- `__PATH__ : Text` this variable holds the path of the file it was accessed at.

<br>

- `__DIR__ : Text` this variable holds the path of the directory of the file it was
  accessed at.

<br>

- `__PROJECT__ : Text` this variable holds the path of the project.

<br>

- `__OUTPUT__ : Text` this variable holds the path of the default output directory.

<br>

- `__JAMPLATE__ : Text` this variable contains the version of the jamplate processor.

<br>

- `__DATE__ : Text` this variable contains the current date at the time accessing it
  in `MMM dd yyyy` format.

<br>

- `__TIME__ : Text` this variable contains the current time at the time accessing it
  in `HH:mm:ss` format.

<br>

- `__DEFINE__ : Object` an internal variable for the processor to manage replace and
  replacements done by the `#define` command.

<br>

### Parameters

This section describes the parameters in the used command notation:

<br>

- `Parameter` applies to any text. In commands, means that the command will evaluate the
  parameter logically.

<br>

- `Address` applies to any text, In commands, means that the command will take it AS-IS.
  Also, in commands, only whitespace-free addresses will be taken.

<br>

### Data Types

Jamplate has no actual data types, since jamplate stores the data in plain text, but some
operations treat the data given to it differently depending on the text and the operation
itself.

<br>

- `Text` applies to any text.

<br>

- `Number` applies to numeric text.

<br>

- `Object` applies to valid JSON object text. When passed as an array, the resultant array
  will be an array of the keys in the object.

<br>

- `Array` applies to valid JSON array text. When passed as an object, the resultant object
  will be each item mapped to its index.

<br>

- `NULL` the null value. Evaluates to an empty string.

<br>

### Logical Context

The following syntax is to how to create/access values on a logical context (as `<Parameter>`):

<br>

- `Reference : Text` defined by writing the variable name.
    - Example `MyVariable`.
    - Note: If the variable is not declared, the variable will evaluate to its name.

<br>

- `Property Reference : Text` defined by writing the variable name followed by two square
  brackets (`[]`) with the name of the property inside the two brackets.
    - Example `MyVariable['MyProperty']`
    - Note: if a property of the variable does not exist, the property will evaluate to an empty
      string.

<br>

- `Number : Number` defined by writing its value.
    - Examples `3887`, `0b111100101111`, `0xf2f`

<br>

- `String : Text` defined by encapsulating a text inside two double-quotes (`""`).
    - Example `"My String"`

<br>

- `Escaped String : Text` defined by encapsulating a text inside two quotes (`''`).
    - Example `'My Escaped String'`

<br>

- `Array : Array` defined with two square brackets (`[]`) with its items between the two
  brackets and separated by a comma (`,`).
    - Example `[A, B, C]`.

<br>

- `Object : Object` defined with two curly braces (`{}`) with its mappings between the two
  braces and separated by a comma (`,`). Also, with the `:` separating the key and value
  of each mapping.
    - Example `{A: X, B: Y, C: Z}`.

<br>

### Operators

Just like any basic programming language, jamplate support value operators. This section
contains the supported operators:

<br>

- `!` (`NOT`) this operator negates the value after it.
    - If this operator has a value before it, then a `Compile` error will occur.

<br>

- `*` (`Multiply`) this operator multiplies the value before it with the value after it.
    - If this operator does not have a value before and after it, then a `Compiler` error
      will occur.
    - If the value before or after it is not a number, then an `Execution` error will
      occur.

<br>

- `/` (`Divide`) this operator divides the value before it by the value after it.
    - If this operator does not have a value before and after it, then a `Compiler` error
      will occur.
    - If the value before or after it is not a number, then an `Execution` error will
      occur.
    - If the value after it is `0`, then an `Execution` error will occur with the
      face (`:P`).

<br>

- `%` (`Division Remainder`) this operator evaluates to the remainder of dividing value
  before it by the value after it.
    - If this operator does not have a value before and after it, then a `Compiler` error
      will occur.
    - If the value before or after it is not a number, then an `Execution` error will
      occur.
    - If the value after it is `0`, then an `Execution` error will occur with the
      face (`:P`).

<br>

- `+` (`Add`) this operator will add the value before it with the value after it. If one
  of the two values is not a number, then the values will be concatenated.
    - If this operator does not have a value after it, then a `Compiler` error will occur.

<br>

- `-` (`Subtract`) this operator will subtract the value after it from the value before
  it. If no value before it (at compile time), then it will flip the sign of the value
  after it.
    - If this operator does not have a value after it, then a `Compiler` error will occur.
    - If the value before or after it is not a number, then an `Execution` error will
      occur.

<br>

- `<` (`less than`) this operator will evaluate to `true` if the value before it is less
  than the value after it.
    - If this operator does not have a value before and after it, then a `Compiler` error
      will occur.

<br>

- `<=` (`less than or equal`) this operator will evaluate to `true` if the value before it
  is less than or equal the value after it.
    - If this operator does not have a value before and after it, then a `Compiler` error
      will occur.

<br>

- `>` (`more than`) this operator will evaluate to `true` if the value before it is more
  than the value after it.
    - If this operator does not have a value before and after it, then a `Compiler` error
      will occur.

<br>

- `>=` (`more than or equal`) this operator will evaluate to `true` if the value before it
  is more than or equal the value after it.
    - If this operator does not have a value before and after it, then a `Compiler` error
      will occur.

<br>

- `==` (`equals`) this operator will evaluate to `true` if the value before it equals the
  value after it.
    - If this operator does not have a value before and after it, then a `Compiler` error
      will occur.

<br>

- `!=` (`not equals`) this operator will evaluate to `true` if the value before it does
  not equal the value after it.
    - If this operator does not have a value before and after it, then a `Compiler` error
      will occur.

<br>

- `&&` (`logical and`) this operator will evaluate to `true` if the value before it and
  after it both evaluated to `true`.
    - If this operator does not have a value before and after it, then a `Compiler` error
      will occur.

<br>

- `||` (`logical or`) this operator will evaluate to `true` if the value before it, or the
  value after it either evaluated to true.
