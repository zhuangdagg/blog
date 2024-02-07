### MongoDB Install

[`查阅 只看官网！只看官网！只看官网！`](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-enterprise-on-ubuntu/)

> 分 `社区版本` 和 `ubuntu仓库`

- 配置文件: `/etc/mongod.conf`

  > 1. 修改 ip
  > 2. 修改 secret： authorization: enabled

- 运行、停止、重启

```bash
ps --no-headers - comm 1
sudo systemctl mongod start
```

- 要删除数据库和日志文件（确保备份你要保留的内容！）：

```bash
sudo rm -r /var/log/mongodb
sudo rm -r /var/lib/mongodb

db.createUser({
    user: "",
    pwd: "",
    roles: ["root"]
})
```
