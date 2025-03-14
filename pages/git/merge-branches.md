
# How do you merge a branch into another in Git

Say you have two branches: 
- main
- feature-branch

To merge feature-branch into main you do the following:

```sh
git checkout main
git merge feature-branch
```
## Explanation
So what you do is:
- you checkout the branch you want to merge into.

```sh
git checkout main
```

- then you merge the branch that you want to get the changes from.

```sh
git merge feature-branch
```

which will take all the commits in feature-branch and add them to main.

<br>
Thanks for reading, hope it was useful.
  