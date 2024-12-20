import { ResolveFn } from '@angular/router';
import { of } from 'rxjs';

export const userResolver: ResolveFn<{ name: string; age: number }> = (route, state) => {
  return of({ name: 'Satish Konduru', age: 43 });
};
