#!/bin/bash
if [ -e ./.env ]
then
    source ./.env;
    exit 1
else
    echo ".env file not found"
    exit 0
fi