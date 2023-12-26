#!/bin/bash

#변수 존재 유무 확인
if [ -z "$VULTR_IP_ADDRESS" ]
then
  echo "VULTR_IP_ADDRESS not defined"
  exit 0
fi

git archive --format tar --output ./project.tar main #깃허브 프로젝트를 압축해서 tar 파일로 불러오기

echo 'Uploading project'
rsync ./project.tar root@$VULTR_IP_ADDRESS:/tmp/project.tar #파일 복사해서 vultr 리눅스 서버로 보내기
echo 'Upload complete'

echo 'Building the image'
#컨테이너 생성 명령
ssh -o StrictHostKeyChecking=no root@$VULTR_IP_ADDRESS << 'ENDSSH'
  mkdir -p /app
  rm -rf /app/* && tar -xf /tmp/project.tar -C /app
  docker compose -f /app/prod.yml up --build -d --remove-orphans
ENDSSH
echo 'Building image completed successfully'