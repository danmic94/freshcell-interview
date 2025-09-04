import { validateLoginForm } from '../src/utils/validation';

describe('validateLoginForm', () => {
  it('should return error when email is missing', () => {
    const result = validateLoginForm(null, 'password123');
    expect(result).toBe('Email and password are required');
  });

  it('should return error when password is missing', () => {
    const result = validateLoginForm('test@example.com', null);
    expect(result).toBe('Email and password are required');
  });

  it('should return error when both are missing', () => {
    const result = validateLoginForm(null, null);
    expect(result).toBe('Email and password are required');
  });

  it('should return error for invalid email format', () => {
    const result = validateLoginForm('invalid-email', 'password123');
    expect(result).toBe('Please enter a valid email address');
  });

  it('should return error for email without domain', () => {
    const result = validateLoginForm('test@', 'password123');
    expect(result).toBe('Please enter a valid email address');
  });

  it('should return null for valid inputs', () => {
    const result = validateLoginForm('test@example.com', 'password123');
    expect(result).toBeNull();
  });

  it('should return null for valid email with subdomain', () => {
    const result = validateLoginForm('test@sub.example.com', 'password123');
    expect(result).toBeNull();
  });
});
