#!/bin/bash

# 设置你的GitHub用户名和仓库名
GITHUB_USERNAME="your-username"
REPO_NAME="ccg-tracker"

# 创建GitHub仓库（需要手动在网页创建或使用token）
echo "请在GitHub上创建仓库: https://github.com/new"
echo "仓库名: $REPO_NAME"
echo ""
echo "然后运行以下命令:"
echo "cd $(pwd)"
echo "git remote add origin https://github.com/$GITHUB_USERNAME/$REPO_NAME.git"
echo "git branch -M main"
echo "git push -u origin main"
