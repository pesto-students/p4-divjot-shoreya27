# Browser & Its Working

## What is a Browser?

1. Software Application which lets user access information worldwide.
2. Used to locate, fetch & display content on the internet which includes images, videos etc
3. Brings user requested information from remote server and displays it in a user-readable
   format.
4. Its a rendering machine which downloads a webpage & renders it a understandable way.

## Components of a Browser

1. User-Interface

   1. All Interactable control of a browser
   2. Includes AddressBar, Viewport for document, bookmarks etc
   3. User interacts through this

2. Rendering Engine

   1. Brain of a browser
   2. Translates/Parse the incoming html document to Human Readable format
   3. Generates DOM/CSSOM from html, css files and merge them to create a Tree

3. Networking

   1. This handles the communication part.
   2. May implement cache of retrieved documents inorder to reduce traffic

4. Javascript Interpreter

   1. Inbuilt JS interpreter responsible for embedding js code in webpage during rendering process
   2. If script is external, first script is fetched then it is parsed

5. DataStorage

   1. A storage layer created inside local machine where browser is installed
   2. responsible for storing data like cookies, caches, bookmarks

6. Browser Engine

   1. Act as a bridge between UI and Rendering Engine

7. UI Backend
   1. Used for drawing basic widgets like combo boxes.

![Browser Components Architecture](./browserComponentArchitecture.png "Browser Components Architecture")

## What happens when user enter a url in browser?

Following steps takes place in order after a url is enter by user:

1. **DNS RESOLUTION**

   1. Once a user enters a url, browser reaches nearby DNS server
   2. Get that URL converted to specific IP address
   3. Then this IP address is hit by the browser

2. **HTTP EXCHANGE**

   1. Once browser knows where to go, it starts a communication using TCP protocol
   2. This is what http exchange
   3. Way for browser to communicate its need to server and server to reply back

3. **PARSING**

   1. Building DOM & CSSOM tree
   2. Combining trees together to form render tree

4. **RENDERING**

   1. Layout
   2. Painting

5. **FINALISING**
   1. user can now browse the page

## How Rendering Engine works?

Rendering engine i a piece of software which actually parse the recieved
html file into a webpage with all display and understandable content

Following steps takes place

1. Html is read as a raw bytes
2. Then raw bytes are converted to actual character using character set defined in html.
3. Those character are meaningless to the browser until they get converted to something meaningful which are called tokens
4. Each start tag and end tag is accounted by parser, For example, a token that represents an anchor tag will have different properties from one that represents a paragraph token.

![Token](./token.png "Parsed Token")

5. But tokens are then converted to nodes which act as an independent object with specific properties

6. Then each nodes are linked in a kind of Tree data structure known as DOM.
7. The DOM establishes the parent-child relationships, adjacent sibling relationships, etc. The relationship between every node is established in this DOM object.

DOM contruction is the first thing any browser do upon receiving a html file, if file is large
then DOM creation takes time
![DOM](./dom.png "Bytes to DOM journey")

### But what about CSS?

While parsing **HTML FILE** parser may encounter the link tag for external **CSS** file, so it make a request to fetch CSS file.

Browser read CSS file in same way it does HTML file i.e through Raw Bytes which is not useful.
Therefore the same thing happen with CSS file and browser convert CSS file to CSS Tree Data Structure called CSSOM
![CSSOM](./CSSOM.png "CSS Bytes to CSSOM journey")

Browser using CSSOM determines which element will have what styling affect, thanks to **CASCADE**

## Render Tree

1. **DOM TREE** + **CSSOM TREE** = **RENDER TREE**
2. All elements combine with there specific styling combined together create a render tree.
3. Browser takes each element information from render tree, plans a layout by doing calculation the exact position and size.
4. This is called **Layout** stage, once this layout is planned then only thing left is **painting** of this layout on a browser

Finally, the elements are now rendered to the screen!

## But what happens when JS comes into play??

1. With the use of JS we can manipulate elements value or there style.
2. when parser encounters script tag, it haults DOM contruction until scripts gets executed.
3. So, If JS script tag is included in head tag then DOM is not constructed as body tag is still to be parsed which is a problem and you will not get expected results of the script
4. So **ordering** of a script matters in document

![Ordering Process](./ordering.png "JS Ordering Matters")

5. If we have included external script which is over the network, then due to delay in network which will eventually delay the DOM construction and overall rendering of a page.

## MAIN FLOW EXAMPLE

![MAJOR FLOW](./mainflow.png "MAIN FLOW")

---
