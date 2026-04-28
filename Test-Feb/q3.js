// Q3. Internal Working of JavaScript Engine (2 Marks)
/*
 Js code 
 1st is Parsing
 Then code go for two analysis a. Lexical Analysis and b. Syntax Analysis
 In Lexical Analysis : Code is break into small pieces called token and processs is called tokenization
 In Syntax Analysis : By This Token It form AST (Abstract Syntax Tree)

 Then after it go to the interpreter name Ignition then it convert into byte code then execute but 
 if needed any optimization its goes to the turbo fan compiler then optimize it then go to  machine code then execute.

 In Execution There is a component callstack 
 Its activate first Global Execution Context : It javascript environment which is responsible to execute code .
 It has two component 1. Memory Part 2. Code Part 
 In memory part it stored variable and the stored in code part 

*/



// Explain briefly:

/*Call Stack : It is a stack where function is added when called and removed when finished.
                It follow LIFE operation . Last in first out .
                When a function is called then its pushed the function in the stack
                and function is finished then its poped the function in the stack
                

Event Loop : Event Loop is monitor callstack , If it is empty move the task from queue to stack.
             callback queues (which is responsible to manage the type of code micro, macro, tick, etc
            In Event Loop there are two loops outer loop and inner loop
            The inner loop has first priority it has two thing 1st is Next Tick and 2nd is Promise 
            The outer looop has second priority it has four thing a. Timer , b. Poll , c. Check , d. Close

*/

