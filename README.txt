1.npm 설치

npm install

2. bootRun

윈도우: gradlew.bat bootRun
리눅스: ./gradlew bootRun

3. 콘솔에 아래와 같이 나와야 실행된거임

:npmInstall
:npm_run_bundle

> bass@3.10.3 bundle H:\BASSSPA\bass
> webpack

Hash: 2491e26ebf408437c8a7
Version: webpack 1.15.0
Time: 5841ms
    Asset     Size  Chunks             Chunk Names
bundle.js  3.26 MB       0  [emitted]  index
    + 1181 hidden modules
:processResources UP-TO-DATE
:classes UP-TO-DATE
:findMainClass
:bootRun

Configuring Spring Security Core ...
... finished configuring Spring Security Core


Configuring Spring Security REST 2.0.0.M2...
... finished configuring Spring Security REST

startup:null
Grails application running at http://localhost:8181/bass in environment: development

4. 로그인 정보

id: admin
pw: adminme