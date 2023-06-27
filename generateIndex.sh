#!/bin/bash
ls -1 *.json | grep -v index.json | jq -R -s -c 'split("\n") | map(.[:-5]) | map(select(length > 0))' > index.json
