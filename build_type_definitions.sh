#!/bin/bash

SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )

npx -p typescript tsc $SCRIPT_DIR/*.js --declaration --allowJs --emitDeclarationOnly --outDir $SCRIPT_DIR