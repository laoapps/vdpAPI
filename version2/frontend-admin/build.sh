#!/bin/bash
ng build --prod
# docker-compose --build
docker-compose down
docker-compose up -d