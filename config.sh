#!/bin/bash
if [ -e ./.env ]
then
    source ./.env;
else
    echo ".env file not found"
    exit 0
fi