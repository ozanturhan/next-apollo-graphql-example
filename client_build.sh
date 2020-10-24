#!/bin/bash
cd client
yarn
yarn build
yarn test:coverage
