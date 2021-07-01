function receivesAFunction(callback){
    callback()
}

function returnsANamedFunction() {
    return forNamedFunction
}
function forNamedFunction(){}

function returnsAnAnonymousFunction() {
    return () => {}
}