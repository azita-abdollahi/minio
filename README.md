**What is [Minio](https://min.io/docs/minio/container/index.html)?**

	MinIO is a High Performance Object Storage released under GNU Affero General Public License v3.0. 
	It is API compatible with Amazon S3 cloud storage service.
	Use MinIO to build high performance infrastructure for machine learning, analytics and application data workloads.

**Project Setup**

	Create a new project folder with the following command

```shell
mkdir minio 
cd minio
```

​	Node.js – a JavaScript run-time scripting language

​	Expressjs – serves as a Node.js framework

​	minio – The [MinIO](https://www.npmjs.com/package/minio) JavaScript Client SDK provides high level APIs to access any Amazon S3 compatible object storage server.

​	cors – To allow Cross-Origin Resource Sharing between the backend and frontend

​	morgan – HTTP request logger middleware for node.js

​	nodemon – is a tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are 			   detected.

**Prerequisites**

	Node.js

	Docker

	Docker-compose

	minio

These are the API endpoints we need for this Rest API

| RESOURCE   | HTTP METHOD | ROUTE                   | DESCRIPTION               |
| ---------- | ----------- | ----------------------- | ------------------------- |
| fileserver | POST        | /api/file/upload/file   | upload image in minio     |
| fileserver | POST        | /api/file/download/file | download image from minio |

**docker-compose.yml**

  to see docker-compose file click [here](https://github.com/azita-abdollahi/minio/blob/master/docker-compose.yml).

Run the App

 start the docker containers

```shell
#up docker containers and build
docker compose up -d --build  
#see the docker containers  
docker compose ps  
#stop the docker containers  
docker compose down  
#following logs of docker containers  
docker compose logs -f
```

`Note`: By default backend service listens on TCP/3000 port

`Note`: By default minio service listens on TCP/9000 port

`Note`: for create minio access key and secret key first login into minio console and in left sidebar press Access Key option and create access key and put your acess key and secret key in [app_anv](https://github.com/azita-abdollahi/minio/blob/master/app_env).

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/azita-abdollahi/minio.git
