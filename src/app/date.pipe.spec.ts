import { DatePipe } from './date-counter.pipe';

describe('DatePipe', () => {
  it('create an instance', () => {
    const pipe = new DatePipe();
    expect(pipe).toBeTruthy();
  });
});
