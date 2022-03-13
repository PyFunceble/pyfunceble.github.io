#!/usr/bin/env bash

set -e

hash asciinema
hash grep
hash sed

tmpDir="/tmp/pyfunceble-demos"

if [[ ! -f "${HOME}/.config/asciinema/install-id" ]]
then
    echo "No asciinema auth performed."
    exit 1
fi

for file in "${@}"; do
    castFile="/${tmpDir}/$(basename "${file}").cast"

    asciinema upload ${castFile} | grep 'https:' | sed 's/^\s*//'
done
