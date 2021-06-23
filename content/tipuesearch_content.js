var tipuesearch = {"pages": [{'title': '關於', 'text': '這是 https://github.com/mdecourse/cmstemplate \n 目前的 cmsimde 在編輯器下方新增一個 csave 按鈕, 意即 collabrative save, 當動態網際管理系統在多人同時維護登入維護網頁內容時, 編輯各頁面時段, 該頁面可能已經改版, 因此使用 csave 按鈕存檔時, 會導入當下最新的該頁面內容, 並試圖與編輯中的頁面內容進行合併. \n 使用 csave 按鈕存檔無法刪除頁面資料. \n 使用 Edit All 模式, 無法使用 csave 按鈕（尚未測試). \n \n', 'tags': '', 'url': '關於.html'}, {'title': '網路環境', 'text': '在學校:以學校電腦為主使用學校專用的網路來連線，上課時需要使用proxy來連接到學校的主機才能正確上網，主要是以ipv6來做連線 \n 缺點是學校主機出問題會導致所有電腦無法連線， proxy設定錯誤也無法連線(要到特定的主機(69 53之類的)) \n 在家裡:以自家電腦或筆電為主，連家裡的無線基地台或手機網路來上網，不需要設定proxy，主要是以ipv4來做連線。 \n 缺點是無法連接到需要ipv6才能進入的網站 \n \n 心得:在學校平時不需要特別設定網路，但如果無法上網基本上就是有設定錯誤，要想辦法解決相當麻煩，在家則是要在意的只有網路的穩定程度，沒網路跟天氣有較大的關西，不用去看設定，當然隨身系統內專門為ipv6的設定基本要關閉。 \n \n', 'tags': '', 'url': '網路環境.html'}, {'title': '網路直播', 'text': '1.youtube第一次直播至少需要一天準備 \n 2.設定裡確定串流金要與youtube相同 \n 3.來源要設定清楚 \n 心得:又學到一項新技能，有助於以後在網路平台發展 \n \n \n', 'tags': '', 'url': '網路直播.html'}, {'title': '解說影片', 'text': '', 'tags': '', 'url': '解說影片.html'}, {'title': 'ROBOTDK', 'text': '\n', 'tags': '', 'url': 'ROBOTDK.html'}, {'title': 'fossil', 'text': '\n', 'tags': '', 'url': 'fossil.html'}, {'title': 'OBS', 'text': '\n', 'tags': '', 'url': 'OBS.html'}, {'title': 'HEROKU', 'text': '', 'tags': '', 'url': 'HEROKU.html'}, {'title': '靜態', 'text': '1. 進入\xa0 https://heroku.com , \n 使用 @gm 登記一個 Heroku 帳號 \n 2.建立一個新的倉儲如:s409231xx \n 3.下載 Heroku cli 程式解開至隨身碟 \n 4.修改start路徑: \n 輸入: heroku version \xa0 \n 有回應即可成功 \n 6.heroku login \xa0 -i , 完成後產生 y:\\home_ipv6\\_netrc \n 7.設定同步倉儲\xa0\xa0heroku git:remote -a s409231xx \n 8.正常推送git push heroku\xa0 \n github網站: https://40923111.github.io/wcm2021/content/index.html \n heroku靜網:https://s40923111.herokuapp.com/ \n \n', 'tags': '', 'url': '靜態.html'}, {'title': '動態', 'text': 'github網站: https://40923111.github.io/wcm2021/content/index.html \n heroku動網: https://w40923111.herokuapp.com/ \n 1.創Github，然後把 \xa0 Procfile ,\xa0 requirements.txt \xa0與\xa0 runtime.txt ,\xa0，都推送上去。 \n 2.設定wsgi.py \n 3.推送， Github跟Heroku，(打開Heroku網址後在網址後加上  r? class oomno \xa0 = \xa0 BGAxxxx 可改變教室) \n \n \n', 'tags': '', 'url': '動態.html'}, {'title': '上課內容', 'text': '', 'tags': '', 'url': '上課內容.html'}, {'title': 'W1', 'text': '網際內容管理課程簡介 \n https://youtu.be/hZMriptiTU4 \n 網際內容管理將從學校教務主機, 以 Flask 與 bs4 擷取出各種相關資料作為開端, 以下為初步流程介紹: \n https://youtu.be/37l2T6lF2oo \n 為從\xa0 http://a.kmol.info:88 \xa0 取下 Python 3.9.1 版的可攜程式系統, 特別將需要 @gm 權限的兩階段程式系統, 從 @gm 移動到 \xa0 http://a.kmol.info:88 , 其中使用 sftp 與 ssh 對 a.kmol.info 進行連線: \n https://youtu.be/OaOdFv3EbIs \n', 'tags': '', 'url': 'W1.html'}, {'title': 'W2', 'text': '\xa0說明 KMOLab 基本概念就是希望機械設計工程師能夠善用計算機程式與網路, 讓產品開發流程更有效率. \n https://youtu.be/9-Qu-xwJmRE \n 說明與 cmsimde 編輯及轉靜態網頁有關的認知 \n https://youtu.be/s5ty-MpnK7c \n 說明 topic0 執行動機以及自選組員後所衍生相關資料擷取問題的因應及處理 \n', 'tags': '', 'url': 'W2.html'}, {'title': 'W3', 'text': '自選組員 6 人一組 \n', 'tags': '', 'url': 'W3.html'}, {'title': 'W4', 'text': '1. 各組根據 W1 - W3 的課程內容從 \xa0 https://qry.nfu.edu.tw/ \xa0 以網際程式截取四技設一甲班上各課程的開課時段與修課人員名單, 並使用 \xa0 https://github.com/mdecourse/nfulist \xa0 程式架構, 將分組程式送到 \xa0 Heroku \xa0 伺服. \n http://mde.tw/cp2020/content/Heroku.html \n http://mde.tw/cp2020/content/nfu-project.html \n http://mde.tw/cp2020/content/scissor-rock-paper.html \n 2. \xa0 http://mde.tw/wcmj2021/content/W4.html \n 3. 請根據 \xa0 https://qry.nfu.edu.tw/classroom.php \xa0 中有關機械設計工程系相關的實習實驗室排課時數, 按照排課時數多寡, 列出各實習實驗室的總排課時數表. \n 4. 請問從各學制的班級名條 ( https://qry.nfu.edu.tw/classlist.php ) 統計, 可以算出各學制 2021 Spring 總註冊人數嗎? \n 練習英文打字與寫作編輯: \n 請將下列 paper 重新打字整理為 .txt 純文字檔案, 之後再利用 LaTeX 整理為 pdf 檔案. \n 1990_evaluating_the_use_of_cad_systems_in_mechanical_design_engineering.pdf \n', 'tags': '', 'url': 'W4.html'}, {'title': 'W5', 'text': '1.首先我們需要登入github在自己的帳號中開啟設定，在設定中尋找SSH and GPG keys ，然後先按New SSHkey做準備。 \n 2.在 start_ipv6.bat (編輯器)加入 \xa0 set GIT_SSH=%Disk%:\\putty\\plink.exe。 \n 3.開啟 Putty 目錄中的 puttygen.exe,(沒有putty從a.kmol.info:88下載)，點擊Generate下載新Key(移動滑鼠進度條才會動)，最上面出現的亂碼為新鑰匙，全選後丟進剛剛在github預備的New SSHkey(記得存)，記得用SciTE 編輯儲存鑰匙(_rsa 檔)，然後用Save private key再存一次(.ppk檔)，兩個檔案存在tmp/keys裡 \n 4.開啟 putty.exe建立一個 session用於以 ssh 協定連線到 github.com(在hostname),名稱可任意但Proxy須設定學校的(筆電不用Proxy可以選None)，Auth記得選之前儲存.ppk的檔案，最後回開頭存檔 \n 5.最後則是要修改tmp/wcm2021/.git裡面config的url(之前的可在前面加#即可)，url改成git@( session的名子) :(帳號)/(倉儲名子).git(原url下面)(是origin下面的url) \n 名子盡量相同會增加成功率，失敗就多試幾次說不定會成功 \n', 'tags': '', 'url': 'W5.html'}, {'title': 'W6', 'text': '開始準備期中分組報告 \n heroku連結到倉儲，需要 \n 從a.kmol.info:88下載Heroku，放到data下，再用編輯器把啟動器的Heroku路徑打上。 \n 測試是否有連接上， 輸入 heroku version，有出現版本號便成。 \n 未出現原因 \n 1.編輯器未編寫正確 \n 2.檔案不完整 \n 完成後推送方法 \n 1. heroku login \xa0 - i\xa0 ( 以 interactive 模式登入 Heroku)(記得打帳號密碼) \n 2cd到要推送得倉儲 \n 3. heroku git:remote \xa0 - a s40923148(自己的) \xa0( 針對已經登入的 Heroku 帳號下的 s40923148 app, 設為此倉儲的 remote 同步倉儲 \n 4. git add . \n 5.git commit -am "make it better" \n 6.git push heroku  \n \n \n 編輯器設定 \n \n \n \n \n \n \n 1 \n \n \n \n path = % Disk % :; % path_python % ; % path_portablegit % ; % path_heroku % ; % path % ; \n \n \n \n \n \n \n \n 路近加上Heroku \n \n \n \n \n \n \n 1 \n \n \n \n \xa0 set   path_heroku = % Disk % :\\heroku\\ bin ; \n \n \n \n \n \n \n \n 標示路徑 \n 學校電腦需要 \n REM \xa0 for \xa0 heroku login \n set HTTP_PROXY=http: //[2001:288:6004:17::53]:3128 \n set HTTPS_PROXY=http: //[2001:288:6004:17::53]:3128 \n \n \n \n 再次教學如何設定SSH跟解釋 \n', 'tags': '', 'url': 'W6.html'}, {'title': 'W7', 'text': '1.創新的Heroku，不能用已經推送過的，不然會一直錯誤。 \n 2.創新的Github，然後把 \xa0 Procfile , \xa0 requirements.txt \xa0 與 \xa0 runtime.txt , \xa0，都推送上去。 \n 3.設定wsgi.py(負責打開6~9樓教室課表)(最下面) \n 4.最後就是推送， Github跟Heroku，(打開Heroku網址後在網址後加上? classroomno \xa0 = \xa0 BGAxxxx可改變教室) \n \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n 7 \n 8 \n 9 \n 10 \n 11 \n 12 \n 13 \n 14 \n 15 \n 16 \n 17 \n 18 \n 19 \n 20 \n 21 \n 22 \n 23 \n 24 \n 25 \n 26 \n 27 \n 28 \n 29 \n 30 \n 31 \n 32 \n 33 \n 34 \n 35 \n 36 \n 37 \n 38 \n 39 \n 40 \n 41 \n 42 \n 43 \n 44 \n 45 \n 46 \n 47 \n 48 \n 49 \n 50 \n 51 \n 52 \n 53 \n 54 \n 55 \n 56 \n 57 \n 58 \n 59 \n 60 \n 61 \n 62 \n 63 \n 64 \n 65 \n 66 \n 67 \n 68 \n 69 \n 70 \n 71 \n 72 \n 73 \n 74 \n 75 \n 76 \n 77 \n 78 \n 79 \n 80 \n 81 \n 82 \n 83 \n 84 \n 85 \n 86 \n 87 \n 88 \n \n \n \n import   requests \n import   bs4 \n # for os.environ and os.system \n import   os \n # for geting html file path \n import   pathlib \n # 以下因應改為 Heroku based 程式所需導入模組,\xa0 修改步驟 1/6 \n from   flask  import   Flask, request  \n from   flask_cors  import   CORS \n \xa0 \xa0 \n \xa0 \xa0 \n # 修改步驟 2/6 , 加入 Flask 相關物件設定 \n app  =   Flask(__name__) \n # 此一設定可以讓程式跨網域擷取資料 \n CORS(app) \n \xa0 \xa0 \n # for pythn 3.9,\xa0 在近端測試時仍需要設定 proxy, 若使用 Python 3.8 執行則會自動使用系統的 Proxy 設定 \n proxy  =   \'http://[2001:288:6004:17::69]:3128\' \n \xa0 \xa0 \n os.environ[ \'http_proxy\' ]  =   proxy  \n os.environ[ \'HTTP_PROXY\' ]  =   proxy \n os.environ[ \'https_proxy\' ]  =   proxy \n os.environ[ \'HTTPS_PROXY\' ]  =   proxy \n \'\'\' \n url:\xa0 \'jclassroom_ajax.php\', \n data: { pselyr: pselyr, pselclssroom: pselclssroom }, \n \'\'\' \n \xa0 \xa0 \n # 修改步驟 3/6, 試著將程式改為網際模式, 需要套用 Flask 的網際 decorator \n @app .route( \'/\' ) \n def   timeTableList(): \n \xa0\xa0\xa0\xa0 semester  =   \'1092\' \n \xa0\xa0\xa0\xa0 classroomno  =   \'BGA0810\' \n \xa0\xa0\xa0\xa0 column  =   True \n \xa0 \xa0 \n \xa0\xa0\xa0\xa0 if   semester  = =   None : \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 semester  =   \'1092\' \n \xa0\xa0\xa0\xa0 if   classroomno  = =   None : \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 # BGA0810 電腦輔助設計室 \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 classroomno  =   \'BGA0810\' \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 \xa0 \n \xa0\xa0\xa0\xa0 headers  =   { \'X-Requested-With\' :  \'XMLHttpRequest\' } \n \xa0 \xa0 \n \xa0\xa0\xa0\xa0 url  =   \'https://qry.nfu.edu.tw/jclassroom_ajax.php\' \n \xa0\xa0\xa0\xa0 post_var  =   { \'pselyr\' : semester,  \'pselclssroom\' : classroomno} \n \xa0 \xa0 \n \xa0\xa0\xa0\xa0 result  =   requests.post(url, data  =   post_var, headers  =   headers) \n \xa0 \xa0 \n \xa0\xa0\xa0\xa0 soup  =   bs4.BeautifulSoup(result.content,  \'lxml\' ) \n \xa0 \xa0 \n \xa0\xa0\xa0\xa0 # 先除掉所有 anchor \n \xa0\xa0\xa0\xa0 for   a  in   soup.findAll( \'a\' ): \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 # bs3 語法 \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 #a.replaceWithChildren() \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 # bs4 語法, 將標註與內容拆開 \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 a.unwrap() \n \xa0 \xa0 \n \xa0\xa0\xa0\xa0 # 根據輸出設定, 取出 class=\'tbcls\' 的 table 資料 \n \xa0\xa0\xa0\xa0 table  =   soup.find( \'table\' , { \'class\' :  \'tbcls\' }) \n \xa0 \xa0 \n \xa0\xa0\xa0\xa0 # 重建 table, 設定邊線為 1 pixel \n \xa0\xa0\xa0\xa0 output  =   "<table border=\'1\'>" \n \xa0 \xa0 \n \xa0\xa0\xa0\xa0 for   i  in   table.contents: \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 # 利用 replace 復原\xa0  \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 output  + =   str (i).replace( "\xa0" ,  " " ) \n \xa0\xa0\xa0\xa0 output  + =   "</table>" \n \xa0\xa0\xa0\xa0 #print(output) \n \xa0\xa0\xa0\xa0 # 修改步驟 5/6 , 因為已經將原先可列印出程式的步驟改為 function, 因此必須以 return 將擷取到的網頁資料傳回 \n \xa0\xa0\xa0\xa0 return   output \n \xa0\xa0\xa0\xa0\xa0 \xa0 \n # 修改步驟 4/6 , 因為改寫為網際程式後, 下列將內容存檔並自動呼叫 Firefox 的程式碼不再適用, 必須蓋掉 \n \'\'\' \n # 將 output 寫入 w1_classroom.html \n fileName = "w1_classroom.html" \n with open(fileName, "w", encoding="utf-8") as file: \n \xa0\xa0\xa0\xa0 file.write(output) \n # 利用 os.system() 以 default browser 開啟 w1_class_local.html \n filePath = pathlib.Path(__file__).parent.absolute() \n #print(filePath) \n # set firefox as default browser and start url to open html file \n os.system("start file:///" + str(filePath) + "\\\\" + fileName) \n \'\'\' \n \xa0 \xa0 \n # 修改步驟 6/6, 配合網際程式啟動,\xa0 以及 Python 程式執行與納入其他程式執行的特定進行配置 \n \xa0 \xa0 \n if   __name__  = =   \'__main__\' : \n \xa0\xa0\xa0\xa0 app.run(host = \'127.0.0.1\' , port = 8080 , debug = True ) \n \n \n \n \n \n', 'tags': '', 'url': 'W7.html'}, {'title': 'W8', 'text': '開始分組報告，要負責把一個github的倉儲推送去heroku，內容要包括機械設計系大樓教室的課表，可以的話把各個樓層都放上按鈕。 \n 教務主機查詢電腦輔助設計室排課時間表的python介紹 \n', 'tags': '', 'url': 'W8.html'}, {'title': 'W9', 'text': '打期望分數 \n', 'tags': '', 'url': 'W9.html'}, {'title': 'W10', 'text': '網際內容管理系統下半學期將有以下幾個主要教學目標: \n \n 對 \xa0 Python Flask 網際程式 的架構能夠更加深入了解, 各學員不僅會利用 \xa0 Beautifulsoup \xa0 從學校教務主機擷取資料, 建立 \xa0 Heroku \xa0 雲端應用程式, 列出各實驗室的排課資訊外, 能計算各實驗室的排課總時數, 同時也能將查得的資料分別存入 SQLite 與 PostgreSQL 資料庫 (flaskg 範例 倉儲 與 網站 ). \n 要求學員有能力 自行編寫 如 網際猜拳 , \xa0 網際英英字典 \xa0 ( http://lookupdict.herokuapp.com , 採 scrum1 At mde 部署), 以及其他與 機械設計較相關的網際程式 \xa0 (包括 猜數字遊戲 , \xa0 正齒輪齒面寬設計 , \xa0 2D 繪圖 等). \n 利用 \xa0 RoboDK \xa0 作為整合英文, 數學與網際內容管理相關技術的測試工具, 希望能夠透過網際程式控制特定的六軸機械手臂 ( 參考 , \xa0 Guide ). \n 編寫能夠協助 CMSiMDE \xa0 分頁 錯誤時進行 debug 的 輔助程式 \xa0 (擬採用 \xa0 https://github.com/PySimpleGUI/PySimpleGUI \xa0 or \xa0 https://github.com/dddomodossola/remi \xa0 進行測試), 假如要讓 CMSiMDE 能夠透過中文斷字 ( https://github.com/fxsjy/jieba ), 試著解讀網際內容管理的關鍵字, 進而了解網站的內容屬性. \n \n 根據下圖所示, 四年前所部署的 \xa0 https://wcms-scrum1.herokuapp.com/ \xa0 所使用的 The Heroku-16 stack is deprecated, 意即 \xa0 Heroku-16 stack \xa0 將要在 2021.06.01 終止 build 功能, 因此部署在此雲端硬體平台的應用程式, 若要持續改版, 必須要在生命週期結束之前搬遷到其他硬體平台上: \n \n SQLite 練習 \n 目的希望能將之前所寫的各實驗室排課表網際程式, 能將所查詢的資料存入 SQLite, 並且部署到 Heroku. \n 之後再將資料庫應用至 PostgreSQL, 最後再將網際資料庫程式部署到 Heroku. \n 若該網際程式配置 Oauth2 的登入套件, 即可延伸應用至各實驗室上課時段外的實驗室借用管理系統. 若再利用雲端點名系統 RFID 掃描的感應開門, 將可擴大此系統的應用範圍. \n', 'tags': '', 'url': 'W10.html'}, {'title': 'W11', 'text': '1. OBS + Youtube 分組直播錄影測試: \n 首次進行 Youtube 直播需要等待 24 小時後才可啟用. \n 假如是在 Mac 環境安裝 OBS, 必須至 System Preferences - Security & Privacy 處允許 OBS 使用 Camera 與 Screen Recording. \n 在 IPv6 環境下進行各分組桌面操作直播錄影 \n 登入 @gm 帳號後連結至 Youtube 選擇 Live stream, 取得直播金鑰 \n 將直播金鑰輸入 OBS, 啟動顯示器擷取, 透過串流訊號將桌面操作影像傳至 Youtube 進行直播錄影. \n 根據 \xa0 http://mde.tw/cd2021/content/task2.html \xa0 進行 IPv6 + 區域網路操控進行測試. \n 參考 \xa0 http://mde.tw/cd2021/content/task3.html \xa0 使用各組網際簡報內容引導直撥錄影. \n 2. 各分組從 \xa0 http://mde.tw/wcm2021/content/W10.html \xa0 網際程式中選擇一項, 負責從近端執行部署至 Heroku. \n 自行利用 Ubuntu 建立可啟動 CMSiMDE 動態系統與 Fossil SCM 伺服器的目的: \n 建立完整的 Python 網際程式開發環境. \n 開發的程式碼可採用 Fossil SCM 與 Github 同步的方式進行分散式版次管理. \n Ubuntu 20.04 on Virtualbox, 從 \xa0 http://a.kmol.info:88/Ub2004.vdi \xa0 取得 已經安裝 Ubuntu 的虛擬硬碟進行後續設定. 或者自行下載 Ubuntu 20.04 Desktop 版 iso 檔案自行安裝帶有桌面的虛擬主機. \n 先更改 vdi 的 uuid : \n \n \n \n \n \n \n 1 \n \n \n \n "c:\\Program Files\\Oracle\\VirtualBox\\VBoxManage.exe" \xa0 internalcommands sethduuid Ubwcm2021.vdi \n \n \n \n \n \n \n \n 設定虛擬主機網路連線: \n 接著將 Ubuntu 虛擬主機的網路以 Bridged 串接到 Windows 10 已經連線的網路卡. \n 登入系統後進行更新: \n 由於 /etc/netplan/net.yaml 中採用 DHCP6 連外, 因此透過 ifconfig 可以取得網路連線資訊. \n 但因電腦輔助設計室採純 IPv6 設定, 因此必須透過雙網路協定代理主機上網才可執行下列 apt 指令. \n 因此要以 sudo vi\xa0 /etc/apt/apt.conf 建立 \xa0 apt 代理主機設定檔 , 內容如下: \n \n \n \n \n \n \n 1 \n \n \n \n Acquire::http::Proxy \xa0 "http://proxy_username:proxy_password@[Proxy_server_ipv6_address]:3128" ; \n \n \n \n \n \n \n \n 之後就可以完成下列更新指令執行: \n sudo apt update \n sudo apt upgrade \n sudo apt autoremove \n', 'tags': '', 'url': 'W11.html'}, {'title': 'W12', 'text': '全不懂老師在說甚麼，robodk、虛擬網站、FileZillaPortable、Oracle VM VirtualBox一大堆不明白的東西進入腦子，只能勉強記憶下來，回去再好好消化。 \n 回去想辦法處理robodk看了影片還是完全不懂，只好求助同學跟私訊老師，而虛擬網站之後的只是更加糟糕。 \n', 'tags': '', 'url': 'W12.html'}, {'title': 'W13', 'text': 'Pick and Place 檔案下載 \n 可攜程式系統的命令列視窗輸入 pip install robodk\xa0 \n \n 開啟robodk(記得要前往 工具/選項/其他/打勾允許外部AIP並且輸入目前電腦網路IP \n pick_and_place除程式碼都拉近robodk \n \n 開啟Python-robodk-Install.bat(robodk下 \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n 7 \n 8 \n 9 \n 10 \n 11 \n 12 \n 13 \n 14 \n 15 \n \n \n \n :: cd Python \n \xa0 \n :: Install RoboDK API \n python.exe \xa0 - m pip install\xa0 \xa0 "./Python/." \xa0 - I \n \xa0 \n :: Install pylint (linting \xa0 for \xa0 VScode) \n python.exe \xa0 - m pip install \xa0 "pylint>=2.3" \xa0 - - retries = 2 \n \xa0 \n :: Install rope (easy variable renaming \xa0 in \xa0 VScode) \n python.exe \xa0 - m pip install \xa0 "rope>=0.14" \xa0 - - retries = 2 \n \xa0 \n :: Display \xa0 all \xa0 installed packages \n python.exe Python_Versions.py \n \xa0 \n pause \n \n \n \n \n \n \n \n 和apick_and_place.py(注意go之前IP要設定目前連線網路的IP \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n 7 \n 8 \n 9 \n 10 \n 11 \n 12 \n 13 \n 14 \n 15 \n 16 \n 17 \n 18 \n 19 \n 20 \n 21 \n 22 \n 23 \n 24 \n 25 \n 26 \n 27 \n 28 \n 29 \n 30 \n 31 \n 32 \n 33 \n 34 \n 35 \n 36 \n 37 \n 38 \n 39 \n 40 \n 41 \n 42 \n 43 \n 44 \n 45 \n 46 \n 47 \n 48 \n 49 \n 50 \n 51 \n 52 \n 53 \n 54 \n 55 \n 56 \n 57 \n 58 \n 59 \n 60 \n 61 \n 62 \n 63 \n 64 \n 65 \n 66 \n 67 \n 68 \n 69 \n 70 \n 71 \n 72 \n 73 \n 74 \n 75 \n 76 \n 77 \n 78 \n 79 \n 80 \n 81 \n 82 \n 83 \n 84 \n 85 \n 86 \n 87 \n 88 \n 89 \n 90 \n 91 \n 92 \n 93 \n 94 \n 95 \n 96 \n 97 \n 98 \n 99 \n 100 \n 101 \n 102 \n 103 \n 104 \n 105 \n 106 \n 107 \n 108 \n 109 \n 110 \n 111 \n 112 \n 113 \n 114 \n 115 \n 116 \n 117 \n 118 \n 119 \n 120 \n 121 \n 122 \n 123 \n 124 \n 125 \n 126 \n 127 \n 128 \n 129 \n 130 \n 131 \n 132 \n 133 \n 134 \n 135 \n 136 \n 137 \n 138 \n 139 \n 140 \n 141 \n 142 \n 143 \n 144 \n 145 \n 146 \n 147 \n 148 \n 149 \n 150 \n 151 \n 152 \n 153 \n 154 \n 155 \n 156 \n 157 \n 158 \n 159 \n 160 \n 161 \n 162 \n 163 \n 164 \n 165 \n 166 \n 167 \n 168 \n 169 \n 170 \n 171 \n 172 \n 173 \n 174 \n 175 \n 176 \n 177 \n 178 \n 179 \n 180 \n 181 \n 182 \n 183 \n 184 \n 185 \n 186 \n 187 \n \n \n \n # KMOLab Portable RoboDK pick and place \n from \xa0 robolink \xa0 import \xa0 * \xa0\xa0\xa0 \xa0 # API to communicate with robodk \n from \xa0 robodk \xa0 import \xa0 * \xa0\xa0\xa0\xa0\xa0 \xa0 # robodk robotics toolbox \n \xa0 \n # Setup global parameters \n BALL_DIAMETER \xa0 = \xa0 100 \xa0 # diameter of one ball \n APPROACH \xa0 = \xa0 100 \xa0\xa0\xa0\xa0\xa0 \xa0 # approach distance to grab each part, in mm \n nTCPs \xa0 = \xa0 6 \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 \xa0 # number of TCP\'s in the tool \n \xa0 \n #---------------------------------------------- \n # Function definitions \n \xa0 \n def \xa0 box_calc(BALLS_SIDE = 4 , BALLS_MAX = None ): \n \xa0\xa0\xa0\xa0 """Calculate a list of points (ball center) as if the balls were stored in a box""" \n \xa0\xa0\xa0\xa0 if \xa0 BALLS_MAX \xa0 is \xa0 None : BALLS_MAX \xa0 = \xa0 BALLS_SIDE * * 3 \n \xa0\xa0\xa0\xa0 xyz_list \xa0 = \xa0 [] \n \xa0\xa0\xa0\xa0 for \xa0 h \xa0 in \xa0 range (BALLS_SIDE): \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 for \xa0 i \xa0 in \xa0 range (BALLS_SIDE): \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 for \xa0 j \xa0 in \xa0 range (BALLS_SIDE): \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 xyz_list \xa0 = \xa0 xyz_list \xa0 + \xa0 [[(i + 0.5 ) * BALL_DIAMETER, (j + 0.5 ) * BALL_DIAMETER, (h + 0.5 ) * BALL_DIAMETER]] \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 if \xa0 len (xyz_list) > = \xa0 BALLS_MAX: \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 return \xa0 xyz_list \n \xa0\xa0\xa0\xa0 return \xa0 xyz_list \n \xa0 \n def \xa0 pyramid_calc(BALLS_SIDE = 4 ): \n \xa0\xa0\xa0\xa0 """Calculate a list of points (ball center) as if the balls were place in a pyramid""" \n \xa0\xa0\xa0\xa0 #the number of balls can be calculated as: int(BALLS_SIDE*(BALLS_SIDE+1)*(2*BALLS_SIDE+1)/6) \n \xa0\xa0\xa0\xa0 BALL_DIAMETER \xa0 = \xa0 100 \n \xa0\xa0\xa0\xa0 xyz_list \xa0 = \xa0 [] \n \xa0\xa0\xa0\xa0 sqrt2 \xa0 = \xa0 2 * * ( 0.5 ) \n \xa0\xa0\xa0\xa0 for \xa0 h \xa0 in \xa0 range (BALLS_SIDE): \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 for \xa0 i \xa0 in \xa0 range (BALLS_SIDE - h): \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 for \xa0 j \xa0 in \xa0 range (BALLS_SIDE - h): \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 height \xa0 = \xa0 h * BALL_DIAMETER / sqrt2 \xa0 + \xa0 BALL_DIAMETER / 2 \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 xyz_list \xa0 = \xa0 xyz_list \xa0 + \xa0 [[i * BALL_DIAMETER \xa0 + \xa0 (h + 1 ) * BALL_DIAMETER * 0.5 , j * BALL_DIAMETER \xa0 + \xa0 (h + 1 ) * BALL_DIAMETER * 0.5 , height]] \n \xa0\xa0\xa0\xa0 return \xa0 xyz_list \n \xa0 \n def \xa0 balls_setup(frame, positions): \n \xa0\xa0\xa0\xa0 """Place a list of balls in a reference frame. The reference object (ball) must have been previously copied to the clipboard.""" \n \xa0\xa0\xa0\xa0 nballs \xa0 = \xa0 len (positions) \n \xa0\xa0\xa0\xa0 step \xa0 = \xa0 1.0 / (nballs \xa0 - \xa0 1 ) \n \xa0\xa0\xa0\xa0 for \xa0 i \xa0 in \xa0 range (nballs): \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 newball \xa0 = \xa0 frame.Paste() \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 newball.setName( \'ball \' \xa0 + \xa0 str (i)) \xa0 #set item name \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 newball.setPose(transl(positions[i])) \xa0 #set item position with respect to parent \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 newball.setVisible( True , \xa0 False ) \xa0 #make item visible but hide the reference frame \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 newball.Recolor([ 1 - step * i, step * i, \xa0 0.2 , \xa0 1 ]) \xa0 #set RGBA color \n \xa0 \n def \xa0 cleanup_balls(parentnodes): \n \xa0\xa0\xa0\xa0 """Delete all child items whose name starts with \\"ball\\", from the provided list of parent items.""" \n \xa0\xa0\xa0\xa0 todelete \xa0 = \xa0 [] \n \xa0\xa0\xa0\xa0 for \xa0 item \xa0 in \xa0 parentnodes: \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 todelete \xa0 = \xa0 todelete \xa0 + \xa0 item.Childs() \n \xa0 \n \xa0\xa0\xa0\xa0 for \xa0 item \xa0 in \xa0 todelete: \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 if \xa0 item.Name().startswith( \'ball\' ): \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 item.Delete() \n \xa0 \n def \xa0 TCP_On(toolitem, tcp_id): \n \xa0\xa0\xa0\xa0 """Attach the closest object to the toolitem Htool pose, \n \xa0\xa0\xa0\xa0 furthermore, it will output appropriate function calls on the generated robot program (call to TCP_On)""" \n \xa0\xa0\xa0\xa0 toolitem.AttachClosest() \n \xa0\xa0\xa0\xa0 toolitem.RDK().RunMessage( \'Set air valve %i on\' \xa0 % \xa0 (tcp_id + 1 )) \n \xa0\xa0\xa0\xa0 toolitem.RDK().RunProgram( \'TCP_On(%i)\' \xa0 % \xa0 (tcp_id + 1 )); \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 \xa0 \n def \xa0 TCP_Off(toolitem, tcp_id, itemleave = 0 ): \n \xa0\xa0\xa0\xa0 """Detaches the closest object attached to the toolitem Htool pose, \n \xa0\xa0\xa0\xa0 furthermore, it will output appropriate function calls on the generated robot program (call to TCP_Off)""" \n \xa0\xa0\xa0\xa0 toolitem.DetachAll(itemleave) \n \xa0\xa0\xa0\xa0 toolitem.RDK().RunMessage( \'Set air valve %i off\' \xa0 % \xa0 (tcp_id + 1 )) \n \xa0\xa0\xa0\xa0 toolitem.RDK().RunProgram( \'TCP_Off(%i)\' \xa0 % \xa0 (tcp_id + 1 )); \n \xa0 \n \xa0 \n #---------------------------------------------------------- \n # The program starts here: \n \xa0 \n # Any interaction with RoboDK must be done through RDK: \n RDK \xa0 = \xa0 Robolink(robodk_path = "C:/robodk\\robodk522_portable/bin/RoboDK.exe" , robodk_ip = \'192.168.1.111\' ) \n \xa0 \n # Turn off automatic rendering (faster) \n RDK.Render( False ) \n \xa0 \n #RDK.Set_Simulation_Speed(500); # set the simulation speed \n \xa0 \n # Gather required items from the station tree \n robot \xa0 = \xa0 RDK.Item( \'Fanuc M-710iC/50\' ) \n robot_tools \xa0 = \xa0 robot.Childs() \n #robottool = RDK.Item(\'MainTool\') \n frame1 \xa0 = \xa0 RDK.Item( \'Table 1\' ) \n frame2 \xa0 = \xa0 RDK.Item( \'Table 2\' ) \n \xa0 \n # Copy a ball as an object (same as CTRL+C) \n ballref \xa0 = \xa0 RDK.Item( \'reference ball\' ) \n ballref.Copy() \n \xa0 \n # Run a pre-defined station program (in RoboDK) to replace the two tables \n prog_reset \xa0 = \xa0 RDK.Item( \'Replace objects\' ) \n prog_reset.RunProgram() \n \xa0 \n # Call custom procedure to remove old objects \n cleanup_balls([frame1, frame2]) \n \xa0 \n # Make a list of positions to place the objects \n frame1_list \xa0 = \xa0 pyramid_calc( 4 ) \n frame2_list \xa0 = \xa0 pyramid_calc( 4 ) \n \xa0 \n # Programmatically place the objects with a custom-made procedure \n balls_setup(frame1, frame1_list) \n \xa0 \n # Delete previously generated tools \n for \xa0 tool \xa0 in \xa0 robot_tools: \n \xa0\xa0\xa0\xa0 if \xa0 tool.Name().startswith( \'TCP\' ): \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 tool.Delete() \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 \xa0 \n # Calculate tool frames for the suction cup tool of 6 suction cups \n TCP_list \xa0 = \xa0 [] \n for \xa0 i \xa0 in \xa0 range (nTCPs): \n \xa0\xa0\xa0\xa0 TCPi_pose \xa0 = \xa0 transl( 0 , 0 , 100 ) * rotz(( 360 / nTCPs) * i * pi / 180 ) * transl( 125 , 0 , 0 ) * roty(pi / 2 ) \n \xa0\xa0\xa0\xa0 TCPi \xa0 = \xa0 robot.AddTool(TCPi_pose, \xa0 \'TCP %i\' \xa0 % \xa0 (i + 1 )) \n \xa0\xa0\xa0\xa0 TCP_list.append(TCPi) \n \xa0 \n TCP_0 \xa0 = \xa0 TCP_list[ 0 ] \n \xa0 \n # Turn on automatic rendering \n RDK.Render( True ) \n \xa0 \n # Move balls\xa0\xa0\xa0 \n robot.setPoseTool(TCP_list[ 0 ]) \n nballs_frame1 \xa0 = \xa0 len (frame1_list) \n nballs_frame2 \xa0 = \xa0 len (frame2_list) \n idTake \xa0 = \xa0 nballs_frame1 \xa0 - \xa0 1 \n idLeave \xa0 = \xa0 0 \n idTCP \xa0 = \xa0 0 \n target_app_frame \xa0 = \xa0 transl( 2 * BALL_DIAMETER, \xa0 2 * BALL_DIAMETER, \xa0 4 * BALL_DIAMETER) * roty(pi) * transl( 0 , 0 , - APPROACH) \n \xa0 \n while \xa0 idTake > = \xa0 0 : \n \xa0\xa0\xa0\xa0 # ------------------------------------------------------------------ \n \xa0\xa0\xa0\xa0 # first priority: grab as many balls as possible \n \xa0\xa0\xa0\xa0 # the tool is empty at this point, so take as many balls as possible (up to a maximum of 6 -> nTCPs) \n \xa0\xa0\xa0\xa0 ntake \xa0 = \xa0 min (nTCPs, idTake \xa0 + \xa0 1 ) \n \xa0 \n \xa0\xa0\xa0\xa0 # approach to frame 1 \n \xa0\xa0\xa0\xa0 robot.setPoseFrame(frame1) \n \xa0\xa0\xa0\xa0 robot.setPoseTool(TCP_0) \n \xa0\xa0\xa0\xa0 robot.MoveJ([ 0 , 0 , 0 , 0 , 10 , - 200 ]) \n \xa0\xa0\xa0\xa0 robot.MoveJ(target_app_frame) \n \xa0 \n \xa0\xa0\xa0\xa0 # grab ntake balls from frame 1 \n \xa0\xa0\xa0\xa0 for \xa0 i \xa0 in \xa0 range (ntake): \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 TCPi \xa0 = \xa0 TCP_list[i] \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 robot.setPoseTool(TCPi) \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 # calculate target wrt frame1: rotation about Y is needed since Z and X axis are inverted \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 target \xa0 = \xa0 transl(frame1_list[idTake]) * roty(pi) * rotx( 30 * pi / 180 ) \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 target_app \xa0 = \xa0 target * transl( 0 , 0 , - APPROACH) \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 idTake \xa0 = \xa0 idTake \xa0 - \xa0 1 \xa0\xa0\xa0\xa0\xa0\xa0\xa0 \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 robot.MoveL(target_app) \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 robot.MoveL(target) \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 TCP_On(TCPi, i) \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 robot.MoveL(target_app) \n \xa0 \xa0 \n \xa0\xa0\xa0\xa0 # ------------------------------------------------------------------ \n \xa0\xa0\xa0\xa0 # second priority: unload the tool\xa0\xa0\xa0\xa0 \n \xa0\xa0\xa0\xa0 # approach to frame 2 and place the tool balls into table 2 \n \xa0\xa0\xa0\xa0 robot.setPoseTool(TCP_0) \n \xa0\xa0\xa0\xa0 robot.MoveJ(target_app_frame) \n \xa0\xa0\xa0\xa0 robot.MoveJ([ 0 , 0 , 0 , 0 , 10 , - 200 ]) \n \xa0\xa0\xa0\xa0 robot.setPoseFrame(frame2)\xa0\xa0\xa0 \n \xa0\xa0\xa0\xa0 robot.MoveJ(target_app_frame) \n \xa0\xa0\xa0\xa0 for \xa0 i \xa0 in \xa0 range (ntake): \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 TCPi \xa0 = \xa0 TCP_list[i] \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 robot.setPoseTool(TCPi) \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 if \xa0 idLeave > nballs_frame2 - 1 : \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 raise \xa0 Exception( "No room left to place objects in Table 2" ) \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 \xa0 \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 # calculate target wrt frame1: rotation of 180 about Y is needed since Z and X axis are inverted \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 target \xa0 = \xa0 transl(frame2_list[idLeave]) * roty(pi) * rotx( 30 * pi / 180 ) \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 target_app \xa0 = \xa0 target * transl( 0 , 0 , - APPROACH) \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 idLeave \xa0 = \xa0 idLeave \xa0 + \xa0 1 \xa0\xa0\xa0\xa0\xa0\xa0\xa0 \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 robot.MoveL(target_app) \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 robot.MoveL(target) \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 TCP_Off(TCPi, i, frame2) \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 robot.MoveL(target_app) \n \xa0 \n \xa0\xa0\xa0\xa0 robot.MoveJ(target_app_frame) \n \xa0 \n # Move home when the robot finishes \n robot.MoveJ([ 0 , 0 , 0 , 0 , 10 , - 200 ]) \n \n \n \n \n \n', 'tags': '', 'url': 'W13.html'}, {'title': 'ROBOTDK 解說影片', 'text': '\n \n', 'tags': '', 'url': 'ROBOTDK 解說影片.html'}, {'title': 'W14', 'text': '分組組員創建共同倉儲 \n', 'tags': '', 'url': 'W14.html'}, {'title': 'W15', 'text': '創建分組倉儲 \n 倉儲: https://40923148.github.io/wcm2021-ag4/content/index.html \n', 'tags': '', 'url': 'W15.html'}, {'title': 'W16', 'text': 'fossil 介紹及解說 \n \n', 'tags': '', 'url': 'W16.html'}]};