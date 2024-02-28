//  Dynamically typed VS Primitive Typed

// explicit VS. Implicit coercion

const x = 42;

const explicit = String(x);             // explicit === "42"
const implicit = x + "";                // implicit === "42"

// == VS. ===

    // == coerces the types
    // == require equivalent types

    // ************* We must never use "==" because it may cause strange behaviour, So always use "===".

