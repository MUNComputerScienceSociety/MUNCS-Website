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

Local Installation
----------------------

```bash
# Clone the repo
git clone https://github.com/MUNComputerScienceSociety/Website
# Enter cloned folder
cd Website

# Compile
lektor build
# To specify which folder to build to, append
lektor build --output-path folder-name

# Spin up a webserver in the outputs directory, for example:
cd /lektor/build/output/folder-name
python -m SimpleHTTPServer
# Then open http://localhost:8000 in a web browser
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
