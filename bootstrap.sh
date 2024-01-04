#!/bin/bash

cd packages/deployer-url || exit
node entrypoint.js "$@"