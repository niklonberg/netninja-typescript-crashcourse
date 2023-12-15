/* Better workflow with tsconfig */
/* before, we had to run: tsc *filename.ts* to convert our file to javascript */
/* then run: node *filename.js* to run the code */

/* lets setup a tsconfig file, which is basically a large JSON file for the typescript compiler that we can configure */
console.log("hello world");

/* typing tsc --init creates a tsconfig file */

/* we uncomment outDir and set it to /dist */
/* we uncomment rootDir and set it to /src */

/* we we still need to run tsc manually to compile our ts files into javascript */
/* to avoid this we can use: tsc --watch */
/* with this done every time we save a file it will recompile and output into dist folder automatically */

/* to run our files we still need to manually run node 
  to avoid this we can run "node --watch" followed by the path to file name (javascript file)
  ex: node --watch dist/lesson4/index.js
*/
