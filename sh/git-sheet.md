 █▀▀ █ ▀█▀ ▄▄ █▀ █░█ █▀▀ █▀▀ ▀█▀
 █▄█ █ ░█░ ░░ ▄█ █▀█ ██▄ ██▄ ░█░


+-------------------------------++---------------------------------------------+
¦ Pushing changes to repository ¦¦ Set branch upstream to master               ¦
+-------------------------------++---------------------------------------------+
¦ $ git add -p                  ¦¦ $ git switch [your_branch_name]             ¦
¦ $ git commit -m "your changes ¦¦ $ git branch --set-upstream-to=origin/master¦
¦                               ¦¦ $ git pull                                  ¦
¦   Ref: {TASK_ID}"             ¦¦                                             ¦
¦ $ git-push                    ¦¦                                             ¦
+-------------------------------++---------------------------------------------+

| **Command**                    | **Description**                                                                                   |
|---------------------------------|---------------------------------------------------------------------------------------------------|
| `$ git reset [file]`            | **Unstages** the specified file, but keeps changes in your working directory.                      |
| `$ git reset --soft HEAD~1`     | Moves HEAD to the previous commit, **keeps changes staged** (in the index).                        |
| `$ git reset --mixed HEAD~1`    | Moves HEAD to the previous commit, **unstages changes** but keeps them in the working directory.    |
| `$ git reset --hard HEAD~1`     | Moves HEAD to the previous commit and **discards all changes** in the working directory.            |
| `$ git reset HEAD~n`            | Resets to **n commits back**, where `n` is the number of commits.                                   |
| `$ git reset --hard <commit>`   | Resets HEAD and the working directory to a **specific commit hash**, deleting any newer commits.    |
| `$ git reset --soft <commit>`   | Moves HEAD to a **specific commit** and keeps changes staged (like `--soft HEAD~1`, but with a hash).|
| `$ git reset HEAD <file>`       | Unstages **specific file(s)** from the index (similar to `git restore --staged <file>`).             |

