// Named IIFE , unnamed IIFE and write two IIFE together

(function database () {
    console.log(`db connected`)             // named IIFE
}) ();      // Semi-colon can create problem when we write two IIFE together.

( (name) => {
    console.log (`db connected two ${name}`)        // unnamed IIFE
} ) ('shiv')

