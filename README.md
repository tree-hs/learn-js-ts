# learn-js-ts

JavaScript 심화와 TypeScript를 6주 동안 주차별 과제로 익히는 저장소입니다. 화면 없이 로직만 작성하고 테스트로 확인합니다.

## 실행 방법

Node.js 24 이상이 필요합니다.

```bash
npm install
npm test
```

| 명령 | 하는 일 |
| --- | --- |
| `npm run dev` | `src/index.js`를 실행하고, 파일을 저장할 때마다 다시 실행 |
| `npm test` | 테스트를 한 번 실행 |
| `npm run test:watch` | 파일을 저장할 때마다 테스트를 다시 실행 |
| `npm run typecheck` | TypeScript 타입 검사 |

## 주차별 과제

| 주 | 주제 | 과제 |
| --- | --- | --- |
| 1 | 스코프, 클로저, 배열 메서드(map, filter, reduce, sort) | 주문 목록 데이터로 합계·그룹핑·정렬 함수 10개와 테스트 |
| 2 | 객체, 구조 분해, 스프레드, 모듈, 불변성 | 장바구니 로직(추가, 삭제, 수량 변경, 할인)을 순수 함수로 |
| 3 | Promise, async/await, fetch, 에러 처리 | 공개 API 호출, 재시도·타임아웃 함수 |
| 4 | TypeScript 기초: 타입, interface, union, 타입 좁히기 | 1~3주 코드를 전부 TypeScript로 변환 |
| 5 | 제네릭, 유틸리티 타입, API 응답 타입 | 타입이 보장되는 fetch 함수 `request<T>()` |
| 6 | DOM, 이벤트, localStorage | 프레임워크 없이 TypeScript로 할 일 목록 |

1~3주차는 `.js`로 작성하고 4주차에 `.ts`로 바꿉니다.

## 폴더 구조

```
src/
  index.js        npm run dev 로 실행되는 파일
  week01/         주차별 과제 코드와 테스트 (orders.js, orders.test.js ...)
```

## 작업 방식

이슈 → 브랜치(`feat/...`) → 커밋 → push → PR → 리뷰 → squash merge 순서로 진행합니다. `main`에는 직접 커밋하지 않습니다.

커밋 메시지 접두어: `feat`, `fix`, `refactor`, `docs`, `test`, `chore`

## AI 활용 범위

- 맡긴 작업: 저장소 초기 세팅(패키지 설치, tsconfig, 템플릿 파일), 과제 코드 리뷰
- 직접 한 작업: 과제 코드와 테스트 구현
