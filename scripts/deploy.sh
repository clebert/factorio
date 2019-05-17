#!/bin/sh

set -e

# https://wiki.factorio.com/Modding#Basic_structure_of_a_mod

cp ../$1/info.json ../$1/dist
cp -r ../$1/locale ../$1/dist
cp ../$1/thumbnail.png ../$1/dist

# https://wiki.factorio.com/Application_directory

rm -f ~/Library/Application\ Support/factorio/mods/$1_*.zip

zip -r -X ~/Library/Application\ Support/factorio/mods/$1_$2.zip dist

echo ~/Library/Application\ Support/factorio/mods

ls ~/Library/Application\ Support/factorio/mods
