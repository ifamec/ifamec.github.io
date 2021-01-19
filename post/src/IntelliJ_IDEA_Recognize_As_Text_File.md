# IntelliJ IDEA Recognize As Text File

post @ 2021-01-18

Here is the condition:
> I am trying to create a go file in IntelliJ IDEA
> and somehow all go file named "main.go" recognized as a text file

Did some research on the internet, find a solution:

Check `IntelliJ IDEA Preferences - Editor - File Types - Recognized File Types - Text` to remove `main.go` in `File name pattern`.

But "main.go" does not shows up in `File name pattern`

Solution:
1. Manually add `main.go` in to `File name pattern`
2. Remove the one just added

When removing the "main.go", IDEA pops up a window to showing that the problem is, BUT... I don't really care that 😜. Maybe have a deep look at that next time.
