// ID: io.mx61tt.basicchallenge
// frida -U -f io.mx61tt.basicchallenge -l hook.js

Java.perform(function(){

    // RootBeer
    let MainActivityKt = Java.use("io.mx61tt.basicchallenge.MainActivityKt");
    MainActivityKt["checkRoot"].implementation = function (context) {
        return false;
    };

    
    MainActivityKt["checkEmulator"].implementation = function (context) {
        return false;
    };

    MainActivityKt["checkFrida"].implementation = function (context) {
        return false;
    };

    // Alternativa para bypass do Frida detection
    // Java.use("java.lang.System").loadLibrary.implementation = function(strLib){
    //     if(strLib == "native-lib"){
    //         return;
    //     }

    // };
});
