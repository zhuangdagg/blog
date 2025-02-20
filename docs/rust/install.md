```bash
error: linker `cc` not found
  |
  = note: No such file or directory (os error 2)
```

> `sudo apt-get install build-essential` > `build-essential`,它包含了 GNU 编辑器集合，GNU 调试器，和其他编译软件所必需的开发库和工具。


## 修改 `cargo` 依赖安装镜像
:::code-group
```toml [config.toml]
# $HOME/.cargo/config.toml ($CARGO_HOME 下)

[source.crates-io]
replace-with = "rsproxy"

[registries]
# 科大镜像
ustc = { index = "https://mirrors.ustc.edu.cn/crates.io-index/" }
# 字节跳动
rsproxy = { index = "https://rsproxy.cn/crates.io-index/" }

[source.ustc]
registry = "sparse+https://mirrors.ustc.edu.cn/crates.io-index/"

[source.rsproxy]
registry = "https://rsproxy.cn/crates.io-index"

# 稀疏索引，要求 cargo >= 1.68
[source.rsproxy-sparse]
registry = "sparse+https://rsproxy.cn/index/"

[net]
git-fetch-with-cli = true
```
:::code-group
