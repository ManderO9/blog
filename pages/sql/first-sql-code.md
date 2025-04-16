# SQL For Beginners: How To Implement CRUD Operations

SQL is the most popular language for manipulating data in databases.
Here is how you can get started using it and storing your data in a database.

### Creating A Database:
```sql
CREATE DATABASE MyDatabase;
```


Before you start executing your commands you need to choose which database you gonna use, for this you use the "USE DATABASE" keyword.

```sql
USE MyDatabase;
```

### Creating Tables

Tables are the structures that will contain your data, which you will use to create new data, retrieve it or delete it.
To create a table you use the syntax below:

```sql
CREATE TABLE Employees (
    ID INT PRIMARY KEY,
    Name VARCHAR(50),
    Age INT,
    Position VARCHAR(50)
);
```

The name of the table is "Employees", it has four fields: ID, Name, Age and Position, each field has a type that is specified after the name of the field.
For example the "Age" field has the type INT, which is an integer, "VARCHAR(50)" represents a string of length 50 ie : a list of characters that contain maximum 50 characters.

### Creating New Data (Inserting it into the table)

To create new data in the table you use the "INSERT INTO" keywords, followed by the fields you want to insert into, and then you specify the value of each field.

```sql
INSERT INTO Employees (ID, Name, Age, Position)
    VALUES (1, 'John Doe', 19, 'Manager');
```


### Retrieving Data (Reading it)

To read the data from a table you use the "SELECT" keyword.
you can use "SELECT *" to select all the fields of the table, or specify specific fields to return using their names.

```sql
SELECT * FROM Employees;
SELECT Name, Age FROM Employees;
```


### Updating Data
To update the data you need to use the "UPDATE" keyword.
You will use the "WHERE" keyword to specify which rows (items) you will update, based on a specific condition you will add.
For example if you want to update the age of the employee named Tony you will use the code below:

```sql
UPDATE Employees SET Age = 25 WHERE Name = 'Tony';
```

### Deleting Data
To delete data you use the "DELETE" keyword.
You add a condition using the "WHERE" keyword to specify which items you want to delete, here is an example where we delete employees who are over 65 years old:

```sql
DELETE FROM Employees WHERE Age > 65;
```

<br>
Thanks for reading, hope it was useful.