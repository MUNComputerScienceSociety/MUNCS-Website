from __future__ import print_function
import json
import os
import sys
import datetime

if sys.version_info[0] < 3:
    input = raw_input

with open("databags/posts.json") as f:
    posts = json.load(f)

diff_branch = input("Are you currently in a branch other than master? [y/N]: ")
if diff_branch.lower() != "y":
    print("You must write your blog posts on a branch other than master.")
    print("To create a new branch from the command-line, run git checkout -b <branch name>, where <branch name> is replaced with a unique name for your branch.")
    sys.exit(1)

post_title = input("Title for post: ")
author = input("Your name: ")
folder = post_title

for char in ["/", "\\", ":", "?", "<", ">", "|"]:
    folder = folder.replace(char, "")

now = datetime.datetime.now()
month = now.strftime("%B %Y")

post_dir = os.path.join("content", "blog", folder)
os.mkdir(post_dir)

post_obj = {"title": post_title, "author": author, "folder": folder}
contents_file = os.path.join(post_dir, "contents.lr")
with open(contents_file, "w") as f:
    f.writelines([
        "title: {}\n".format(post_title),
        "---\n",
        "body:\n",
        "\n",
        "# {}\n".format(post_title),
        "By {}\n".format(author)
    ])

for posts_month in posts["months"]:
    if posts_month != month:
        continue
    else:
        posts_month["posts"].insert(0, post_obj)
else:
    posts["months"].insert(0, {"month": month, "posts": [post_obj]})

with open("databags/posts.json", "w") as f:
    json.dump(posts, f, indent=4)

print("All done! You can now write your blog post in {} and push it to git when you are done.".format(contents_file))
