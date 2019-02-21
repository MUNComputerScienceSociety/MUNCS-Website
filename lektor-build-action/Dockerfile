FROM python:3

LABEL "com.github.actions.name"="Build Lektor content"
LABEL "com.github.actions.description"="Builds Lektor site content to HTML"
LABEL "com.github.actions.icon"="hard-drive"
LABEL "com.github.actions.color"="orange"

LABEL "repository"="https://github.com/MUNComputerScienceSociety/Website"
LABEL "homepage"="https://muncompsci.ca"
LABEL "maintainer"="Riley Flynn <riley@rileyflynn.me>"

ADD entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]