#!/usr/bin/env bash

set -e

workDir="$(dirname $(realpath ${0}))"
workSpaceName="${1:-landing}"
workSpaceDir="${workDir}/desc/${workSpaceName}"

if [[ ! -d "${workSpaceDir}" ]]
then
    echo "Workspace directory not found: ${workSpaceDir}"
    exit 1
fi

for file in ${workSpaceDir}/*.tut
do
    ${workDir}/replay.sh ${file}
done
