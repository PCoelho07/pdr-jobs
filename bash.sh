#!/usr/bin/env bash

while true; do
	docker exec -it rits-challenger-web php artisan schedule:run
	sleep 60;
	echo "Sleeping for 60 seconds"; 
done;

