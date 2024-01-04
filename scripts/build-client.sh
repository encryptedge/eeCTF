#!/bin/bash

cd apps/web || exit
pnpm run build
cd ../..
mkdir -p apps/desktop/src
cp -r apps/web/dist/* apps/desktop/src

