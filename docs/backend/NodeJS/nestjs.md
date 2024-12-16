# Nest.JS

## @nestjs/schedule 的 cron 定义
```bash
* * * * * *
| | | | | |
| | | | | day of week 取值：0-7 （0和7都表示周日，1表示周一）
| | | | month 取值：1-12
| | | day of month 取值：1-31
| | hour 取值：0-23
| minute 取值：0-59
second (optional) 取值：0-59
```

## @nestjs/config 
> 好像永远会首先读取 `.env` 文件；