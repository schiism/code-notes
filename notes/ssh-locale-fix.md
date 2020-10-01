---
title: SSH locale fix
tags:
  - bash
  - ssh
emoji: 🇭🇰
---

Adding this to .bashrc/.zshrc fixed some localisation issues connecting to a couple hosts via ssh. aaa

```bash
export LC_ALL=en_US.UTF-8
export LANG=en_US.UTF-8
```
