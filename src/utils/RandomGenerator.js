import { Random } from '@woowacourse/mission-utils';

const RandomGenerator = {
  run() {
    return Random.pickNumberInRange(1, 5);
  },
};

export default RandomGenerator;
