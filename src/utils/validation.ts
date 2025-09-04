export function validateLoginForm(email: FormDataEntryValue | null, password: FormDataEntryValue | null): string | null {
  if (!email || !password) {
    return 'Email and password are required';
  }
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email as string)) {
    return 'Please enter a valid email address';
  }
  
  return null; // No errors
}
