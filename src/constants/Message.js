import RECOMMANDATION_OPTION from './Option.js';
import { DIVIDER, NEWLINE } from './Symbol.js';

export const MESSAGES = Object.freeze({
  start: `점심 메뉴 추천을 시작합니다.${NEWLINE}`,
  enterCoachNames: `코치의 이름을 입력해 주세요. (${DIVIDER.input} 로 구분)${NEWLINE}`,
  result: `${NEWLINE}메뉴 추천 결과입니다.`,
  end: `${NEWLINE}추천을 완료했습니다.`,
});

export const ERROR_MESSAGES = Object.freeze({
  invalidCoachNameLength: `코치의 이름은 ${RECOMMANDATION_OPTION.nameMinLength}자 이상 ${RECOMMANDATION_OPTION.nameMaxLength}자 이하여야 합니다.${NEWLINE}`,
  invalidCoachAmount: `코치는 ${RECOMMANDATION_OPTION.coachMinAMount}명 이상 ${RECOMMANDATION_OPTION.coachMaxAmount}명 이하여야 합니다.${NEWLINE}`,
  invalidDislikeMenuAmount: `먹지 못하는 메뉴는 ${RECOMMANDATION_OPTION.dislikeMenuMinAmount}개 이상 ${RECOMMANDATION_OPTION.dislikeMenuMaxAmount}개 이하여야 합니다.${NEWLINE}`,
  invalidDislikeMenuName: `유효하지 않은 메뉴 이름이 입력되었습니다.${NEWLINE}`,
});

export const INDEX = Object.freeze({
  weekCategory: '구분',
  menuCategory: '카테고리',
});

export const FORMATS = Object.freeze({
  enterDislikeMenus(name) {
    return `${NEWLINE}${name}(이)가 못 먹는 메뉴를 입력해 주세요.${NEWLINE}`;
  },

  braket(message) {
    return `[ ${message} ]`;
  },
});
