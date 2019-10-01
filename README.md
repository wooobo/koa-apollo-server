# koa and apollo-server-koa and typeorm
- 기본 세팅
# 실행
- yarn dev
# 도커로 실행하기
```
$ docker build -t <your dockername> .
$ docker run -p 7979:8080 -d <your dockername>
$ docker ps 실행 확인
$ docker logs <container id> (로그 확인)
$ docker exec -it <container id> /bin/bash (컨테이너에 접속)
$ curl -i localhost:7979 (호출 테스트)
```