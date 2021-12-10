export let question1 = [
  {
    question: "소스코드를 실행할 수 있는 상태로 변환하는 과정",
    answer: "빌드",
  },
  {
    question:
      "기계어로 바로 변환되어 실행되기 때문에 가장 속도가 빠르고 보안에 유리",
    answer: "컴파일 언어",
  },
  {
    question:
      "한 줄씩 번역되어 실행되며, 컴파일하는 과정에서 메모리가 훨씬 적게 소모되고빠른 시간에 컴파일을 진행",
    answer: "인터프리터 언어",
  },
  {
    question:
      "사용자의 http 요청을 받아 웹 컨테이너에 요청을 전달하고 결과값을 받아와 사용자에게 전송하는 역할을 수행",
    answer: "웹 서버",
  },
  {
    question:
      "사용자의 요청을 받아 동적인 처리를 수행하는 프로그램 실행 부분을 배포",
    answer: "WAS",
  },
  {
    question:
      "Java는 ( ), ( ), ( ) 등의 방식으로 패키징하여 애플리케이션을 배포",
    answer: "jar,war,ear",
  },
  {
    question:
      "소프트웨어의 전체 생명 주기, 즉 계획, 개발, 유지보수, 폐기까지 방생하는 모든 활동을 지속적으로 관리하는 것",
    answer: "형상관리",
  },
  {
    question:
      "형상관리 대상이 되는 항목을 의미하며, 유일한 식별자가 부여되어 개별적으로 관리되는 소스 파일, 문서, 기타 사항 등이 포함",
    answer: "형상항목",
  },
  {
    question:
      "공식적으로 검토되고 협의되어 향후 기준이 되는 형상항목의 집합체를 의미",
    answer: "기준선",
  },
  {
    question:
      "개발 완료된 시스템이 운영 단계로 전환될 때 관련 소스 파일을 저장공간(리포지터리)으로 이관시키는 작업",
    answer: "마이그레이션",
  },
  {
    question:
      "관리 대상을 형상관리 시스템으로 일괄 전송하여 압축, 암호화한 후에 저장, 관리하는 저장 공간",
    answer: "리포지터리",
  },
  {
    question:
      "형상관리 활동을 수행하기 위해 미리 정해진 절차가 형상관리 시스템 안에 구현되어 있는 것",
    answer: "워크플로",
  },
  {
    question: "형상항목을 변경하기 위해 형상 리포지터리로부터 전송받는 것",
    answer: "반출",
  },
  {
    question: "반출된 형상항목을 변경 후 다시 형상 리포지터리로 전송하는 것",
    answer: "반입",
  },
  {
    question:
      "리소스 유형별 배포 방식에서 ( )은 컴파일 후 class 파일로 복사하는 배포 방식을 사용",
    answer: "배치 프로그램",
  },
  {
    question: "라이브러리는 ( )로 패키징 후 복사",
    answer: "jar",
  },
  {
    question: "인터페이스 전문은 ( ) 파일 형태로 복사",
    answer: "XML",
  },
  {
    question: "오픈소스 기반의 형상관리 도구의 종류",
    answer: "Maven,CVS,Subversion",
  },
  {
    question:
      "애플리케이션 배포 유형 사례 중에서 ( )는 주기적으로 전체 개발 내역을 확인, 점검하는 경우에 사용된",
    answer: "통합 빌드",
  },
  {
    question:
      "애플리케이션 배포 관계자 중에서 ( )는 빌드, 배포환경 구성 및 운영, 빌드 스크립트 작성 및 테스트, 빌드, 배포 내역 오류 확인 등을 담당",
    answer: "배포관리자",
  },
  {
    question:
      "애플리케이션 배포 관계자 중에서 ( )는 빌드, 배포 보고서 확인, 개발 진척도 관리, 테스트 케이스 작성 내역 검토 등을 담당",
    answer: "프로젝트 PM,PL",
  },
  {
    question:
      "테스트 케이스 작성 및 관리, 개별 모듈 수시 빌드 및 배포, 빌드, 배포 내역 정상 여부 확인 및 수정 등을 담당",
    answer: "개발자",
  },
  {
    question: "git 하위 디렉토리를 생성 ($ 제외)",
    answer: "git init",
  },
  {
    question: "로컬 저장소 복제 ($ 제외)",
    answer: "git clone",
  },

  {
    question: "커밋 생성 ($ 제외)",
    answer: "git commit",
  },
  {
    question: "파일 상태 확인 ($ 제외)",
    answer: "git status",
  },
  {
    question: "브랜치 목록 확인 ($ 제외)",
    answer: "git branch",
  },
  {
    question: "브랜치 삭제 ($ 제외)",
    answer: "git branch -d",
  },
  {
    question: "커밋을 원격 서버에 업로드 ($ 제외)",
    answer: "git push",
  },
  {
    question:
      "원격 저장소의 변경 내용이 현재 디렉토리에 가져오고 병합 ($ 제외)",
    answer: " git pull",
  },
  {
    question: "소스코드 검증도구는 구현된 SW를 실행하지 않고 테스트",
    answer: "정적 테스트 도구",
  },
  {
    question: "구현된 SW를 실행하여 동작을 보면서 테스트",
    answer: "동적 테스트 도구",
  },
  {
    question:
      "테스트하기 전에 코딩 오류, 성능 저하, 보안 취약점 등의 결함을 조기에 발견할 수 있도록 지원하여 개발 생산성을 향상시키고, 품질을 향상",
    answer: "정적 테스트 도구",
  },
  {
    question:
      "테스트 미수행 코드를 확인하고 분기(결정)문 등 특정 유형의 코드구조가 충분히 테스트 되었는지를 확인하여 추가적인 테스트를 진행함으로써 애플리케이션의 안정성을 제고",
    answer: "동적 테스트 도구",
  },
  {
    question:
      "메모리 누수, 미사용 변수, 메소드 여부 등 애플리케이션의 성능에 영향을 미칠 수 있는 코드를 점검하는 Rule",
    answer: "성능 개선",
  },
  {
    question:
      "개발언어에서 사전에 정의된 작성규칙 또는 프로젝트 내에서 정의된 프로그램 명명 규칙의 준수 여부를 점검하는 Rule",
    answer: "코드 작성 규칙",
  },
  {
    question:
      "애플리케이션 동작 중 에러 발생 가능성이 있는 코드를 점검하는Rule",
    answer: "에러 발생 가능성",
  },
  {
    question:
      "정적 테스트의 가장 일반적인 유형으로, 사전에 정의된 코드 작성 규칙(Rule) 기반으로 소스코드를 점검하여 작성 규칙에 위반되는 소스코드를 추출하는 분석 도구",
    answer: "코드 인스펙션",
  },
  {
    question:
      "에러 발생 가능성이 매우 높거나 메모리 누수가 발생되는 코드로, 반드시 수정되어야 하는 위반 사항",
    answer: "필수",
  },
  {
    question:
      "에러 발생 가능성이 높거나 일반적으로 수정되어야 하는 심각한 위반 사항",
    answer: "권고 상",
  },
  {
    question: " 에러 발생이 있거나 수정을 권고하는 중요 위반 사항",
    answer: "권고 중",
  },
  {
    question:
      "소스코드의 가독성, 유지·보수성 향상을 위해 수정을 권고하는 위반 사항",
    answer: "권고 하",
  },
  {
    question: "정보성으로 제공되는 위반 사항으로 개발자가 참고하여 적용",
    answer: "정보",
  },
  {
    question: " 1개의 문자와 일치",
    answer: ".",
  },
  {
    question: " 문자 클래스로 사이의 문자 중에서 하나 선택",
    answer: "[]",
  },
  {
    question: "클래스 안의 문자를 제외한 나머지 선택",
    answer: "[^]",
  },
  {
    question: "문자열이나 행의 처음",
    answer: "^",
  },
  {
    question: "문자열이나 행의 끝",
    answer: "$",
  },
  {
    question: "일치하는 n번 째 패턴",
    answer: "\n",
  },
  {
    question: "0개 이상의 문자를 포함",
    answer: "*",
  },
  {
    question: "m회 이상 n회 이하 반복",
    answer: "{m,n}",
  },
  {
    question: "자바용 테스트 프레임 워크에는 ( )이 있다",
    answer: "Junit",
  },
  {
    question:
      "테스트 케이스를 별도의 테스트 코드로 작성하고 동작시킬 수 있는 환경을 제공하는 도구",
    answer: "테스트 프레임워크",
  },
  {
    question:
      "애플리케이션의 배포 단위, 형식에 따라 소스코드를 컴파일, 패키징하며, 배포하는 스크립트를 제공하고 수행하는 도구",
    answer: "빌드 도구",
  },
  {
    question:
      "개발된 소스코드를 테스트할 수 있는 테스트 코드를 작성, 동작시킬 수 있는 도구로, 통합 빌드 수행 시 연결",
    answer: " 테스트 도구",
  },
  {
    question:
      "정해진 소스코드 작성 규칙에 따라 소스코드를 점검하고 규칙 위반 여부를 체크하는 도구로, 통합 빌드 수행 시 연결",
    answer: "소스코드 품질 측정도구",
  },
  {
    question:
      "전체 프로그램의 범위 대비 테스트 수행 시 해당 테스트 수행을 위해동작된 프로그램의 범위 비율",
    answer: "테스트 커버리지",
  },
  {
    question: " 개발 소스의 각 라인이 수행되었는지를 확인하는 측정 지표",
    answer: "라인 커버리지",
  },
  {
    question: "개발소스의 각 분기문이 수행되었는지를 확인하는 측정 지표",
    answer: "분기 커버리지",
  },
  {
    question:
      "각 분기문 내에 존재하는 조건식이 모두 테스트되었는지를 확인하는 측정 지표",
    answer: "조건 커버리지",
  },
  {
    question:
      "애플리케이션 배치의 ( )은 배치 작업 시 input, output 정보를 활용하는 작업 파일을 말함",
    answer: "SAM 파일",
  },
];

export let question2 = [
  {
    question:
      "사용자로 하여금 컴퓨터의 하드웨어를 보다 쉽게 사용할 수 있도록 인터페이스를 제공해 주는 소프트웨어",
    answer: "",
  },
  {
    question: "윈도우즈 계열의 운영체제는 편리한 ( )를 지원하는 특징이 있다",
    answer: "",
  },
  {
    question: "리눅스의 최상위 디렉토리",
    answer: "",
  },
  {
    question: "리눅스의 최상위 디렉토리 아래의 root계정의 홈 디렉토리",
    answer: "",
  },
  {
    question: "리눅스의 최상위 유저는 CLI 환경에서 ( )으로 표시",
    answer: "",
  },
  {
    question: "리눅스는 일반 유저를 ( )으로 표시",
    answer: "",
  },
  {
    question: "리눅스에서 디렉토리 이동 시 사용하는 명령어",
    answer: "",
  },
  {
    question:
      "프로그램의 실행이 종료될 때까지 메모리를 가용한 상태로 유지 및 관리하는 운영체제의 기능",
    answer: "",
  },
  {
    question:
      "운영체제에서 메모리에 있는 프로그램을 CPU로 이동하여 처리하는데 이를 매핑하는 작업을 담당",
    answer: "",
  },
  {
    question:
      "( ) 가상화는 하드웨어 플랫폼 위에서 실행되는 호스트 프로그램이 게스트 프로그램을 만들어 마치 독립된 환경처럼 보여줌",
    answer: "",
  },
  {
    question: "( ) 가상화는 메모리, 저장 장치, 네트워크 등을 결합하거나 나눔",
    answer: "",
  },
  {
    question: "인터넷 기반에서 구동되는 컴퓨팅 기술",
    answer: "",
  },
  {
    question:
      "웹상에서 구글, 마이크로소프트, 아마존 등에서 제공하는 환경의 네트워크, 보안, 데이터 저장소, 콘텐츠 딜리버리 서비스를 포함한 다양한 인프라를 임대하여 이용할 수 있는 서비스 ",
    answer: "",
  },
  {
    question:
      "운영체제가 이미 구성되어 있는 상태에서 사용자는 데이터와 애플리케이션만 직접 관리할 수 있는 서비스",
    answer: "",
  },
  {
    question:
      "인프라와 운영체제뿐만 아니라 사용할 수 있는 소프트웨어까지 갖추어져 웹상의 로그인만으로 다양한 소프트웨어를 사용한 만큼 비용을 지불해 가며 사용할 수 있는 서비스",
    answer: "",
  },
  {
    question:
      "데이터 관리의 복잡성을 해결하는 동시에 데이터 추가, 변경, 검색, 삭제 및 백업, 복구, 보안 등의 기능을 지원하는 소프트웨어",
    answer: "",
  },
  {
    question: "데이터베이스의 종류",
    answer: "",
  },
  {
    question:
      "파일 시스템에서 ( )는 자료 내용은 주 저장부, 자료의 색인은 자료가 기록된 위치와 함께 색인부에 기록되는 시스템이다",
    answer: "",
  },
  {
    question:
      "파일 시스템에서 ( )는 대형 운영 체계에서 사용되는 파일 관리시스템이다",
    answer: "",
  },
  {
    question:
      "데이터를 저장하는 테이블의 일부를 다른 테이블과 상하 관계로 표시하며 상관관계를 정리하며, 데이터 구조에 대한 유연성이 좋아 유지 관리가 용이",
    answer: "",
  },
  {
    question: "DBMS의 특징",
    answer: "",
  },
  {
    question:
      "업무 분석 결과로 도출된 실체(엔티티)와 엔티티 간의 관계를 도식화한 것",
    answer: "",
  },
  {
    question: "ERD의 구성 요소",
    answer: "",
  },
  {
    question: "ERD에서 엔티티의 기호",
    answer: "",
  },
  {
    question: "ERD에서 속성의 기호",
    answer: "",
  },
  {
    question: "ERD에서 관계의 기호",
    answer: "",
  },
  {
    question: "ERD에서 1:1 관계 기호",
    answer: "",
  },
  {
    question: "ERD에서 1:m 관계 기호",
    answer: "",
  },
  {
    question: "ERD에서 n:m, 관계 기호",
    answer: "",
  },
  {
    question: "반복되는 그룹의 속성을 별도로 추출",
    answer: "",
  },
  {
    question: "부분 함수적 종속성을 제거",
    answer: "",
  },
  {
    question: "키에 종속되지 않은 칼럼을 제거",
    answer: "",
  },
  {
    question: "테이블 내 칼럼에 데이터를 추가 DB명령어",
    answer: "",
  },
  {
    question: "테이블 내 칼럼에 저장된 데이터 검색 DB명령어",
    answer: "",
  },
  {
    question: "데이터 수정 DB명령어",
    answer: "",
  },
  {
    question: "데이터삭제 DB명령어",
    answer: "",
  },
  {
    question: "테이블을 전체 삭제하는 DB명령어",
    answer: "",
  },
  {
    question:
      "테이블 내 데이터의 검색 속도를 향상시킬 수 있는 인덱스를 생성하는 DB명령어",
    answer: "",
  },
  {
    question: "광대역 네트워크",
    answer: "",
  },
  {
    question: "근거리 네트워크",
    answer: "",
  },
  {
    question: "패킷이라는 단위를 사용하여 데이터를 송신하고 수신하는 네트워크 연결 방식",
    answer: "",
  },
  {
    question: "데이터링크 계층의 주요 장비",
    answer: "",
  },
  {
    question: "네트워크 계층의 주요 장비",
    answer: "",
  },
  {
    question: "송신, 수신 프로세스 간의 연결을 담당하는 계층",
    answer: "",
  },
  {
    question: "최적 경로를 선택하는 계층",
    answer: "",
  },
  {
    question: "오류와 흐름제어로 신뢰성 있는 데이터를 전송하는 계층",
    answer: "",
  },
  {
    question: "송수신 간의 논리적 연결을 하는 계층",
    answer: "",
  },
  {
    question: "문자 번역, 압축, 보안 등의 기능을 하는 계층",
    answer: "",
  },
  {
    question: "사용자 환경 제공 기능을 담당하는 계층",
    answer: "",
  },
  {
    question: "MAC 주소를 추가하여 전달하는 계층",
    answer: "",
  },
  {
    question: "전송 계층은 ()헤더",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
];
