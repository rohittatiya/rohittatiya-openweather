import { DatePipe } from './date.pipe';

describe('DatePipe', () => {
  let pipe: DatePipe;

  beforeEach(() => {
    pipe = new DatePipe();
  });

  it('Create an filter instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('Convert Datetime from response of api to formatted string as date in the form of (2017-10-18T18:00:00.000Z)', () => {
    expect(pipe.transform('1508349600').toISOString()).toBe(
      '2017-10-18T18:00:00.000Z'
    );
  });
});
