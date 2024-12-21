
# How can you override the username and email when committing in your local git repository

## For one specific repo

This is how you can change the email and username of the user when you are committing in a local repository.
- open the folder where your repo exists in a shell.
-  run the next commands:

```sh
git config --local user.email "YOUR_EMAIL"
git config --local user.name "YOUR_USERNAME"
```
## Globally set username and email

If you want to set the username and email globally for all repos on your machine when you want to commit, you can use the next commands.

```sh
git config --global user.email "YOUR_EMAIL"
git config --global user.name "YOUR_USERNAME"
```

<br>

Thanks for reading, hope it was useful.
  
  