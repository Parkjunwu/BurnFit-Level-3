# BurnFit

<br/>
최신 버전 RN 에서 안드로이드 실행시 react-native-reanimated 라이브러리가 네이티브에서 크래시 나는 이슈가 있어 0.68.2 버전으로 새로 만들었습니다. ruby 버전이 다른 등 혹시 모를 이슈가 있어 새로 github 프로젝트 생성하였습니다.
<br/>
<br/>

프로젝트 설정 및 실행 방법<br/>
<br/>
터미널에서 명령어 실행<br/>

\# git clone https://github.com/Parkjunwu/BurnFit-Level-3.git<br/>
\# cd BurnFit-Level-3<br/>
\# npm install<br/>

<br/>
[ios]<br/>
터미널에서 명령어 실행<br/>
# bundle install<br/>
# npx pod-install<br/>
# npm run ios<br/>
<br/>
[안드로이드]<br/>
[사용자의 프로젝트 폴더]/android 에 local.properties 파일 생성<br/>
맥 > sdk.dir=/Users/[사용자 명]/Library/Android/sdk 입력 후 저장<br/>
윈도우 > sdk.dir=c:\Users\[사용자 명]\AppData\Local\android\adk 입력 후 저장<br/>
터미널에서 명령어 실행<br/>
# npm run android<br/>
출처 : https://healthcoding.tistory.com/35<br/>
<br/>
ruby 버전 : 2.7.5<br/>
