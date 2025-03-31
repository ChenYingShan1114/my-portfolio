# Website
https://chenyingshan1114.github.io/my-portfolio/

## Notice:
Use main as dev. version, gh-pages as prod. version. Create branch from main to add new features and debug.

### 1. make sure the local version is up-to-date
    # 切換到 main 分支（或你主要開發的分支）
    git checkout main

    # 拉取最新的遠端更新（確保你的程式碼是最新的）
    git pull origin main

### 2. update code
    # 建立一個新分支開發
    git checkout -b new-feature

### 3. test code
    # 如果是純 HTML/CSS/JS，可以直接用瀏覽器打開 index.html 測試，或者用簡單的 HTTP 伺服器來測試(http://localhost:8000)。
    python -m http.server 8000

    # 如果用 Three.js 或其他 JavaScript 框架，確保效果正常後再提交。

### 4. push new-feature from local to remote (GitHub)
    # 查看目前的修改
    git status

    # 新增變更的檔案
    git add .

    # 提交更改（請寫清楚 commit 訊息）
    git commit -m "更新了作品集頁面，新增影片播放功能"

    # 推送到 GitHub
    git push origin new-feature  # 如果是新分支

### 5. merge new-feature to main
    # 若是使用GitHub的使用者介面merge new-feature to main，需要在local端的main branch pull最新版本，或是使用git merge new-feature在local端匯入新的版本

    # 切換回 main
    git checkout main

    # 合併 new-feature (只有local端)
    git merge new-feature

    # 推送到 GitHub 
    git push origin main

### 6. check GitHub pages and local have the newest version in main branch

### 7. update from main to gh-pages
    git checkout gh-pages
    git merge main
    git push origin gh-pages

### 8. wait for few minutes until GitHub build and check the website

### 9. delete local branch
    git checkout main
    git branch -d new-feature