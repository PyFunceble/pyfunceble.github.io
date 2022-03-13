#!/usr/bin/env bash

set -e

hash jq

workDir="$(dirname $(realpath ${0}))"
workSpaceName="${1:-landing}"
workSpaceDir="${workDir}/desc/${workSpaceName}"


tmpDir="/tmp/pyfunceble-demos"
jsonDest="${tmpDir}/asciinema_${workSpaceName}.json"

jsonTemplate='{"title": "%%title%%","link": "%%link%%"}'
templates=()
finalJson=""

if [[ ! -d "${workSpaceDir}" ]]
then
    echo "Workspace directory not found: ${workSpaceDir}"
    exit 1
fi

for file in ${workSpaceDir}/*.tut
do
    pyfuncebleIOTitle="$(fgrep "pyfunceble-io-title" ${file} | awk -v FS=": " '{ print $2}')"

    if [[ -z "${pyfuncebleIOTitle}" ]]
    then
        pyfuncebleIOTitle="PyFunceble-Demo"
    fi

    uploadLink=$(${workDir}/upload.sh ${file})

    if [[ "${uploadLink}" =~ ^https:.* ]]
    then
        localTemplate="${jsonTemplate}"
        localTemplate="${localTemplate//%%title%%/${pyfuncebleIOTitle}}"
        localTemplate="${localTemplate//%%link%%/${uploadLink}\/iframe}"

        templates[${#templates[@]}]="${localTemplate}"
    fi
done

finalJson+="["

templatesLength="${#templates[@]}"

for index in "${!templates[@]}"
do
    if [[ ! -z ${templates[${index}]} ]]
    then
        finalJson+="${templates[${index}]}"

        if [[ "${index}" != "$((${templatesLength}-1))" ]]
        then
            finalJson+=","
        fi
    fi
done

finalJson+="]"

echo "${finalJson}" > "${jsonDest}"

cat "${jsonDest}" | jq
