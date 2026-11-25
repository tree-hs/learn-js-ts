// 세팅 확인용 테스트. vitest가 동작하는지만 본다. 1주차 과제를 시작하면 지워도 된다.
import { describe, expect, it } from 'vitest';

describe('세팅 확인', () => {
  it('vitest가 테스트를 실행한다', () => {
    expect(1 + 1).toBe(2);
  });
});
