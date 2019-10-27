#!/bin/sh

python -m pip install lektor
lektor build --output-path public
echo muncompsci.ca > public/CNAME
rm -rf public/.lektor