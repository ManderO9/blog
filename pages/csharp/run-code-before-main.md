


# How can you run code before Main() Method in C#

## Solution

You can do it by creating a static constructor in the Program class, code that is inside the constructor will be run before the Main() method.

```cs

public class Program
{
    static Program()
    {
        // This code is executed before calling Main() Function
        Console.WriteLine("From static constructor");
    }

    public static void Main(string[] args)
    {
        Console.WriteLine("hello world!");
    }
}

```
<br>

when you are using top level statements (.Net 6 and later) you can create a partial Program class which will automatically work and run the code inside the constructor before the top level statements. 

```cs

Console.WriteLine("hello world!");

public partial class Program
{
    static Program()
    {
        Console.WriteLine("From static constructor");
    }
}

```

<br>

You can move the class declaration to a different file from the Program.cs file and you can execute code from a different file before running the top level statements.

<br>

Thanks for reading, hope it was useful.
  
  