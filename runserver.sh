#!/usr/bin/env bash

export FLASK_ENV=development && export FLASK_APP=index.py && firefox --args -private-window http://127.0.0.1:5000/ && python -m flask run