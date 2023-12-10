# Phase 1 - Coach, Food -

- [x] Food

  - [x] `category`에 카테고리를 입력 받는다.

    - [x] 문자열이 아닌 값이 들어오면 에러가 발생한다.

  - [x] `name`에 이름을 입력 받는다.

    - [x] 문자열이 아닌 값이 들어오면 에러가 발생한다.

  - [x] `info()` 호출시 `Food`의 정보를 반환한다.

- [x] Coach

  - [x] `name`에 `2`에서 `4` 글자 사이의 이름을 받는다.

    - [x] 문자열이 아닌 값이 들어오면 에러가 발생한다.
    - [x] `2`에서 `4` 글자 사이가 아닌 값이 들어오면 에러가 발생한다.

  - [x] `inedible`에 `0`에서 `2`개의 `Food`를 받는다.
    - [x] `0`에서 `2`개의 음식이 아니면 에러가 발생한다.

# Phase 2 - FoodProvider -

- [x] FoodProvider

  - [x] `serve(name)` 호출시 입력받은 `name`의 `Food`를 반환한다.
    - [x] 존재하지 않는 음식이면 에러가 발생한다.
  - [x] `serveRandomFood(category)` 입력시 입력받은 카테고리의 랜덤 음식을 반환한다.

- [x] Coach

  - [x] `inedible`에 `0`에서 `2`개의 `Food`를 받는다.
    - [x] `0`에서 `2`개의 음식이 아니면 에러가 발생한다.
    - [x] 존재하지 않는 음식이면 에러가 발생한다.

# Phase 3 - Recommend -

- [x] Recommend

  - [x] `coaches`에 `2`에서 `5`명 사이의 `Coach`를 입력받는다.
    - [x] `2`에서 `5`명 사이가 아니라면 에러가 발생한다.
    - [x] 중복된 이름이 입력되면 에러가 발생한다.
  - [x] `division`에 구분 요소(요일)을 입력한다.

  - [x] `matchingDivisions()` 호출시 `division`마다 `categories`를 할당한다.

  - [x] `computeRecommendMenu()` 추천 메뉴를 계산한다.

- [x] Coach

  - [x] `addFood(food)` 호출시 `menu`에 `food`를 추가한다.
  - [x] `isExistedFood(food)` 호출시 `menu`에 `food`가 존재하는지 확인한다.
  - [x] `isInedible(food)` 호출시 `inedible`에 `food`가 존재하는지 확인한다.
  - [x] `info()` 호출시 `Coach`의 정보를 반환한다.
