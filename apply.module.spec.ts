import { ApplyModule } from './apply.module';

describe('ApplyModule', () => {
  let applyModule: ApplyModule;

  beforeEach(() => {
    applyModule = new ApplyModule();
  });

  it('should create an instance', () => {
    expect(applyModule).toBeTruthy();
  });
});
