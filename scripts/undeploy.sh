#!/bin/sh

set -e

# https://wiki.factorio.com/Application_directory

MODS_DIRNAME=~/Library/Application\ Support/factorio/mods

rm -f "$MODS_DIRNAME/$1"_*.zip

echo "$MODS_DIRNAME"

ls "$MODS_DIRNAME"
