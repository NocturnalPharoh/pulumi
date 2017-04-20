// This tests that class and module properties are emitted with correctly qualified token names.

// First, define some properties:

let modprop: string = "Foo";

class C {
    public static clastaprop: number = 42;
    public claprop: boolean = true;
}

class D extends C {
    public cladprop: string = "yeah d!";
}

// Now create some references to those properties:

let a: string = modprop;
let b: number = C.clastaprop;
let c: C = <C><any>undefined;
if (c !== undefined) {
    let d: boolean = c.claprop;
    let e = {
        f: modprop,
        g: C.clastaprop,
        h: c.claprop,
    };
}

// Define a local variable at the module's top-level within a block (should not be a module member).
{
    let notprop: string = "notprop";
    let notpropcop: string = notprop;
}
