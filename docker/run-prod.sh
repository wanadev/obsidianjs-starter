#!/bin/bash

set -e

nginx
pm2 start --name obsidian --no-daemon /obsidian/server
