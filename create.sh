#!/bin/bash

# 检查是否提供了参数
if [ $# -ne 1 ]; then
  echo "请提供一个文件夹名作为参数"
  exit 1
fi

# 从命令行参数中获取文件夹名
folder_name="$1"

# 创建文件夹
if mkdir "$(pwd)/$folder_name"; then
  echo "文件夹 '$(pwd)/$folder_name' 创建成功"

  # 创建 index.md 和 index.ts 文件
  touch "$(pwd)/$folder_name/index.md" "$(pwd)/$folder_name/index.ts"
  echo "index.md 和 index.ts 文件已创建在 '$folder_name' 文件夹中"
else
  echo "创建文件夹 '$(pwd)/$folder_name' 失败"
  exit 1
fi
