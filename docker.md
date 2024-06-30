# install
```shell
sudo apt update
sudo apt install docker-ce docker-ce-cli containerd.io
curl -fsSL https://mirrors.aliyun.com/docker-ce/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://mirrors.aliyun.com/docker-ce/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt update
sudo apt install docker-ce docker-ce-cli containerd.io
sudo systemctl start docker
sudo systemctl enable docker
```
# one-line proxy setting
```shell
([ -f /etc/docker/daemon.json ] || mkdir -p /etc/docker) && echo '{ "registry-mirrors" : [ "https://docker.m.daocloud.io", "https://docker.jianmuhub.com",  "https://huecker.io", "https://dockerhub.timeweb.cloud", "https://dockerhub1.beget.com", "https://noohub.ru" ] }' > /etc/docker/daemon.json && sudo systemctl restart docker && sleep 1 && docker info | grep -A 6 "Registry Mirrors"·
```

# container ip
```shell
docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' <containername>
```

# 获取ip
```
docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' whoami_whoami_1
```