run:
	docker run -d -p 3000:3000 --rm --name zateiniki zateiniki

dev:
	docker run -d -p 3000:3000 -v "/home/shiryaev585/DEV/pet-projects/Vue/zateiniki:/app" -v /app/node_modules -v zateiniki-dev:/app/data --rm --name zateiniki zateiniki

stop:
	docker stop zateiniki