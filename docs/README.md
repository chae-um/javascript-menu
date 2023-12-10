# Phase 1 - Coach, Food -

- [ ] Food

  - [ ] `category`에 카테고리를 입력 받는다.

    - [ ] 문자열이 아닌 값이 들어오면 에러가 발생한다.

  - [ ] `name`에 이름을 입력 받는다.

    - [ ] 문자열이 아닌 값이 들어오면 에러가 발생한다.

  - [ ] `info()` 호출시 `Food`의 정보를 반환한다.

- [ ] Coach

  - [ ] `name`에 `2`에서 `4` 글자 사이의 이름을 받는다.

    - [ ] 문자열이 아닌 값이 들어오면 에러가 발생한다.
    - [ ] `2`에서 `4` 글자 사이가 아닌 값이 들어오면 에러가 발생한다.

  - [ ] `inedible`에 `0`에서 `2`개의 `Food`를 받는다.
    - [ ] `0`에서 `2`개의 음식이 아니면 에러가 발생한다.
    - [ ] 존재하지 않는 음식이면 에러가 발생한다.

# Phase 2 - FoodProvider -

- [ ] FoodProvider

  - [ ] `serve(name)` 호출시 입력받은 `name`의 `Food`를 반환한다.
    - [ ] 존재하지 않는 음식이면 에러가 발생한다.
  - [ ] `serveRandomFood(category)` 입력시 입력받은 카테고리의 랜덤 음식을 반환한다.

- [ ] Coach

  - [ ] `inedible`에 `0`에서 `2`개의 `Food`를 받는다.
    - [ ] `0`에서 `2`개의 음식이 아니면 에러가 발생한다.
    - [ ] 존재하지 않는 음식이면 에러가 발생한다.

# Phase 3 - Recommend -

- [ ] Recommend

  - [ ] `coaches`에 `2`에서 `5`명 사이의 `Coach`를 입력받는다.
    - [ ] `2`에서 `5`명 사이가 아니라면 에러가 발생한다.
  - [ ] `division`에 구분 요소(요일)을 입력한다.
  - [ ] `categories`에 카테고리를 입력한다.

  - [ ] `matchingDivision()` 호출시 `division`마다 `categories`를 할당한다.

  - [ ] `recommendCategories()` 호출시 튜플 형태로 결과를 반환한다.

  - [ ] `recommend()` 호출시 `division`의 랜덤 추첨 결과를 생성한다.

- [ ] Coach

  - [ ] `addFood(food)` 호출시 `menu`에 `food`를 추가한다.
  - [ ] `info()` 호출시 `Coach`의 정보를 반환한다.
