# Website
https://chenyingshan1114.github.io/my-portfolio/

## Notice:
Use main as dev. version, gh-pages as prod. version. Create branch from main to add new features and debug.

## Update web
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

## Add new collection
### 0. check paginate folder in ./_config.yml
    paginate_path: "/:collection/page:num/"

### 1. set new collection in ./_config.yml
    collections:
      <new-collection-name>:
        output: true
        permalink: /<new-collection-name>/:year/:month/:day/:title/

### 2. set new collection's post layout in ./_config.yml
    defaults:
      - scope:
          path: ""
          type: "<new-collection-name>"
        values:
          layout: article
          sharing: true
          license: true
          aside:
            toc: true
          show_edit_on_github: true
          show_subscribe: true
          pageview: true

### 3. set new collection main page path in ./_data/navigation.yml
    header:
      - titles:
          # @start locale config
          en      : &EN       <new-collection-name>
          en-GB   : *EN
          en-US   : *EN
          en-CA   : *EN
          en-AU   : *EN
          zh-Hans : &ZH_HANS  <new-collection-name>
          zh      : *ZH_HANS
          zh-CN   : *ZH_HANS
          zh-SG   : *ZH_HANS
          zh-Hant : &ZH_HANT  <new-collection-name>
          zh-TW   : *ZH_HANT
          zh-HK   : *ZH_HANT
          # @end locale config
        url: /<new-collection-name>.html

### 4. add new collection main page file ./<new-collection-name>.html

    ---
    layout: home
    # articles:
    #   excerpt_type: html
    title: "<new-collection-name> Projects"
    lang: en
    articles:
      data_source: <new-collection-name>
      article_type: BlogPosting
      show_cover: false
      show_excerpt: true
      show_readmore: true
      show_info: true
    ---

    <!-- English content -->
    <div data-lang="en">
        # Welcome to My <new-collection-name> Projects
        This is my <new-collection-name> project collection.
    </div>

    <!-- Traditional Chinese content -->
    <div data-lang="zh-TW" style="display: none;">
        # 歡迎來到<new-collection-name>專案
        這是我的<new-collection-name>專案集合。
    </div>

### 5. create new collection posts folder ./_<new-collection-name> and add new collection posts ./_<new-collection-name>/<year>-<month>-<day>-<title>.md
    ---
    title: prac 1
    tags: practice
    date: 2024-03-01
    ---
    <div data-lang="en">
    prac 1
    </div>

    <div data-lang="zh-TW" style="display: none;">
    練習1！！
    </div>

### 6. set <new-collection-name> post's tag in ./archive.html
    ...
    {%- assign all_posts = site.posts | concat: site.<new-collection-name> | sort: 'date' | reverse -%}
    ...
    {%- comment -%} Get tags from <new-collection-name> posts {%- endcomment -%}
    {%- for post in site.<new-collection-name> -%}
      {%- for tag in post.tags -%}
      {%- unless all_tags contains tag -%}
        {%- assign all_tags = all_tags | push: tag -%}
        {%- assign posts_with_tag = site.<new-collection-name> | where: "tags", tag -%}
        {%- assign tag_posts = tag_posts | push: posts_with_tag -%}
      {%- endunless -%}
      {%- endfor -%}
    {%- endfor -%}
    ...


