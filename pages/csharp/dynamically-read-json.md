
# How can you read JSON objects dynamically in C#

## Deserialize JSON object to C# Dictionary<string, string>

You can parse any JSON string into a dynamic dictionary in C#.

Here is an example of reading an object into a string dictionary.

```cs
using System.Text.Json;

// Json string
var json = """
{
    "FirstName": "John",
    "LastName": "Doe",
    "Job": "Software Developer",
    "Company": "Hvc Inc",
    "Location": "Singapore"
}
""";

// Parse the string into a json document
var document = JsonDocument.Parse(json);

// The dictionary to store the key value pairs
var dictionary = new Dictionary<string, string>();

// For each property, read its name and value as a string
foreach(var property in document.RootElement.EnumerateObject())
{
    dictionary[property.Name] = property.Value.GetString() ?? "";
}

Console.WriteLine("FirstName: " + dictionary["FirstName"]);
Console.WriteLine("LastName: " + dictionary["LastName"]);

```


### Read properties with types other than string

You can use many methods to read different types of properties, and there are many more than the ones presented below.

```cs

dictionary[property.Name] = property.Value.GetString();
dictionary[property.Name] = property.Value.GetDateTime();
dictionary[property.Name] = property.Value.GetInt32();
dictionary[property.Name] = property.Value.GetBoolean();
dictionary[property.Name] = property.Value.GetDouble();
dictionary[property.Name] = property.Value.GetGuid();

```

You can do much more using the JsonDocument type, for example: enumerate arrays, deserialize JSON objects that are nested within each other and more.

You can read more about it in this blog by microsoft:  [How to use a JSON document object model in System.Text.Json](https://learn.microsoft.com/en-us/dotnet/standard/serialization/system-text-json/use-dom)

