MUN Computer Science Society Website
============================

**View it live here: [https://muncompsci.ca](https://muncompsci.ca)**

The content for the site lives in the `content/` folder. Fork this repo and send us (via a pull request)

- New tutorials and resources
- Spelling fixes
- Updated course information
- Anything you can think of

Dependencies
----------------

Install [Lektor](https://www.getlektor.com/) before proceeding.

```bash
curl -sf https://www.getlektor.com/install.sh | sh
```

Local Installation
----------------------

```bash
# Clone the repo
git clone https://github.com/MUNComputerScienceSociety/Website
# Enter cloned folder
cd Website

# Launch a Lektor server to auto-compile and host the site
lektor server

# Now go to http://localhost:5000 in a web browser
```

Auto-updates
------------

Changes made to this repository are reflected automatically on the site live. **Do not rewrite the history of this repository** or else you will be cuddled by [the most adorable of kittens](https://www.youtube.com/watch?v=INscMGmhmX4). But seriously, don't mess with time.

Adding new course notes
-----------------------

To add notes (descriptions, resources, past assignments, etc.) for courses:

1. Create a new folder under `content/resources/courses/` named as the course number (for example, `content/resources/courses/1001/`).
2. Create a new empty text file in the new folder called `contents.lr`.
3. You can structure this file like so:

```text
title: COMP <course_number>
---
body:

# Content
```

You can replace `<course_number>` with the course number you'd like to add notes for.
And you can add content below `body:` in Markdown.

To learn more about how Lektor structures content, see [this screencast](https://www.youtube.com/watch?v=lTWTCwuPdrU)
and check out the [Lektor documentation](https://www.getlektor.com/docs/).

Writing a new blog post
-----------------------

To write a new blog post:

1. Fork and clone the repo (or switch to another branch if you are a member of this GitHub organization)
2. Run `python scripts/new_post.py` and answer all of the questions.
    Example:
    ```text
    $ python scripts\new_post.py
    Are you currently in a branch other than master, or using a forked repo? [y/N]: y
    Title for post: My new post
    Your name: Riley Flynn
    All done! You can now write your blog post in C:\Users\nint8\Development\Website\content\blog\My new post\contents.lr and push it to git when you are done.
    ```
3. Write your post in the specified file using markdown
4. Commit your changes and submit a pull request

If your post looks good and we have no changes we want made, your post should be up on the site shortly after an exec reviews it.
