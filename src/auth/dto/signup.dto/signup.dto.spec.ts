import { SignUpDto } from "./signup.dto";

describe('SignupDto', () => {
  it('should be defined', () => {
    expect(new SignUpDto()).toBeDefined();
    
  });
});
