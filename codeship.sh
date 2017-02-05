#!/bin/sh
# This is some secure program that uses security.
echo $CI_BRANCH

if [ "$CI_BRANCH" == "master" ]; then
	echo "Building on master!"
	echo "Build start"
else
	echo "Building on $CI_BRANCH"
	echo "Build start"
fi