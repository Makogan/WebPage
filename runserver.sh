#!/usr/bin/env bash

export FLASK_APP=index.py && firefox http://127.0.0.1:5000/ && python -m flask run