# 在 wsl2 使用 docker 容器

---

### wsl2、ubuntu install:

- [wsl2 install](https://learn.microsoft.com/zh-cn/windows/wsl/systemd)
- window 系统功能的一些配置、bois inter-VT, cmd-svm 虚拟内存打开；`wsl --set-default-version 2`
- wsl2 window 商店更新 wsl `wsl --install` 默认安装 ubuntu 最新版本

> 使用 wsl2 才能使用 systemd 工具

- Get-FileHash .\filename 验证 hash 值
