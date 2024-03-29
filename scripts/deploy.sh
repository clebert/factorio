#!/bin/sh

set -e

# https://wiki.factorio.com/Modding#Basic_structure_of_a_mod

cp info.json dist

if [ -e locale ];
  then cp -r locale dist;
fi

if [ -e thumbnail.png ];
  then cp thumbnail.png dist
fi

rm -rf mods
mkdirp mods

MOD_NAME=$1_$2

zip -r -X "mods/$MOD_NAME.zip" dist

# https://wiki.factorio.com/Application_directory

MODS_DIRNAME=~/Library/Application\ Support/factorio/mods

rm -f "$MODS_DIRNAME/$1"_*.zip

cp "mods/$MOD_NAME.zip" "$MODS_DIRNAME"

echo "$MODS_DIRNAME"

ls "$MODS_DIRNAME"
