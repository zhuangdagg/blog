# powershell 使用 conda 爬坑

## 注意点：  

> 1. 路径 `PATH` 一定不能有中文！不能有中文！不能有中文！ eg: 微信开发者工具\dll (坑我一天) **否则：`conda activate env` 报错**

> 2. `set-Executionpolicy RemoteSigned`

> 3. 使用 conda install \<package\> ， 不要使用 pip install 包

> 4. 使用管理员权限配置