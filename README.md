# woiiohome
浏览器起始页

# manifest.json解释
## permissions
权限
<all_urls> —— 匹配以允许方案开头的任何URL（ http：， https：，文件：， ftp：或 chrome -extension：）
tabs —— 扩展程序可以访问Tab包括chrome.tabs和chrome.windows在内的多个API使用的对象的特权字段。在许多情况下，您的扩展程序无需声明"tabs"使用这些API的权限。
history —— 扩展程序访问chrome.history API。
unlimitedStorage —— 提供无限的配额来存储HTML5客户端数据，例如数据库和本地存储文件。没有此许可，扩展程序或应用程序仅限于5 MB本地存储。
contextMenus —— 扩展程序访问chrome.contextMenus API。
storage —— 扩展程序可以访问chrome.storage API。
topSites —— 扩展程序访问chrome.topSites API。
activeTab —— 请求根据activeTab规范授予扩展名权限。
webRequest —— 扩展程序可以访问chrome.webRequest API
webRequestBlocking —— 扩展程序以阻止方式使用chrome.webRequest API，则为必填。
## browser_action
使用browser_action 可以在Google Chrome 浏览器主窗口地址栏右侧的工具栏中添加图标
## chrome_url_overrides
可以让开发者定制页面:bookmarks - 收藏夹，history - 历史记录，newtab - 新 tab 页
## content_security_policy
解决因为拒绝加载脚本，因为它违反了以下内容安全策略指令而无法访问网址的问题