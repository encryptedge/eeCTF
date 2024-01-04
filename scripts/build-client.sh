#!/bin/bash

cd apps/web || exit
pnpm run build:client
cd ../..
mkdir -p apps/desktop/dist
cp -r apps/web/dist/* apps/desktop/dist

