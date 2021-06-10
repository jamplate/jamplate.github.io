---
layout: default

permalink: /processor

section: Jamplate Processor

links:
    GitHub: https://github.com/jamplate/processor
    Releases: https://github.com/jamplate/processor/releases
    Javadoc: /javadoc/processor-0-2-3 
    Home: /
    Jitpack: https://jitpack.io/#org.jamplate/processor
---

This documentation is describing the components of Jamplate Processor. The exact specifics
is left in the Javadocs. This is just an overview.

<hr>
<br>

## Tree

The tree is the main component in the processor. The tree is a structure holding indices
of an area in the text. Additionally, the trees can be added together to perform a
skeleton of the text. Tree skeletons are completely auto sorted and with a set of trees
and without even known the indices, a whole beautiful skeleton of trees can be structured.

<br>

The following example is describing how to read a skeleton from any tree in the skeleton:

<pre class="prettyprint language-java"> 
    Tree tree = /* Any Tree in the skeleton */;

    //to get the tree to the right
    Tree right = tree.getNext();

    //to get the tree to the left
    Tree left = tree.getPrevious();

    //to get the containing tree
    Tree parent = tree.getParent();

    //to get the tree of the first contained tree
    Tree firstChild = tree.getChild();

    //to iterate over the contained trees
    for (Tree child : tree)
        ;
</pre>

<br>

The following example is describing how a set of lonely trees can be glued together:

<pre class="prettyprint language-java">
    Set&lt;Tree&gt; treeSet = /* A Set of Trees */;

    Iterator&lt;Tree&gt; iterator = treeSet.iterator();

    if (iterator.hasNext()) {
        //take any tree to be the viewpoint, ANY TREE
        Tree viewpoint = iterator.next();

        while(iterator.hasNext()) {
            Tree next = iterator.next();

            //like magic, the trees will sort themselves
            //the viewpoint might not be changed because
            //the 'offer' method will cause the parameter
            //tree to be popped from the skeleton it is
            //currently on.
            viewpoint.offer(next);
        }
    }

    //Now all the Trees in the Tree Set are glued together.
    //Any tree in the Tree Set can be the viewpoint.
</pre>

<br>

The following are the setters and getters in Tree:

<pre class="prettyprint language-java">
    Tree.getSketch(); Tree.setSketch(Sketch);
    Tree.reference(); 
    Tree.document();
    Tree.getZIndex();
</pre>

<br>

## Sketch

A sketch is an open unit that hold thoughts about some component. Sketches are an optional
way for the processor functions to mark a Tree as a specific component or to set a thought
about it. Other than depending on the Trees system, every Sketch has a Component System
that makes the Sketch able to hold and remember component sketches with strict relations
between the two. The Component System does not allow explicitly set a sketch as a
component to another sketch. Instead, the user might ask the sketch to give them a sketch
that is already set as a component. Also, the user might ask to replace the current set
component sketch with a new one. Another System in Sketch is the Sketch-Tree relationship.
Every tree must have a sketch set to it and can replace it anytime. In the other side,
Sketches might not have a tree. But, once a sketch obtained a Tree, it cannot be changed.

<br>

The following code describes how to set/get the Tree of a Sketch:

<pre class="prettyprint language-java">
    Sketch sketch = /* A Sketch */;
    Tree tree = /* A Tree */;

    //This method will return the set Tree
    //Or null if not set yet.
    sketch.getTree();

    //This method will set the Tree of the sketch
    //Or throw an exception if the sketch already 
    //has a Tree set.
    sketch.setTree(tree);
</pre>

<br>

The following code describes how to obtain a Component Sketch of a Sketch:

<pre class="prettyprint language-java">
    Sketch sketch = /* A Sketch */;
    Node.Key key = /* Component Key */;

    //This method will return the current component 
    //sketch or create a new one if the sketch does
    //not have a component with that key. 
    sketch.get(key);

    //This method will unlink the component with the 
    //key currently set in the sketch and replace it
    //with a new one.
    sketch.replace(key)
</pre>

<br>

The following are the setters and getters of the initial thoughts:

<pre class="prettyprint language-java">
    Sketch.getKind(); Sketch.setKind(String);
    Sketch.getName(); Sketch.setName(String);
    Sketch.getMeta();
</pre>
