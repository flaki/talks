test:
	docker build -t talks . && docker run -p 8080:80 talks
