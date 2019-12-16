#!/bin/bash
WORKINGDIR=htdocs

ci/publish.sh "$WORKINGDIR" ~/.ssh/id_rsa ~/.ssh/known_hosts
