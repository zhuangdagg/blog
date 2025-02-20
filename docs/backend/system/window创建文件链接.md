# Windows 中的硬链接、目录联接(软链接)、符号链接

## 创建方式
> `cmd`:
> MKLINK /D `linkPath` `targetPath`
默认是创建文件符号链接，使用`/D` 参数则是创建目录的`符号链接`，使用 `/H` 是创建`硬链接`，使用`/J`是创建目录联结，也称为`软链接`(soft link)。

> `powershell`:
> New-Item -ItemType <链接类型> -Path <链接路径> -Target <链接目标>
> ItemType: `SymbolicLink`、`HardLink`、`Junction`
> 例： New-Item -ItemType SymbolicLink -Path "D:\link" -Target "D:\target"

## [链接的区别](https://www.cnblogs.com/czwy/p/18442267#几种链接的区别)

### 快捷方式（shortcut）

### 符合链接

### 硬链接

### 目录联结（软链接）
