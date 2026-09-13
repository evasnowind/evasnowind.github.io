---
title: "解决 Win 10 通过 Docker 安装 Pinpoint 报端口错误"
date: "2020-07-24"
categories: ["工具"]
tags: ["Docker"]
source: "http://prayerlaputa.com/?p=841"
description: "--- docker-compose up -d Creating network \"pinpoint-dockerpinpoint\" with driver \"bridge\" Creatin。"
---

按照官方文档 <https://github.com/naver/pinpoint-docker> 安装 Pinpoint 时，我遇到了端口冲突问题。

> |  |
> | --- |
> | ```  docker-compose up -d                                                                                                                                                                                             
 Creating network "pinpoint-docker_pinpoint" with driver "bridge"                                                                                                                                                   
 Creating pinpoint-docker_zoo3_1    ... done                                                                                                                                                                        
 Creating pinpoint-docker_zoo2_1    ... done                                                                                                                                                                        
 Creating pinpoint-flink-jobmanager ... done                                                                                                                                                                        
 Creating pinpoint-docker_zoo1_1     ... done                                                                                                                                                                       
 Creating pinpoint-mysql             ... done                                                                                                                                                                       
 Creating pinpoint-hbase             ... error                                                                                                                                                                      
 Creating pinpoint-flink-taskmanager ... done                                                                                                                                                                       

<!-- more -->

                                                                                                                                                                                                                    
 ERROR: for pinpoint-hbase  Cannot start service pinpoint-hbase: Ports are not available: listen tcp 0.0.0.0:2180: bind: An attempt was made to access a socket in a way forbidden by its access permissions.       
                                                                                                                                                                                                                    
 ERROR: for pinpoint-hbase  Cannot start service pinpoint-hbase: Ports are not available: listen tcp 0.0.0.0:2180: bind: An attempt was made to access a socket in a way forbidden by its access permissions.       
 Encountered errors while bringing up the project. ``` |

根据官方提示，修改 `pinpoint-docker` 目录下的 `.env` 文件，把 HBase 端口改掉即可，比如我这里改成了 `12180`。

> |  |
> | --- |
> | ``` ### Pinpoint-Hbase                                                                                                                                                                                                 
                                                                                                                                                                                                                    
 PINPOINT_HBASE_NAME=pinpoint-hbase                                                                                                                                                                                 
 #config for hbase in external docker                                                                                                                                                                               
 EXTERNAL_HBASE_PORT=12180 ``` |