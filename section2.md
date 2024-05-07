//Fundamental of TS
<br>
<b>JavaScript primitive types:</b> number, string, boolean, null, undefined, object
<br>
<b>TypeScript extends JS:</b> any, unknown, never, enum, tuple.
<br>
Type "any": avoid if possible.
<br>
Arrays:<br>
let num:number[] = [1,2,3,4];
<br>
<b>Tuple:</b> fixed length array.
<br>
let user:[number, string] = [1, 'Rupam']
<br>
<b>Enum:</b><br>
enum Size {Small='s', Medium='m', Large='l'}<br>
enum Size {Small=1, Medium, Large} //compiler will automatically set the values of other enums
<br> "const" with enum generates more optimized code in the js form.<br>
<br><br>
<b>Functions:</b>
"noUnusedParameter":true   in tsconfig.json file to make it more strict.
<br>
"noImplicitReturn":true   in tsconfig.json file to make reminder if we forgot to return properly function.<br>
"noUnusedLocals": true,    in tsconfig.json file to make sure there is no unused variables.<br>

