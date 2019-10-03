#!/usr/bin/env fish
#
# this file expects to be ran on labnet itself!
# it'll output the file you see in this dir, contents.lr, auto-magically :star:

function print_list_of_homepages
  set old_dir (pwd)

  cd $argv[1]

  for f in */
    set name (string replace "/" "" $f)
    set homepage "http://www.cs.mun.ca/~$name/"

    if curl --output /dev/null --silent --head --fail $homepage
      set common_name (string replace "cn: " "" (ldapsearch -ZZ -LLL "(uid=$name)" | grep "cn: "))
      printf '* %s - [%s](%s)\n' $common_name $name $homepage
    end
  end | sort -k3

  cd $old_dir
end

function faculty_page
  echo "title: Faculty"
  echo "---"
  echo "body:"
  echo ""
  echo "# Faculty"
  echo ""
  echo "Below is a _noncomprehensive_ list of homepages for various computer science faculty members, potentially outdated/dead links."
  echo ""

  print_list_of_homepages "/users/cs/faculty"
  print_list_of_homepages "/users/cs/staff"
  print_list_of_homepages "/users/cs/staff2"
end

faculty_page > contents.lr
