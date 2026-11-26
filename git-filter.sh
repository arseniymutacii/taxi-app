#!/usr/bin/env bash
if [[ "$1" == "clean" ]]; then
    sed -E 's/("api_key"[[:space:]]*:[[:space:]]*")[^"]*(")/\1*****\2/g'
elif [[ "$1" == "smudge" ]]; then
    cat
fi
