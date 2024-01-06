import { describe, it, expect } from 'vitest';
import {
  getCircularProgressBtnStyle,
  ProgressFlag,
} from './circularProgressStyles';

describe('Getting Circular Progress Button Style', () => {
  it.each<[ProgressFlag]>([['error'], ['success']])(
    'property flag is set to %s',
    (flag) => {
      const style = getCircularProgressBtnStyle(flag);

      expect(style).haveOwnProperty('bgcolor');
      expect(style).haveOwnProperty('&:hover');
    }
  );

  it.each<[ProgressFlag | undefined]>([['default'], [undefined]])(
    'property flag is set to %s',
    (flag) => {
      const style = getCircularProgressBtnStyle(flag);

      expect(style).not.haveOwnProperty('bgcolor');
      expect(style).not.haveOwnProperty('&:hover');
    }
  );
});
