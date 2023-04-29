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
    filename="$(basename "${file}")"
    uploadLog="${tmpDir}/${filename}.upload.log"
    castFile="${tmpDir}/${filename}.cast"

    rm -f "${uploadLog}"

    asciinema upload ${castFile} &> "${uploadLog}"

    grep 'https:' "${uploadLog}" | sed 's/^\s*//'
done
