---
title: Windows port forwarding
tags:
  - windows
  - networking
emoji: 🚪
---

```bat
netsh interface portproxy add v4tov4 listenport=8080 listenaddress=192.168.1.123 connectport=80 connectaddress=172.16.1.150
```