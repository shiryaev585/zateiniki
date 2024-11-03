dev:
	docker run -d -p 3000:3000 -v "/home/shiryaev585/DEV/sites/zateiniki:/app" -v /app/node_modules -v zateiniki-dev:/app/data --rm --name zateiniki zateiniki

stop:
	docker stop zateiniki