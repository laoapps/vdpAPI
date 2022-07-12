#!/bin/bash
ng build
# docker-compose --build
docker-compose down
docker-compose up -d